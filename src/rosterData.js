/**
 * NFL Roster Data Module
 * Handles loading and accessing NFL team roster data
 */

const fs = require('fs');
const path = require('path');

class RosterDatabase {
    constructor(dataPath = path.join(__dirname, '..', 'data', 'nfl')) {
        this.dataPath = dataPath;
        this.teamsIndex = null;
        this.loadedRosters = new Map();
    }

    /**
     * Load the teams index file
     */
    loadTeamsIndex() {
        if (this.teamsIndex) {
            return this.teamsIndex;
        }

        const indexPath = path.join(this.dataPath, 'teams.json');
        const data = fs.readFileSync(indexPath, 'utf8');
        this.teamsIndex = JSON.parse(data);
        return this.teamsIndex;
    }

    /**
     * Get all available teams
     */
    getAllTeams() {
        const index = this.loadTeamsIndex();
        return index.teams;
    }

    /**
     * Load a specific team's roster
     * @param {string} teamId - The team identifier (e.g., 'atlanta-falcons')
     */
    loadTeamRoster(teamId) {
        // Check if already loaded
        if (this.loadedRosters.has(teamId)) {
            return this.loadedRosters.get(teamId);
        }

        // Find team in index
        const teams = this.getAllTeams();
        const team = teams.find(t => t.id === teamId);

        if (!team) {
            throw new Error(`Team not found: ${teamId}`);
        }

        // Load roster data
        const rosterPath = path.join(this.dataPath, team.dataFile);
        const data = fs.readFileSync(rosterPath, 'utf8');
        const roster = JSON.parse(data);

        // Cache the loaded roster
        this.loadedRosters.set(teamId, roster);

        return roster;
    }

    /**
     * Get players by position
     * @param {string} teamId - The team identifier
     * @param {string} position - The position code (e.g., 'QB', 'RB', 'WR')
     */
    getPlayersByPosition(teamId, position) {
        const roster = this.loadTeamRoster(teamId);
        return roster.roster.filter(player => player.position === position);
    }

    /**
     * Get player by jersey number
     * @param {string} teamId - The team identifier
     * @param {number} number - The jersey number
     */
    getPlayerByNumber(teamId, number) {
        const roster = this.loadTeamRoster(teamId);
        return roster.roster.find(player => player.number === number);
    }

    /**
     * Search players by name
     * @param {string} teamId - The team identifier
     * @param {string} searchTerm - The search term
     */
    searchPlayers(teamId, searchTerm) {
        const roster = this.loadTeamRoster(teamId);
        const term = searchTerm.toLowerCase();
        return roster.roster.filter(player =>
            player.name.toLowerCase().includes(term)
        );
    }

    /**
     * Get roster organized by position groups
     * @param {string} teamId - The team identifier
     */
    getRosterByPositionGroup(teamId) {
        const roster = this.loadTeamRoster(teamId);

        const groups = {
            'Offense': {
                'Quarterback': [],
                'Running Back': [],
                'Wide Receiver': [],
                'Tight End': [],
                'Offensive Line': []
            },
            'Defense': {
                'Defensive Line': [],
                'Linebacker': [],
                'Defensive Back': []
            },
            'Special Teams': {
                'Kicker': [],
                'Punter': [],
                'Long Snapper': []
            }
        };

        roster.roster.forEach(player => {
            switch(player.position) {
                case 'QB':
                    groups.Offense.Quarterback.push(player);
                    break;
                case 'RB':
                    groups.Offense['Running Back'].push(player);
                    break;
                case 'WR':
                    groups.Offense['Wide Receiver'].push(player);
                    break;
                case 'TE':
                    groups.Offense['Tight End'].push(player);
                    break;
                case 'OT':
                case 'OG':
                case 'C':
                    groups.Offense['Offensive Line'].push(player);
                    break;
                case 'DE':
                case 'DT':
                    groups.Defense['Defensive Line'].push(player);
                    break;
                case 'LB':
                    groups.Defense.Linebacker.push(player);
                    break;
                case 'CB':
                case 'S':
                    groups.Defense['Defensive Back'].push(player);
                    break;
                case 'K':
                    groups['Special Teams'].Kicker.push(player);
                    break;
                case 'P':
                    groups['Special Teams'].Punter.push(player);
                    break;
                case 'LS':
                    groups['Special Teams']['Long Snapper'].push(player);
                    break;
            }
        });

        return {
            teamInfo: roster.teamInfo,
            groups: groups
        };
    }

    /**
     * Get team statistics
     * @param {string} teamId - The team identifier
     */
    getTeamStats(teamId) {
        const roster = this.loadTeamRoster(teamId);

        const stats = {
            totalPlayers: roster.roster.length,
            averageAge: 0,
            averageWeight: 0,
            rookies: 0,
            veterans: 0,
            byPosition: {}
        };

        let totalAge = 0;
        let totalWeight = 0;

        roster.roster.forEach(player => {
            // Age and weight
            if (player.age) totalAge += player.age;
            if (player.weight) totalWeight += player.weight;

            // Experience
            if (player.experience === 'R') {
                stats.rookies++;
            } else {
                stats.veterans++;
            }

            // Position counts
            if (!stats.byPosition[player.position]) {
                stats.byPosition[player.position] = 0;
            }
            stats.byPosition[player.position]++;
        });

        stats.averageAge = (totalAge / roster.roster.length).toFixed(1);
        stats.averageWeight = (totalWeight / roster.roster.length).toFixed(1);

        return stats;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RosterDatabase;
}

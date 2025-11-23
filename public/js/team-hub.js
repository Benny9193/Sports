// Generic Team Hub Viewer
let teamData = null;
let currentFilter = 'all';
let searchTerm = '';
let isCollegeTeam = false;

// Position group mappings
const positionGroups = {
    offense: ['QB', 'RB', 'WR', 'TE', 'OL', 'OT', 'OG', 'C'],
    defense: ['DE', 'DT', 'DL', 'LB', 'CB', 'S', 'DB'],
    special: ['K', 'P', 'LS']
};

// Load team data when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await loadTeamData();
    setupEventListeners();
    renderPage();
});

// Get team data path from URL parameters
function getTeamDataPath() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('team') || '/data/nfl/teams/atlanta-falcons.json';
}

// Load team data from JSON file
async function loadTeamData() {
    try {
        const dataPath = getTeamDataPath();
        // Determine if this is a college team based on path
        isCollegeTeam = dataPath.includes('ncaa-football');
        
        const response = await fetch(dataPath);
        if (!response.ok) {
            throw new Error('Failed to load team data');
        }
        teamData = await response.json();
        
        // Update page title
        if (teamData.teamInfo) {
            document.getElementById('pageTitle').textContent = `${teamData.teamInfo.name} Hub`;
            document.title = `${teamData.teamInfo.name} Hub - Sports Compendium`;
        }
    } catch (error) {
        console.error('Error loading team data:', error);
        document.getElementById('rosterContainer').innerHTML = `
            <div class="no-results">
                <h3>Error Loading Team Data</h3>
                <p>Unable to load the team data. Please try again later.</p>
            </div>
        `;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('playerSearch');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderRoster();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderRoster();
        });
    });
}

// Render the entire page
function renderPage() {
    if (!teamData) return;

    renderTeamInfo();
    renderStats();
    renderRoster();
}

// Render team information
function renderTeamInfo() {
    const teamInfoContainer = document.getElementById('teamInfo');
    const { teamInfo } = teamData;

    let detailsHTML = '';
    
    if (teamInfo.conference) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Conference</strong>
                ${teamInfo.conference}
            </div>
        `;
    }
    
    if (teamInfo.division && teamInfo.division !== '') {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Division</strong>
                ${teamInfo.division}
            </div>
        `;
    }
    
    if (teamInfo.stadium) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Stadium</strong>
                ${teamInfo.stadium}
            </div>
        `;
    }
    
    if (teamInfo.headCoach) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Head Coach</strong>
                ${teamInfo.headCoach}
            </div>
        `;
    }
    
    if (teamInfo.founded) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Founded</strong>
                ${teamInfo.founded}
            </div>
        `;
    }
    
    if (teamInfo.colors && teamInfo.colors.length > 0) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Colors</strong>
                ${teamInfo.colors.join(', ')}
            </div>
        `;
    }

    if (teamInfo.mascot) {
        detailsHTML += `
            <div class="team-detail-item">
                <strong>Mascot</strong>
                ${teamInfo.mascot}
            </div>
        `;
    }

    teamInfoContainer.innerHTML = `
        <h2>${teamInfo.name}</h2>
        <div class="team-details">
            ${detailsHTML}
        </div>
    `;
}

// Calculate and render roster statistics
function renderStats() {
    const statsContainer = document.getElementById('rosterStats');
    const { roster } = teamData;

    let totalWeight = 0;
    let weightCount = 0;
    let yearCounts = {};
    let positionCounts = {};

    roster.forEach(player => {
        if (player.weight) {
            totalWeight += player.weight;
            weightCount++;
        }
        
        // Count by year (college) or experience (NFL)
        const yearOrExp = player.year || player.experience;
        if (yearOrExp) {
            yearCounts[yearOrExp] = (yearCounts[yearOrExp] || 0) + 1;
        }

        positionCounts[player.position] = (positionCounts[player.position] || 0) + 1;
    });

    const avgWeight = weightCount > 0 ? (totalWeight / weightCount).toFixed(0) : 'N/A';
    
    // Determine what to show based on team type
    let thirdStat = '';
    if (isCollegeTeam) {
        const freshmen = yearCounts['Freshman'] || 0;
        thirdStat = `
            <div class="stat-item">
                <div class="stat-value">${freshmen}</div>
                <div class="stat-label">Freshmen</div>
            </div>
        `;
    } else {
        const rookies = yearCounts['R'] || 0;
        thirdStat = `
            <div class="stat-item">
                <div class="stat-value">${rookies}</div>
                <div class="stat-label">Rookies</div>
            </div>
        `;
    }

    statsContainer.innerHTML = `
        <h3>Roster Statistics</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">${roster.length}</div>
                <div class="stat-label">Total Players</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${avgWeight} lbs</div>
                <div class="stat-label">Average Weight</div>
            </div>
            ${thirdStat}
        </div>
    `;
}

// Render the roster based on current filter and search
function renderRoster() {
    const container = document.getElementById('rosterContainer');
    const { roster } = teamData;

    // Filter players
    let filteredPlayers = roster.filter(player => {
        // Apply search filter
        const searchableFields = [
            player.name,
            player.position,
            player.hometown || '',
            player.highSchool || '',
            player.college || ''
        ].join(' ').toLowerCase();
        
        const matchesSearch = !searchTerm || searchableFields.includes(searchTerm);

        // Apply position group filter
        let matchesFilter = true;
        if (currentFilter !== 'all') {
            matchesFilter = positionGroups[currentFilter].includes(player.position);
        }

        return matchesSearch && matchesFilter;
    });

    // Check if we have results
    if (filteredPlayers.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No Players Found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }

    // Organize players by position groups
    const organized = organizeByPositionGroups(filteredPlayers);

    // Render organized roster
    let html = '';

    if (currentFilter === 'all' || currentFilter === 'offense') {
        html += renderPositionGroup('Offense', organized.offense);
    }

    if (currentFilter === 'all' || currentFilter === 'defense') {
        html += renderPositionGroup('Defense', organized.defense);
    }

    if (currentFilter === 'all' || currentFilter === 'special') {
        html += renderPositionGroup('Special Teams', organized.special);
    }

    container.innerHTML = html;
}

// Organize players by position groups
function organizeByPositionGroups(players) {
    const groups = {
        offense: {
            'Quarterback': [],
            'Running Back': [],
            'Wide Receiver': [],
            'Tight End': [],
            'Offensive Line': []
        },
        defense: {
            'Defensive Line': [],
            'Linebacker': [],
            'Defensive Back': []
        },
        special: {
            'Specialists': []
        }
    };

    players.forEach(player => {
        switch(player.position) {
            case 'QB':
                groups.offense.Quarterback.push(player);
                break;
            case 'RB':
                groups.offense['Running Back'].push(player);
                break;
            case 'WR':
                groups.offense['Wide Receiver'].push(player);
                break;
            case 'TE':
                groups.offense['Tight End'].push(player);
                break;
            case 'OT':
            case 'OG':
            case 'C':
            case 'OL':
                groups.offense['Offensive Line'].push(player);
                break;
            case 'DE':
            case 'DT':
            case 'DL':
                groups.defense['Defensive Line'].push(player);
                break;
            case 'LB':
                groups.defense.Linebacker.push(player);
                break;
            case 'CB':
            case 'S':
            case 'DB':
                groups.defense['Defensive Back'].push(player);
                break;
            case 'K':
            case 'P':
            case 'LS':
                groups.special.Specialists.push(player);
                break;
        }
    });

    return groups;
}

// Render a position group
function renderPositionGroup(groupName, categories) {
    let hasPlayers = Object.values(categories).some(players => players.length > 0);
    if (!hasPlayers) return '';

    let html = `<div class="position-group"><h2>${groupName}</h2>`;

    for (const [categoryName, players] of Object.entries(categories)) {
        if (players.length > 0) {
            html += `
                <div class="position-category">
                    <h3>${categoryName}</h3>
                    <div class="players-grid">
                        ${players.map(player => renderPlayerCard(player)).join('')}
                    </div>
                </div>
            `;
        }
    }

    html += '</div>';
    return html;
}

// Render a single player card
function renderPlayerCard(player) {
    // Determine what to show for experience/year
    let experienceLabel = '';
    if (isCollegeTeam) {
        experienceLabel = `<strong>Year:</strong> ${player.year || 'N/A'}`;
    } else {
        const exp = player.experience === 'R' ? 'Rookie' : `${player.experience} years`;
        experienceLabel = `<strong>Exp:</strong> ${exp}`;
    }

    // Determine what to show for school
    let schoolLabel = '';
    if (isCollegeTeam) {
        if (player.hometown) {
            schoolLabel = `<strong>Hometown:</strong> ${player.hometown}`;
        }
    } else {
        if (player.college) {
            schoolLabel = `<strong>College:</strong> ${player.college}`;
        }
    }

    // Age display (NFL only)
    let ageLabel = '';
    if (!isCollegeTeam && player.age) {
        ageLabel = `
            <div class="player-detail">
                <strong>Age:</strong> ${player.age}
            </div>
        `;
    }

    return `
        <div class="player-card">
            <div class="player-header">
                <div class="player-number">${player.number}</div>
                <div class="player-name-pos">
                    <div class="player-name">${player.name}</div>
                    <span class="player-position">${player.position}</span>
                </div>
            </div>
            <div class="player-details">
                <div class="player-detail">
                    <strong>Height:</strong> ${player.height}
                </div>
                <div class="player-detail">
                    <strong>Weight:</strong> ${player.weight} lbs
                </div>
                ${ageLabel}
                <div class="player-detail">
                    ${experienceLabel}
                </div>
                <div class="player-detail" style="grid-column: 1 / -1;">
                    ${schoolLabel}
                </div>
            </div>
        </div>
    `;
}

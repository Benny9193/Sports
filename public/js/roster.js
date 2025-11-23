// NFL Team Roster Viewer
let teamsIndex = null;
let rosterData = null;
let currentTeamId = null;
let currentFilter = 'all';
let searchTerm = '';

// Position group mappings
const positionGroups = {
    offense: ['QB', 'RB', 'WR', 'TE', 'OT', 'OG', 'C'],
    defense: ['DE', 'DT', 'LB', 'CB', 'S'],
    special: ['K', 'P', 'LS']
};

// Team color schemes
const teamColors = {
    'atlanta-falcons': {
        primary: '#A71930',
        secondary: '#000000'
    },
    'jacksonville-jaguars': {
        primary: '#006778',
        secondary: '#D7A22A'
    }
};

// Load teams and initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    await loadTeamsIndex();
    setupEventListeners();

    // Load default team from URL or first team
    const urlParams = new URLSearchParams(window.location.search);
    const teamParam = urlParams.get('team');

    if (teamParam && teamsIndex.teams.find(t => t.id === teamParam)) {
        await loadTeam(teamParam);
    } else if (teamsIndex && teamsIndex.teams.length > 0) {
        await loadTeam(teamsIndex.teams[0].id);
    }
});

// Load teams index
async function loadTeamsIndex() {
    try {
        const response = await fetch('/data/nfl/teams.json');
        if (!response.ok) {
            throw new Error('Failed to load teams index');
        }
        teamsIndex = await response.json();
        populateTeamSelector();
    } catch (error) {
        console.error('Error loading teams index:', error);
        document.getElementById('teamSelect').innerHTML = '<option value="">Error loading teams</option>';
    }
}

// Populate team selector dropdown
function populateTeamSelector() {
    const select = document.getElementById('teamSelect');
    select.innerHTML = '';

    teamsIndex.teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.id;
        option.textContent = team.name;
        select.appendChild(option);
    });
}

// Load a specific team's roster
async function loadTeam(teamId) {
    try {
        const team = teamsIndex.teams.find(t => t.id === teamId);
        if (!team) {
            throw new Error(`Team not found: ${teamId}`);
        }

        const response = await fetch(`/data/nfl/${team.dataFile}`);
        if (!response.ok) {
            throw new Error('Failed to load roster data');
        }

        rosterData = await response.json();
        currentTeamId = teamId;

        // Update team selector
        document.getElementById('teamSelect').value = teamId;

        // Update page title
        document.getElementById('pageTitle').textContent = rosterData.teamInfo.name;

        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('team', teamId);
        window.history.pushState({}, '', url);

        // Update team info background color
        updateTeamColors();

        // Reset filters
        currentFilter = 'all';
        searchTerm = '';
        document.getElementById('playerSearch').value = '';
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === 'all');
        });

        renderPage();
    } catch (error) {
        console.error('Error loading team roster:', error);
        document.getElementById('rosterContainer').innerHTML = `
            <div class="no-results">
                <h3>Error Loading Roster</h3>
                <p>Unable to load the roster data. Please try again later.</p>
            </div>
        `;
    }
}

// Update team colors based on selected team
function updateTeamColors() {
    const teamInfo = document.getElementById('teamInfo');
    const colors = teamColors[currentTeamId] || { primary: '#3b82f6', secondary: '#1e40af' };

    teamInfo.style.background = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
}

// Setup event listeners
function setupEventListeners() {
    // Team selector
    const teamSelect = document.getElementById('teamSelect');
    teamSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            loadTeam(e.target.value);
        }
    });

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
    if (!rosterData) return;

    renderTeamInfo();
    renderStats();
    renderRoster();
}

// Render team information
function renderTeamInfo() {
    const teamInfoContainer = document.getElementById('teamInfo');
    const { teamInfo } = rosterData;

    teamInfoContainer.innerHTML = `
        <h2>${teamInfo.name}</h2>
        <div class="team-details">
            <div class="team-detail-item">
                <strong>Conference</strong>
                ${teamInfo.conference}
            </div>
            <div class="team-detail-item">
                <strong>Division</strong>
                ${teamInfo.division}
            </div>
            <div class="team-detail-item">
                <strong>Stadium</strong>
                ${teamInfo.stadium}
            </div>
            <div class="team-detail-item">
                <strong>Head Coach</strong>
                ${teamInfo.headCoach}
            </div>
            <div class="team-detail-item">
                <strong>Founded</strong>
                ${teamInfo.founded}
            </div>
            <div class="team-detail-item">
                <strong>Colors</strong>
                ${teamInfo.colors.join(', ')}
            </div>
        </div>
    `;
}

// Calculate and render roster statistics
function renderStats() {
    const statsContainer = document.getElementById('rosterStats');
    const { roster } = rosterData;

    let totalAge = 0;
    let totalWeight = 0;
    let rookies = 0;
    let positionCounts = {};

    roster.forEach(player => {
        if (player.age) totalAge += player.age;
        if (player.weight) totalWeight += player.weight;
        if (player.experience === 'R') rookies++;

        positionCounts[player.position] = (positionCounts[player.position] || 0) + 1;
    });

    const avgAge = (totalAge / roster.length).toFixed(1);
    const avgWeight = (totalWeight / roster.length).toFixed(0);

    statsContainer.innerHTML = `
        <h3>Roster Statistics</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">${roster.length}</div>
                <div class="stat-label">Total Players</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${avgAge}</div>
                <div class="stat-label">Average Age</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${avgWeight} lbs</div>
                <div class="stat-label">Average Weight</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${rookies}</div>
                <div class="stat-label">Rookies</div>
            </div>
        </div>
    `;
}

// Render the roster based on current filter and search
function renderRoster() {
    const container = document.getElementById('rosterContainer');
    const { roster } = rosterData;

    // Filter players
    let filteredPlayers = roster.filter(player => {
        // Apply search filter
        const matchesSearch = !searchTerm ||
            player.name.toLowerCase().includes(searchTerm) ||
            player.position.toLowerCase().includes(searchTerm) ||
            player.college.toLowerCase().includes(searchTerm);

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
                groups.offense['Offensive Line'].push(player);
                break;
            case 'DE':
            case 'DT':
                groups.defense['Defensive Line'].push(player);
                break;
            case 'LB':
                groups.defense.Linebacker.push(player);
                break;
            case 'CB':
            case 'S':
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
    const experience = player.experience === 'R' ? 'Rookie' : `${player.experience} years`;
    const colors = teamColors[currentTeamId] || { primary: '#3b82f6', secondary: '#1e40af' };

    return `
        <div class="player-card">
            <div class="player-header">
                <div class="player-number" style="background: ${colors.primary};">${player.number}</div>
                <div class="player-name-pos">
                    <div class="player-name">${player.name}</div>
                    <span class="player-position" style="background: ${colors.secondary};">${player.position}</span>
                </div>
            </div>
            <div class="player-details">
                <div class="player-detail">
                    <strong>Height:</strong> ${player.height}
                </div>
                <div class="player-detail">
                    <strong>Weight:</strong> ${player.weight} lbs
                </div>
                <div class="player-detail">
                    <strong>Age:</strong> ${player.age}
                </div>
                <div class="player-detail">
                    <strong>Exp:</strong> ${experience}
                </div>
                <div class="player-detail" style="grid-column: 1 / -1;">
                    <strong>College:</strong> ${player.college}
                </div>
            </div>
        </div>
    `;
}

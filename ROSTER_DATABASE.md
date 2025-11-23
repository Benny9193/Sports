# NFL Roster Database

This document describes the NFL roster database feature added to the Sports Compendium application.

## Overview

The Sports Compendium now includes a comprehensive database for NFL team rosters, starting with the Atlanta Falcons. This feature provides detailed player information including positions, stats, and college backgrounds.

## Features

### Team Roster Pages
- **Interactive Roster Viewer**: Browse the complete team roster with rich player information
- **Search Functionality**: Search for players by name, position, or college
- **Position Filtering**: Filter players by offensive, defensive, or special teams positions
- **Team Statistics**: View roster statistics including average age, weight, and rookie counts
- **Organized Display**: Players grouped by position categories for easy navigation

### Data Structure

The roster data is organized in JSON format with the following structure:

```json
{
  "teamInfo": {
    "name": "Team Name",
    "city": "City",
    "state": "State",
    "abbreviation": "ABC",
    "conference": "Conference",
    "division": "Division",
    "founded": year,
    "stadium": "Stadium Name",
    "headCoach": "Coach Name",
    "colors": ["Color1", "Color2"]
  },
  "roster": [
    {
      "number": 0,
      "name": "Player Name",
      "position": "POS",
      "height": "X-Y",
      "weight": 000,
      "age": 00,
      "experience": 0,
      "college": "College Name"
    }
  ]
}
```

## File Organization

```
Sports/
├── data/
│   └── nfl/
│       ├── teams.json              # Index of all NFL teams
│       └── teams/
│           └── atlanta-falcons.json # Atlanta Falcons roster data
├── src/
│   └── rosterData.js               # Node.js module for roster operations
├── public/
│   ├── css/
│   │   └── roster.css              # Styles for roster pages
│   └── js/
│       └── roster.js               # Client-side roster viewer
└── roster.html                      # Roster viewer page
```

## Usage

### Viewing the Roster

1. Start the server:
   ```bash
   npm start
   ```

2. Navigate to:
   - Main roster page: `http://localhost:3000/roster.html`
   - Or click "🏈 Falcons Roster" in the navigation

### Using the Roster Database Module (Node.js)

```javascript
const RosterDatabase = require('./src/rosterData');

const db = new RosterDatabase();

// Load a team roster
const falcons = db.loadTeamRoster('atlanta-falcons');

// Get players by position
const quarterbacks = db.getPlayersByPosition('atlanta-falcons', 'QB');

// Search players
const results = db.searchPlayers('atlanta-falcons', 'georgia');

// Get organized roster by position groups
const organized = db.getRosterByPositionGroup('atlanta-falcons');

// Get team statistics
const stats = db.getTeamStats('atlanta-falcons');
```

## Current Teams

- **Atlanta Falcons** - Complete 2024-2025 roster with 60+ players

## Atlanta Falcons Roster Highlights

The Atlanta Falcons roster includes:

- **53 Active Players** across all positions
- **Head Coach**: Raheem Morris
- **Home Stadium**: Mercedes-Benz Stadium
- **Division**: NFC South

### Key Players

- **#18 Kirk Cousins** - Quarterback
- **#7 Bijan Robinson** - Running Back
- **#5 Drake London** - Wide Receiver
- **#8 Kyle Pitts** - Tight End
- **#24 A.J. Terrell** - Cornerback
- **#3 Jessie Bates III** - Safety
- **#93 Grady Jarrett** - Defensive Tackle

## Adding More Teams

To add additional NFL teams:

1. Create a new JSON file in `data/nfl/teams/` following the format of `atlanta-falcons.json`
2. Update `data/nfl/teams.json` to include the new team in the teams array
3. The roster database module will automatically support the new team

Example team entry in `teams.json`:

```json
{
  "id": "team-name",
  "name": "Team Full Name",
  "abbreviation": "TMN",
  "conference": "NFC/AFC",
  "division": "North/South/East/West",
  "dataFile": "teams/team-name.json"
}
```

## Position Codes

- **Offense**: QB (Quarterback), RB (Running Back), WR (Wide Receiver), TE (Tight End), OT (Offensive Tackle), OG (Offensive Guard), C (Center)
- **Defense**: DE (Defensive End), DT (Defensive Tackle), LB (Linebacker), CB (Cornerback), S (Safety)
- **Special Teams**: K (Kicker), P (Punter), LS (Long Snapper)

## API Endpoints

The roster data is accessible via the web server:

- Team roster JSON: `/data/nfl/teams/{team-id}.json`
- Teams index: `/data/nfl/teams.json`
- Roster viewer page: `/roster.html`

## Future Enhancements

Potential additions to the roster database:

- [ ] Add all 32 NFL teams
- [ ] Player photos and headshots
- [ ] Career statistics integration
- [ ] Injury reports and depth charts
- [ ] Historical roster data
- [ ] Comparison tools between teams
- [ ] Draft information and college stats
- [ ] Contract and salary information
- [ ] Player news and updates
- [ ] Export functionality (CSV, PDF)

## Technologies

- **Data Format**: JSON
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend Module**: Node.js
- **Server**: Node.js HTTP server
- **Styling**: Custom CSS with Falcons team colors (Red #A71930, Black)

## Contributing

When adding or updating roster data:

1. Ensure all player information is accurate and up-to-date
2. Follow the established JSON schema
3. Verify jersey numbers are unique within a team
4. Include all required fields for each player
5. Test the data loads correctly in both the web interface and Node.js module

## License

This roster database is part of the Sports Compendium project. Player data is for educational and reference purposes.

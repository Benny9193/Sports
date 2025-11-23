// Sports Data Structure
const sportsData = {
    "Team Sports": {
        icon: "⚽",
        subcategories: {
            "Ball Sports": [
                { name: "Football (Soccer)", description: "The world's most popular sport, played with 11 players per team aiming to score goals" },
                { name: "Basketball", description: "Played on a court with 5 players per team, scoring by shooting a ball through a hoop" },
                { name: "American Football", description: "A contact sport with 11 players per team, advancing an oval ball toward the end zone" },
                { name: "Baseball", description: "Bat-and-ball game with 9 players per team, scoring runs by hitting the ball and running bases" },
                { name: "Rugby", description: "Contact team sport with 15 players (Union) or 13 players (League), carrying an oval ball" },
                { name: "Cricket", description: "Bat-and-ball game played between two teams of 11, popular in Commonwealth nations" },
                { name: "Volleyball", description: "Two teams of 6 players separated by a net, hitting a ball over the net" },
                { name: "Handball", description: "Teams of 7 players throw a ball into the opposing goal" },
                { name: "Field Hockey", description: "Played on grass or turf with 11 players per team using curved sticks" }
            ],
            "Other Team Sports": [
                { name: "Lacrosse", description: "Team sport using a small rubber ball and long-handled stick with a net" },
                { name: "Ultimate Frisbee", description: "Non-contact team sport played with a flying disc" },
                { name: "Netball", description: "Ball sport similar to basketball, popular in Commonwealth countries" }
            ]
        }
    },
    "Individual Sports": {
        icon: "🏌️",
        subcategories: {
            "": [
                { name: "Golf", description: "Hitting a ball into holes using various clubs, lowest score wins" },
                { name: "Cycling", description: "Racing on bicycles on roads, tracks, or trails" },
                { name: "Gymnastics", description: "Physical exercises requiring strength, flexibility, and coordination" },
                { name: "Archery", description: "Shooting arrows at a target with a bow" },
                { name: "Bowling", description: "Rolling a ball to knock down pins" },
                { name: "Darts", description: "Throwing small missiles at a circular target" }
            ]
        }
    },
    "Water Sports": {
        icon: "🏊",
        subcategories: {
            "": [
                { name: "Swimming", description: "Competitive racing in pools (freestyle, backstroke, breaststroke, butterfly)" },
                { name: "Diving", description: "Acrobatic jumps from platforms or springboards" },
                { name: "Water Polo", description: "Aquatic team sport played in a pool with 7 players per team" },
                { name: "Synchronized Swimming", description: "Artistic aquatic performance sport" },
                { name: "Surfing", description: "Riding ocean waves on a board" },
                { name: "Sailing", description: "Racing or cruising in wind-powered boats" },
                { name: "Rowing", description: "Propelling a boat using oars" },
                { name: "Kayaking", description: "Paddling a small boat through water" },
                { name: "Canoeing", description: "Similar to kayaking but with different paddle and boat style" },
                { name: "Water Skiing", description: "Being pulled behind a boat on skis" },
                { name: "Wakeboarding", description: "Similar to water skiing but using a single board" },
                { name: "Kitesurfing", description: "Using a kite and board to ride on water" },
                { name: "Windsurfing", description: "Sailing on a board with an attached sail" },
                { name: "Scuba Diving", description: "Underwater diving with breathing apparatus" },
                { name: "Snorkeling", description: "Swimming with a breathing tube at the surface" }
            ]
        }
    },
    "Winter Sports": {
        icon: "⛷️",
        subcategories: {
            "Snow Sports": [
                { name: "Alpine Skiing", description: "Downhill skiing on marked trails" },
                { name: "Cross-Country Skiing", description: "Skiing across snow-covered terrain" },
                { name: "Ski Jumping", description: "Jumping from a ramp on skis for distance" },
                { name: "Freestyle Skiing", description: "Aerial tricks and mogul skiing" },
                { name: "Snowboarding", description: "Descending snow-covered slopes on a board" },
                { name: "Biathlon", description: "Combination of cross-country skiing and rifle shooting" }
            ],
            "Ice Sports": [
                { name: "Ice Hockey", description: "Fast-paced team sport on ice" },
                { name: "Figure Skating", description: "Artistic skating with jumps and spins" },
                { name: "Speed Skating", description: "Racing on ice skates" },
                { name: "Curling", description: "Sliding stones on ice toward a target" },
                { name: "Ice Dancing", description: "Pairs figure skating focused on dance" },
                { name: "Bobsled", description: "Racing down an ice track in a gravity-powered sled" },
                { name: "Luge", description: "Similar to bobsled but lying on back feet-first" },
                { name: "Skeleton", description: "Similar to luge but lying face-down head-first" }
            ]
        }
    },
    "Combat Sports": {
        icon: "🥊",
        subcategories: {
            "Martial Arts": [
                { name: "Boxing", description: "Punching sport with gloved fists in a ring" },
                { name: "Kickboxing", description: "Combination of punching and kicking" },
                { name: "Muay Thai", description: "Thai boxing using fists, elbows, knees, and shins" },
                { name: "Mixed Martial Arts (MMA)", description: "Full-contact sport combining various fighting styles" },
                { name: "Karate", description: "Japanese martial art focusing on striking techniques" },
                { name: "Judo", description: "Japanese grappling art emphasizing throws" },
                { name: "Taekwondo", description: "Korean martial art known for high kicks" },
                { name: "Brazilian Jiu-Jitsu", description: "Grappling martial art focusing on ground fighting" },
                { name: "Wrestling", description: "Grappling sport aiming to pin opponent" },
                { name: "Kung Fu", description: "Chinese martial arts with various styles" },
                { name: "Aikido", description: "Japanese defensive martial art using opponent's energy" },
                { name: "Sumo", description: "Traditional Japanese wrestling" }
            ],
            "Weapon-Based Combat Sports": [
                { name: "Fencing", description: "Sword fighting sport using foil, épée, or sabre" },
                { name: "Kendo", description: "Japanese sword fighting with bamboo swords" }
            ]
        }
    },
    "Racket Sports": {
        icon: "🎾",
        subcategories: {
            "": [
                { name: "Tennis", description: "Played on a court with rackets and a ball" },
                { name: "Badminton", description: "Racket sport played with a shuttlecock" },
                { name: "Table Tennis (Ping Pong)", description: "Tennis played on a table" },
                { name: "Squash", description: "Indoor racket sport played in a four-walled court" },
                { name: "Racquetball", description: "Similar to squash with different rules and equipment" },
                { name: "Padel", description: "Mix of tennis and squash played in pairs" }
            ]
        }
    },
    "Athletics and Track & Field": {
        icon: "🏃",
        subcategories: {
            "Running Events": [
                { name: "Sprint Races", description: "100m, 200m, 400m" },
                { name: "Middle Distance", description: "800m, 1500m, mile" },
                { name: "Long Distance", description: "5000m, 10000m, marathon, ultra-marathon" },
                { name: "Steeplechase", description: "Long distance race with water jumps and barriers" },
                { name: "Relay Races", description: "4x100m, 4x400m" }
            ],
            "Jumping Events": [
                { name: "High Jump", description: "Jumping over a bar for height" },
                { name: "Pole Vault", description: "Using a pole to clear a bar" },
                { name: "Long Jump", description: "Jumping for horizontal distance" },
                { name: "Triple Jump", description: "Hop, skip, and jump combination" }
            ],
            "Throwing Events": [
                { name: "Shot Put", description: "Throwing a heavy sphere" },
                { name: "Discus", description: "Throwing a circular disc" },
                { name: "Javelin", description: "Throwing a spear" },
                { name: "Hammer Throw", description: "Throwing a weight on a wire" }
            ],
            "Combined Events": [
                { name: "Decathlon", description: "Ten-event competition for men" },
                { name: "Heptathlon", description: "Seven-event competition for women" }
            ]
        }
    },
    "Motor Sports": {
        icon: "🏎️",
        subcategories: {
            "": [
                { name: "Formula 1", description: "Premier open-wheel racing championship" },
                { name: "NASCAR", description: "Stock car racing popular in North America" },
                { name: "Rally Racing", description: "Racing on closed or public roads" },
                { name: "MotoGP", description: "Premier motorcycle road racing" },
                { name: "Drag Racing", description: "Acceleration races over a straight track" },
                { name: "IndyCar", description: "Open-wheel racing in North America" },
                { name: "Karting", description: "Racing small, open-wheel vehicles" },
                { name: "Motocross", description: "Off-road motorcycle racing" },
                { name: "Supercross", description: "Stadium-based motocross" },
                { name: "Endurance Racing", description: "Long-distance automobile racing" },
                { name: "Monster Truck", description: "Racing or freestyle with massive trucks" }
            ]
        }
    },
    "Extreme Sports": {
        icon: "🛹",
        subcategories: {
            "": [
                { name: "Skateboarding", description: "Riding and performing tricks on a skateboard" },
                { name: "BMX", description: "Bicycle motocross racing or freestyle" },
                { name: "Mountain Biking", description: "Off-road cycling on rough terrain" },
                { name: "Rock Climbing", description: "Ascending natural rock formations or artificial walls" },
                { name: "Parkour", description: "Moving through environment using running, jumping, and climbing" },
                { name: "BASE Jumping", description: "Parachuting from fixed structures" },
                { name: "Skydiving", description: "Jumping from aircraft with parachute" },
                { name: "Bungee Jumping", description: "Jumping from height with elastic cord" },
                { name: "Paragliding", description: "Free-flying with a fabric wing" },
                { name: "Hang Gliding", description: "Flying in a foot-launched aircraft" },
                { name: "Snowmobiling", description: "Riding motorized vehicles on snow" },
                { name: "Sandboarding", description: "Boarding down sand dunes" },
                { name: "White Water Rafting", description: "Navigating river rapids in an inflatable raft" }
            ]
        }
    },
    "Other Notable Sports": {
        icon: "🎯",
        subcategories: {
            "": [
                { name: "Equestrian", description: "Horse riding and competition (dressage, show jumping, eventing)" },
                { name: "Polo", description: "Team sport played on horseback" },
                { name: "Triathlon", description: "Multi-sport endurance event (swimming, cycling, running)" },
                { name: "Pentathlon", description: "Five-event competition" },
                { name: "Cheerleading", description: "Competitive routine combining dance, gymnastics, and stunts" },
                { name: "Esports", description: "Competitive video gaming" },
                { name: "Chess", description: "Strategic board game" },
                { name: "Billiards/Pool", description: "Cue sports on a table" },
                { name: "Snooker", description: "Cue sport with colored balls" },
                { name: "Orienteering", description: "Navigation sport using map and compass" },
                { name: "Shooting Sports", description: "Rifle, pistol, shotgun, and air gun competitions" },
                { name: "Disc Golf", description: "Golf-like game with flying discs" },
                { name: "Croquet", description: "Hitting balls through hoops with mallets" },
                { name: "Bocce", description: "Ball sport similar to lawn bowling" },
                { name: "Sepak Takraw", description: "Kick volleyball from Southeast Asia" },
                { name: "Kabaddi", description: "Contact team sport from South Asia" },
                { name: "Hurling", description: "Irish stick-and-ball sport" },
                { name: "Gaelic Football", description: "Irish football combining soccer and rugby elements" }
            ]
        }
    }
};

// State
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
const sportsGrid = document.getElementById('sportsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.getElementById('filterButtons');
const stats = document.getElementById('stats');

// Initialize App
function init() {
    createFilterButtons();
    renderSports();
    attachEventListeners();
    updateStats();
}

// Create filter buttons
function createFilterButtons() {
    const categories = ['all', ...Object.keys(sportsData)];

    filterButtons.innerHTML = categories.map(category => {
        const isActive = category === currentFilter ? 'active' : '';
        return `<button class="filter-button ${isActive}" data-category="${category}">
            ${category === 'all' ? 'All Sports' : category}
        </button>`;
    }).join('');
}

// Render sports categories
function renderSports() {
    const filteredData = getFilteredData();

    if (Object.keys(filteredData).length === 0) {
        sportsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state__icon">🔍</div>
                <h2 class="empty-state__title">No sports found</h2>
                <p class="empty-state__text">Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }

    sportsGrid.innerHTML = Object.entries(filteredData).map(([categoryName, categoryData]) => {
        const sportsCount = Object.values(categoryData.subcategories)
            .reduce((sum, sports) => sum + sports.length, 0);

        const subcategoriesHTML = Object.entries(categoryData.subcategories)
            .map(([subName, sports]) => {
                if (sports.length === 0) return '';

                const sportsHTML = sports.map(sport => {
                    const highlightedName = highlightText(sport.name, searchQuery);
                    const highlightedDesc = highlightText(sport.description, searchQuery);

                    return `
                        <div class="sport-item ${sport.description ? '' : 'sport-item--simple'}">
                            <div class="sport-item__name">${highlightedName}</div>
                            ${sport.description ? `<div class="sport-item__description">${highlightedDesc}</div>` : ''}
                        </div>
                    `;
                }).join('');

                return `
                    <div class="subcategory">
                        ${subName ? `<h3 class="subcategory__title">${subName}</h3>` : ''}
                        <div class="sports-list">${sportsHTML}</div>
                    </div>
                `;
            }).join('');

        return `
            <div class="category">
                <div class="category__header">
                    <span class="category__icon">${categoryData.icon}</span>
                    <h2 class="category__title">${categoryName}</h2>
                    <span class="category__count">${sportsCount}</span>
                </div>
                ${subcategoriesHTML}
            </div>
        `;
    }).join('');
}

// Get filtered data based on current filter and search
function getFilteredData() {
    let data = currentFilter === 'all' ? sportsData : { [currentFilter]: sportsData[currentFilter] };

    if (!searchQuery) return data;

    const filtered = {};

    Object.entries(data).forEach(([categoryName, categoryData]) => {
        const filteredSubcategories = {};

        Object.entries(categoryData.subcategories).forEach(([subName, sports]) => {
            const filteredSports = sports.filter(sport =>
                sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (sport.description && sport.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            if (filteredSports.length > 0) {
                filteredSubcategories[subName] = filteredSports;
            }
        });

        if (Object.keys(filteredSubcategories).length > 0) {
            filtered[categoryName] = {
                ...categoryData,
                subcategories: filteredSubcategories
            };
        }
    });

    return filtered;
}

// Highlight search text
function highlightText(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Update statistics
function updateStats() {
    const totalCategories = Object.keys(sportsData).length;
    const totalSports = Object.values(sportsData).reduce((sum, category) => {
        return sum + Object.values(category.subcategories)
            .reduce((subSum, sports) => subSum + sports.length, 0);
    }, 0);

    const filteredData = getFilteredData();
    const filteredSports = Object.values(filteredData).reduce((sum, category) => {
        return sum + Object.values(category.subcategories)
            .reduce((subSum, sports) => subSum + sports.length, 0);
    }, 0);

    const filterText = currentFilter === 'all' ? 'all categories' : currentFilter;
    const searchText = searchQuery ? ` matching "${searchQuery}"` : '';

    stats.innerHTML = `
        <p class="stats__text">
            Showing ${filteredSports} of ${totalSports} sports from ${filterText}${searchText}
        </p>
    `;
}

// Attach event listeners
function attachEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderSports();
        updateStats();
    });

    // Filter buttons
    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-button')) {
            currentFilter = e.target.dataset.category;

            // Update active state
            filterButtons.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            renderSports();
            updateStats();
        }
    });
}

// Start the app
init();

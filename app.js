// Sports data organized by category
const sportsData = {
    team: {
        title: "Team Sports",
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
    individual: {
        title: "Individual Sports",
        subcategories: {
            "Individual Sports": [
                { name: "Golf", description: "Hitting a ball into holes using various clubs, lowest score wins" },
                { name: "Cycling", description: "Racing on bicycles on roads, tracks, or trails" },
                { name: "Gymnastics", description: "Physical exercises requiring strength, flexibility, and coordination" },
                { name: "Archery", description: "Shooting arrows at a target with a bow" },
                { name: "Bowling", description: "Rolling a ball to knock down pins" },
                { name: "Darts", description: "Throwing small missiles at a circular target" }
            ]
        }
    },
    water: {
        title: "Water Sports",
        subcategories: {
            "Water Sports": [
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
    winter: {
        title: "Winter Sports",
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
    combat: {
        title: "Combat Sports",
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
    racket: {
        title: "Racket Sports",
        subcategories: {
            "Racket Sports": [
                { name: "Tennis", description: "Played on a court with rackets and a ball" },
                { name: "Badminton", description: "Racket sport played with a shuttlecock" },
                { name: "Table Tennis (Ping Pong)", description: "Tennis played on a table" },
                { name: "Squash", description: "Indoor racket sport played in a four-walled court" },
                { name: "Racquetball", description: "Similar to squash with different rules and equipment" },
                { name: "Padel", description: "Mix of tennis and squash played in pairs" }
            ]
        }
    },
    athletics: {
        title: "Athletics and Track & Field",
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
    motor: {
        title: "Motor Sports",
        subcategories: {
            "Motor Sports": [
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
    extreme: {
        title: "Extreme Sports",
        subcategories: {
            "Extreme Sports": [
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
    other: {
        title: "Other Notable Sports",
        subcategories: {
            "Other Notable Sports": [
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

// State management
let currentFilter = 'all';
let searchTerm = '';
let favorites = new Set();
let darkMode = false;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    renderSports();
    setupEventListeners();
    updateStats();
});

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            renderSports();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderSports();
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Focus search with '/' key
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
        // Clear search with 'Escape' key
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchTerm = '';
            renderSports();
            searchInput.blur();
        }
    });

    // Event delegation for favorite buttons
    const sportsContainer = document.getElementById('sportsContainer');
    sportsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) {
            const btn = e.target.classList.contains('favorite-btn') ? e.target : e.target.closest('.favorite-btn');
            const sportCard = btn.closest('.sport-card');
            if (sportCard) {
                const sportName = sportCard.dataset.sportName;
                if (sportName) {
                    toggleFavorite(sportName);
                }
            }
        }
    });
}

// Render sports based on current filter and search
function renderSports() {
    const container = document.getElementById('sportsContainer');
    container.innerHTML = '';

    let hasResults = false;

    // Determine which categories to show
    const categoriesToShow = currentFilter === 'all'
        ? Object.keys(sportsData)
        : [currentFilter];

    categoriesToShow.forEach(categoryKey => {
        const category = sportsData[categoryKey];
        if (!category) return;

        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.id = categoryKey;

        let categoryHtml = `<h2 class="category-title">${category.title}</h2>`;
        let categoryHasResults = false;

        // Render subcategories
        Object.entries(category.subcategories).forEach(([subName, sports]) => {
            const filteredSports = sports.filter(sport =>
                sport.name.toLowerCase().includes(searchTerm) ||
                sport.description.toLowerCase().includes(searchTerm)
            );

            if (filteredSports.length > 0) {
                categoryHasResults = true;
                hasResults = true;

                if (Object.keys(category.subcategories).length > 1) {
                    categoryHtml += `<div class="subcategory">
                        <h3 class="subcategory-title">${subName}</h3>
                        <div class="sports-grid">`;
                } else {
                    categoryHtml += `<div class="sports-grid">`;
                }

                filteredSports.forEach(sport => {
                    const isHighlighted = searchTerm &&
                        (sport.name.toLowerCase().includes(searchTerm) ||
                         sport.description.toLowerCase().includes(searchTerm));
                    const isFavorited = favorites.has(sport.name);

                    categoryHtml += `
                        <div class="sport-card ${isHighlighted ? 'highlight' : ''} ${isFavorited ? 'favorited' : ''}" data-sport-name="${sport.name.replace(/"/g, '&quot;')}">
                            <button class="favorite-btn" aria-label="Toggle favorite">
                                ${isFavorited ? '❤️' : '🤍'}
                            </button>
                            <div class="sport-name">${highlightText(sport.name, searchTerm)}</div>
                            <div class="sport-description">${highlightText(sport.description, searchTerm)}</div>
                        </div>
                    `;
                });

                categoryHtml += `</div>`;
                if (Object.keys(category.subcategories).length > 1) {
                    categoryHtml += `</div>`;
                }
            }
        });

        if (categoryHasResults) {
            categorySection.innerHTML = categoryHtml;
            container.appendChild(categorySection);
        }
    });

    // Show no results message
    if (!hasResults) {
        container.innerHTML = `
            <div class="no-results">
                <h2>No sports found</h2>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
    }

    // Update statistics after rendering
    updateStats();
}

// Escape special regex characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Highlight search terms in text
function highlightText(text, term) {
    if (!term) return text;

    const escapedTerm = escapeRegExp(term);
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

// Load user preferences from localStorage
function loadPreferences() {
    // Load dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeButton();
    }

    // Load favorites
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = new Set(JSON.parse(savedFavorites));
    }
}

// Toggle dark mode
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
    updateThemeButton();
}

// Update theme button text
function updateThemeButton() {
    const themeIcon = document.getElementById('themeIcon');
    const themeToggle = document.getElementById('themeToggle');
    if (darkMode) {
        themeIcon.textContent = '☀️';
        themeToggle.innerHTML = '<span id="themeIcon">☀️</span> Light Mode';
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.innerHTML = '<span id="themeIcon">🌙</span> Dark Mode';
    }
}

// Toggle favorite
function toggleFavorite(sportName) {
    if (favorites.has(sportName)) {
        favorites.delete(sportName);
    } else {
        favorites.add(sportName);
    }
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    renderSports();
}

// Update statistics display
function updateStats() {
    let totalSports = 0;
    Object.values(sportsData).forEach(category => {
        Object.values(category.subcategories).forEach(sports => {
            totalSports += sports.length;
        });
    });
    
    const statsDisplay = document.getElementById('sportsCount');
    if (statsDisplay) {
        // Count visible sports if filtering
        if (searchTerm || currentFilter !== 'all') {
            let visibleSports = 0;
            const categoriesToShow = currentFilter === 'all'
                ? Object.keys(sportsData)
                : [currentFilter];

            categoriesToShow.forEach(categoryKey => {
                const category = sportsData[categoryKey];
                if (category) {
                    Object.values(category.subcategories).forEach(sports => {
                        const filtered = sports.filter(sport =>
                            sport.name.toLowerCase().includes(searchTerm) ||
                            sport.description.toLowerCase().includes(searchTerm)
                        );
                        visibleSports += filtered.length;
                    });
                }
            });
            statsDisplay.textContent = `${visibleSports} / ${totalSports}`;
        } else {
            statsDisplay.textContent = totalSports;
        }
    }
}

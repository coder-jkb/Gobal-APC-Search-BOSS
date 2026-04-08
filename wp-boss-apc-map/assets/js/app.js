document.addEventListener('DOMContentLoaded', () => {
const locations = [
            {
                lat: 37.0902,
                lng: -95.7129,
                title: "John Doe",
                city: "New York City",
                country: "USA",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id.",
                qualification: "B.S. Computer Science",
                profession: "Software Engineer",
                email: "john.doe@example.com",
                contact: "+1 234 567 8900",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 40.7128,
                lng: -74.0060,
                title: "Jane Smith",
                city: "Los Angeles",
                country: "USA",
                description: "Donec ac elit vehicula, dictum neque ut, pellentesque mi odio.",
                qualification: "M.S. Data Science",
                profession: "Data Analyst",
                email: "jane.smith@example.com",
                contact: "+1 987 654 3210",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 20.5937,
                lng: 78.9629,
                title: "Ravi Patel",
                city: "Mumbai",
                country: "India",
                description: "Expert in AI and Machine Learning systems.",
                qualification: "Ph.D. Artificial Intelligence",
                profession: "AI Researcher",
                email: "ravi.patel@example.com",
                contact: "+91 98765 43210",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 51.5074,
                lng: -0.1278,
                title: "Emma Watson",
                city: "London",
                country: "UK",
                description: "Specializes in modern responsive web architectures.",
                qualification: "B.A. Graphic Design",
                profession: "UI/UX Lead",
                email: "emma.watson@example.com",
                contact: "+44 20 7946 0958",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 28.6139,
                lng: 77.2090,
                title: "Rajesh Patil",
                city: "Kolhapur",
                country: "India",
                description: "Expert in AI and Machine Learning systems.",
                qualification: "Ph.D. Artificial Intelligence",
                profession: "AI Researcher",
                email: "rajesh.patil@example.com",
                contact: "+91 98765 43210",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 18.5204,
                lng: 73.8567,
                title: "Rohit Kohli",
                city: "Pune",
                country: "India",
                description: "Expert in AI and Machine Learning systems.",
                qualification: "Ph.D. Artificial Intelligence",
                profession: "AI Researcher",
                email: "rohit.kohli@example.com",
                contact: "+91 98765 43210",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            },
            {
                lat: 15.2854,
                lng: 74.1245,
                title: "Sanika Patil",
                city: "Belgaum",
                country: "India",
                description: "Expert in AI and Machine Learning systems.",
                qualification: "Ph.D. Artificial Intelligence",
                profession: "AI Researcher",
                email: "sanika.patil@example.com",
                contact: "+91 98765 43210",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
            }
        ];

        let filteredData = [...locations];
        let currentFilters = {
            qualification: '',
            profession: '',
            city: '',
            country: ''
        };

        const isMobile = window.innerWidth < 768;
        const defaultAltitude = isMobile ? 3.5 : 2.5;

        // ============================================
        // GLOBE INITIALIZATION
        // ============================================

        const globe = Globe()(document.getElementById('globe'))
            .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
            .htmlElementsData(locations)
            .htmlElement(d => {
                const el = document.createElement('div');
                el.className = 'pin';
                el.dataset.index = locations.indexOf(d);

                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    displayPopup(d);
                    globe.pointOfView(
                        { lat: d.lat, lng: d.lng, altitude: 1.2 },
                        800
                    );
                });

                return el;
            })
            .htmlLat(d => d.lat)
            .htmlLng(d => d.lng)
            .htmlAltitude(0.01);

        globe.pointOfView({ altitude: defaultAltitude }, 0);

        const controls = globe.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        controls.addEventListener('change', () => {
            const currentAlt = globe.pointOfView().altitude;
            let zoomPercent = Math.round((defaultAltitude / currentAlt) * 100);

            if (zoomPercent < 10) zoomPercent = 10;
            if (zoomPercent > 1000) zoomPercent = 1000;

            document.getElementById('zoom-level').innerText = zoomPercent + "%";
        });

        document.getElementById('zoom-in').addEventListener('click', () => {
            const currentAlt = globe.pointOfView().altitude;
            globe.pointOfView({ altitude: currentAlt * 0.5 }, 500);
        });

        document.getElementById('zoom-out').addEventListener('click', () => {
            const currentAlt = globe.pointOfView().altitude;
            globe.pointOfView({ altitude: currentAlt * 1.5 }, 500);
        });

        document.getElementById('zoom-reset').addEventListener('click', () => {
            closePopup();
            globe.pointOfView({ altitude: defaultAltitude, lat: 37.09, lng: -95.72 }, 1000); // usa lat long
            controls.autoRotate = true;
        });

        controls.addEventListener('start', () => {
            controls.autoRotate = false;
        });

        function closePopup() {
            document.getElementById('popup').classList.remove('show');
        }

        function displayPopup(d) {
            document.getElementById('title').innerText = d.title;
            document.getElementById('subtitle').innerText = d.city;
            document.getElementById('desc').innerText = d.description;
            document.getElementById('qualification').innerText = d.qualification;
            document.getElementById('profession').innerText = d.profession;
            document.getElementById('email').innerText = d.email;
            document.getElementById('contact').innerText = d.contact;
            document.getElementById('popup-image').src = d.image;
            document.getElementById('popup').classList.add('show');
        }

        setTimeout(() => {
            controls.autoRotate = false;
        }, 5000);

        // ============================================
        // DRAWER SYSTEM
        // ============================================

        const drawer = document.getElementById('unified-drawer');
        const overlay = document.getElementById('drawer-overlay');
        const toggleBtn = document.getElementById('sidebar-floating-toggle');
        const closeBtn = document.getElementById('drawer-close-btn');
        const tabBtns = document.querySelectorAll('.drawer-tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        toggleBtn.addEventListener('click', () => {
            drawer.classList.add('active');
            if (window.innerWidth < 768) {
                overlay.classList.add('active');
            } else {
                toggleBtn.classList.add('hidden-desktop');
            }
        });

        function closeDrawer() {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            if (window.innerWidth >= 768) toggleBtn.classList.remove('hidden-desktop');
        }

        closeBtn.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);

        // Initial state for desktop default open
        if (window.innerWidth >= 768) {
            drawer.classList.add('active');
            toggleBtn.classList.add('hidden-desktop');
        }

        // TAB SWITCHING
        function switchTab(tabName) {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            const btn = document.querySelector(`.drawer-tab-btn[data-tab="${tabName}"]`);
            if (btn) btn.classList.add('active');
            const pane = document.getElementById(tabName + '-tab');
            if (pane) pane.classList.add('active');
        }

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                switchTab(btn.dataset.tab);
            });
        });

        // ============================================
        // FILTER SYSTEM
        // ============================================

        function applyFilters() {
            currentFilters.qualification = document.getElementById('filter-qualification').value;
            currentFilters.profession = document.getElementById('filter-profession').value;
            currentFilters.city = document.getElementById('filter-city').value.toLowerCase();
            currentFilters.country = document.getElementById('filter-country').value;

            filteredData = locations.filter(d => {
                let matches = true;

                if (currentFilters.qualification && d.qualification !== currentFilters.qualification) {
                    matches = false;
                }
                if (currentFilters.profession && d.profession !== currentFilters.profession) {
                    matches = false;
                }
                if (currentFilters.city && !d.city.toLowerCase().includes(currentFilters.city)) {
                    matches = false;
                }
                if (currentFilters.country && d.country !== currentFilters.country) {
                    matches = false;
                }

                return matches;
            });

            updateUI();
            displayActiveFilters();

            if (filteredData.length > 0) {
                switchTab('apcs');
            }
        }

        function resetFilters() {
            document.getElementById('filter-qualification').value = '';
            document.getElementById('filter-profession').value = '';
            document.getElementById('filter-city').value = '';
            document.getElementById('filter-country').value = '';

            currentFilters = {
                qualification: '',
                profession: '',
                city: '',
                country: ''
            };

            filteredData = [...locations];
            updateUI();
            displayActiveFilters();
        }

        function updateUI() {
            // Update Globe Pins
            const pins = document.querySelectorAll('.pin');
            pins.forEach(pin => {
                const location = locations[pin.dataset.index];
                if (location) pin.classList.toggle('hidden', !filteredData.includes(location));
            });

            // Update Sidebar
            const apcItems = document.querySelectorAll('.apc-item');
            apcItems.forEach(item => {
                const location = locations[item.dataset.index];
                if (location) item.classList.toggle('hidden', !filteredData.includes(location));
            });

            updateResultCount();
        }

        function updateResultCount() {
            const count = filteredData.length;
            const total = locations.length;
            const countEl = document.getElementById('filter-count');
            countEl.innerText = `Showing ${count} of ${total} results`;
            countEl.classList.toggle('show', count < total);

            const apcTabBtn = document.querySelector('.drawer-tab-btn[data-tab="apcs"]');
            if (apcTabBtn) {
                apcTabBtn.innerText = `APCs List (${count}/${total})`;
            }

            const emptyState = document.getElementById('apc-list-empty');
            const listState = document.getElementById('apc-list');
            if (emptyState && listState) {
                if (count === 0) {
                    emptyState.style.display = 'block';
                    listState.style.display = 'none';
                } else {
                    emptyState.style.display = 'none';
                    listState.style.display = 'block';
                }
            }
        }

        function displayActiveFilters() {
            const container = document.getElementById('active-filters-list');
            const filterContainer = document.getElementById('active-filters-container');
            container.innerHTML = '';

            let hasActiveFilters = false;

            if (currentFilters.qualification) {
                container.innerHTML += `<div class="filter-badge">${currentFilters.qualification} <span class="filter-badge-remove" onclick="clearFilterField('qualification')">×</span></div>`;
                hasActiveFilters = true;
            }
            if (currentFilters.profession) {
                container.innerHTML += `<div class="filter-badge">${currentFilters.profession} <span class="filter-badge-remove" onclick="clearFilterField('profession')">×</span></div>`;
                hasActiveFilters = true;
            }
            if (currentFilters.city) {
                container.innerHTML += `<div class="filter-badge">${currentFilters.city} <span class="filter-badge-remove" onclick="clearFilterField('city')">×</span></div>`;
                hasActiveFilters = true;
            }
            if (currentFilters.country) {
                container.innerHTML += `<div class="filter-badge">${currentFilters.country} <span class="filter-badge-remove" onclick="clearFilterField('country')">×</span></div>`;
                hasActiveFilters = true;
            }

            filterContainer.style.display = hasActiveFilters ? 'block' : 'none';
        }

        function clearFilterField(field) {
            document.getElementById(`filter-${field}`).value = '';
            applyFilters();
        }

        document.getElementById('apply-filters').addEventListener('click', applyFilters);
        document.getElementById('reset-filters').addEventListener('click', resetFilters);

        document.getElementById('filter-city').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') applyFilters();
        });

        document.getElementById('empty-reset-btn').addEventListener('click', resetFilters);
        document.getElementById('empty-modify-btn').addEventListener('click', () => switchTab('filters'));

        // ============================================
        // APC LIST
        // ============================================

        const apcListEl = document.getElementById('apc-list');
        locations.forEach((d, index) => {
            const item = document.createElement('div');
            item.className = 'apc-item';
            item.dataset.index = index;
            item.innerHTML = `
                <img class="apc-item-img" src="${d.image}" alt="${d.title}" />
                <div class="apc-item-details">
                    <span class="apc-item-name">${d.title}</span>
                    <span class="apc-item-details">${d.profession} | ${d.city}, ${d.country}</span>
                    <span class="apc-item-details">${d.qualification}</span>
                </div>
            `;
            item.addEventListener('click', () => {
                controls.autoRotate = false;
                globe.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.2 }, 1000);

                setTimeout(() => {
                    displayPopup(d);
                }, 1100);

                // Close drawer on mobile after selection
                if (isMobile) {
                    drawer.classList.remove('active');
                    overlay.classList.remove('active');
                }
            });
            apcListEl.appendChild(item);
        });

        // ============================================
        // SEARCH LOGIC
        // ============================================

        function executeSearch() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            if (!query) return;

            closePopup();

            const countryMatches = locations.filter(d => d.country && d.country.toLowerCase() === query);

            if (countryMatches.length > 0) {
                if (countryMatches.length === 1) {
                    const match = countryMatches[0];
                    controls.autoRotate = false;
                    globe.pointOfView({ lat: match.lat, lng: match.lng, altitude: 1.2 }, 1500);

                    setTimeout(() => {
                        displayPopup(match);
                    }, 1600);
                } else {
                    const avgLat = countryMatches.reduce((sum, d) => sum + d.lat, 0) / countryMatches.length;
                    const avgLng = countryMatches.reduce((sum, d) => sum + d.lng, 0) / countryMatches.length;
                    controls.autoRotate = false;
                    globe.pointOfView({ lat: avgLat, lng: avgLng, altitude: 2.0 }, 1500);
                }
                return;
            }

            const match = locations.find(d =>
                (d.title && d.title.toLowerCase().includes(query)) ||
                (d.city && d.city.toLowerCase().includes(query)) ||
                (d.description && d.description.toLowerCase().includes(query))
            );

            if (match) {
                controls.autoRotate = false;
                globe.pointOfView({ lat: match.lat, lng: match.lng, altitude: 1.2 }, 1500);

                setTimeout(() => {
                    displayPopup(match);
                }, 1600);
            } else {
                alert("No locations found matching: " + query);
            }
        }

        const searchDropdown = document.getElementById('search-dropdown');
        const searchInput = document.getElementById('search-input');

        document.getElementById('search-btn').addEventListener('click', () => {
            searchDropdown.style.display = 'none';
            executeSearch();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchDropdown.style.display = 'none';
                executeSearch();
            }
        });

        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), wait);
            };
        }

        const handleInput = debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                searchDropdown.style.display = 'none';
                return;
            }

            const matchedCountries = [...new Set(locations
                .filter(d => d.country && d.country.toLowerCase().includes(query))
                .map(d => d.country)
            )];

            const matchedIndividuals = locations.filter(d =>
                (d.title && d.title.toLowerCase().includes(query)) ||
                (d.city && d.city.toLowerCase().includes(query)) ||
                (d.description && d.description.toLowerCase().includes(query))
            );

            searchDropdown.innerHTML = '';
            let hasResults = false;

            matchedCountries.forEach(c => {
                const div = document.createElement('div');
                div.className = 'dropdown-item';
                div.innerHTML = `<strong>📍 Country: ${c}</strong>`;
                div.onclick = () => {
                    searchInput.value = c;
                    searchDropdown.style.display = 'none';
                    executeSearch();
                };
                searchDropdown.appendChild(div);
                hasResults = true;
            });

            matchedIndividuals.forEach(m => {
                const div = document.createElement('div');
                div.className = 'dropdown-item';
                div.innerHTML = `👤 ${m.title} <span style="font-size: 0.8em; color: #aaa;">(${m.city})</span>`;
                div.onclick = () => {
                    searchInput.value = m.title;
                    searchDropdown.style.display = 'none';
                    executeSearch();
                };
                searchDropdown.appendChild(div);
                hasResults = true;
            });

            if (hasResults) {
                searchDropdown.style.display = 'flex';
            } else {
                const div = document.createElement('div');
                div.className = 'dropdown-item';
                div.innerText = 'No results found';
                searchDropdown.appendChild(div);
                searchDropdown.style.display = 'flex';
            }
        }, 300);

        searchInput.addEventListener('input', handleInput);

        document.addEventListener('click', (e) => {
            if (!e.target.closest('#search-container')) {
                searchDropdown.style.display = 'none';
            }
        });
});
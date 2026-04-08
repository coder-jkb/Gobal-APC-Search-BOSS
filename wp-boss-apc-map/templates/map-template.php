<div class="main-title-container">
        <h1 class="main-title">BOSS</h1>
        <span class="main-subtitle">Global ACP Map</span>
    </div>

    <div id="search-container">
        <input type="text" id="search-input" placeholder="Type APC's Name, City or Country..." autocomplete="off" />
        <span id="search-clear-btn" style="display:none; cursor:pointer; padding: 0 10px; color: rgba(255,255,255,0.6); font-size: 1.5rem; line-height: 1;" title="Clear Search">&times;</span>
        <button id="search-btn">Search</button>
        <div id="search-dropdown"></div>
    </div>

    <div id="zoom-controls">
        <button id="zoom-out" class="zoom-btn">−</button>
        <span id="zoom-level">100%</span>
        <button id="zoom-in" class="zoom-btn">+</button>
        <button id="zoom-reset">Reset</button>
    </div>

    <!-- UNIFIED DRAWER CONTROL BUTTON (Mobile Only) -->
    <button id="sidebar-floating-toggle">☰ Filters & APCs</button>

    <!-- DRAWER OVERLAY (Mobile Only) -->
    <div id="drawer-overlay"></div>

    <!-- UNIFIED DRAWER PANEL (Desktop Always Visible, Mobile Bottom Sheet) -->
    <div id="unified-drawer">
        <div class="drawer-header">
            <h2 id="drawer-title">Filters & APCs</h2>
            <button class="drawer-close-btn" id="drawer-close-btn">&times;</button>
        </div>

        <!-- TAB NAVIGATION -->
        <div class="drawer-tabs">
            <button class="drawer-tab-btn active" data-tab="filters">🔍 Filters</button>
            <button class="drawer-tab-btn" data-tab="apcs">APCs List</button>
        </div>

        <!-- DRAWER CONTENT -->
        <div class="drawer-content">

            <!-- FILTERS TAB -->
            <div class="tab-pane active" id="filters-tab">
                <div id="filter-count"></div>

                <div class="active-filters" id="active-filters-container" style="display: none;">
                    <h4>Active Filters</h4>
                    <div id="active-filters-list"></div>
                </div>

                <div class="filter-group">
                    <label for="filter-qualification">Qualification</label>
                    <select id="filter-qualification">
                        <option value="">All Qualifications</option>
                        <option value="B.S. Computer Science">B.S. Computer Science</option>
                        <option value="M.S. Data Science">M.S. Data Science</option>
                        <option value="Ph.D. Artificial Intelligence">Ph.D. Artificial Intelligence</option>
                        <option value="B.A. Graphic Design">B.A. Graphic Design</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="filter-profession">Profession</label>
                    <select id="filter-profession">
                        <option value="">All Professions</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="AI Researcher">AI Researcher</option>
                        <option value="UI/UX Lead">UI/UX Lead</option>
                    </select>
                </div>

                <div class="filter-group">
                    <label for="filter-city">City</label>
                    <input type="text" id="filter-city" placeholder="Search city..." autocomplete="off" />
                </div>

                <div class="filter-group">
                    <label for="filter-country">Country</label>
                    <select id="filter-country">
                        <option value="">All Countries</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                <div class="filter-buttons">
                    <button class="filter-btn" id="apply-filters">Apply</button>
                    <button class="filter-btn" id="reset-filters">Reset</button>
                </div>
            </div>

            <!-- APC LIST TAB -->
            <div class="tab-pane" id="apcs-tab">
                <div id="apc-list-empty" style="display: none; text-align: center; padding: 40px 20px;">
                    <div
                        style="font-size: 1.1rem; color: rgba(255,255,255,0.7); margin-bottom: 20px; font-weight: 500;">
                        No APC(s) found</div>
                </div>
                <div id="apc-list">
                    <!-- Dynamic APC items go here -->
                </div>
                <!-- Persistent Actions Container -->
                <div id="apc-list-actions" style="display: none; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 20px; padding: 0 10px 20px 10px;">
                    <button class="filter-btn" id="empty-reset-btn"
                        style="flex: none; padding: 10px 20px; margin: 0; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2);color:#fff">Reset
                        Filter</button>
                    <button class="filter-btn" id="empty-modify-btn"
                        style="flex: none; padding: 10px 20px; margin: 0; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: black; border: none;">Modify
                        Filter</button>
                </div>
            </div>

        </div>
    </div>

    <div id="globe"></div>

    <div id="popup">
        <div class="card-close" onclick="closePopup()">&times;</div>
        <div class="card-content">
            <div class="card-image-container">
                <img id="popup-image" class="card-image"
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Profile" />
            </div>
            <div class="card-details">
                <h3 id="title" class="card-title"></h3>
                <h4 id="subtitle" class="card-subtitle"></h4>
                <div class="card-body">
                    <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique neque eget.
                    </p>
                    <ul class="card-info-list">
                        <li><span class="card-info-label">Qualification</span> <span id="qualification"
                                class="card-info-value"></span></li>
                        <li><span class="card-info-label">Profession</span> <span id="profession"
                                class="card-info-value"></span></li>
                        <li><span class="card-info-label">Email</span> <span id="email" class="card-info-value"></span>
                        </li>
                        <li><span class="card-info-label">Contact</span> <span id="contact"
                                class="card-info-value"></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
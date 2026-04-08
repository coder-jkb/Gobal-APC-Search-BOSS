# WordPress Integration Guide

There are two primary ways to run the **Global APC Map** within your WordPress website. 

## Method 1: The Custom Plugin (Recommended)
We have packaged all the logic into a standalone, optimized WordPress plugin located in `/wp-boss-apc-map/`.

### Installation Steps:
1. **Zip the Plugin**: Compress the entire `wp-boss-apc-map` folder into a zip file (e.g., `wp-boss-apc-map.zip`).
2. **Upload to WordPress**:
   - Log into your WordPress Admin Dashboard.
   - Navigate to **Plugins** -> **Add New**.
   - Click **Upload Plugin** at the top of the page.
   - Choose your `wp-boss-apc-map.zip` file and click **Install Now**.
3. **Activate**: Click **Activate Plugin**.
4. **Add to a Page**: 
   - Create a new Page (or edit an existing one).
   - Add a *Shortcode Block* in the WordPress editor.
   - Type exactly `[boss_apc_map]` inside the block.
   - Publish or Update the page.

> [!TIP]
> **Why choose this method?** The plugin cleanly separates assets. It only loads the heavy 3D engine scripts on pages where `[boss_apc_map]` is actively present, keeping the rest of your site lightning fast.

---

## Method 2: Custom HTML Block (Simpler Alternative)
If you do not want to install a plugin, you can embed the entire application natively using an existing WordPress block.

### Installation Steps:
1. **Open the Page Editor**: Go to the specific WordPress page where you want the map to appear.
2. **Insert Custom HTML Block**: Click the `+` icon to add a new block and select **Custom HTML**.
3. **Copy the Code**: Open the original standalone `index.html` file in any text editor and copy all lines of code exactly as they are.
4. **Paste**: Paste the copied code directly into the Custom HTML block.
5. Publish or Update the page.

> [!WARNING]
> **Why limit this method?** Since WordPress wraps generic page elements in its own theme containers, putting absolute or fixed elements (like our 100vh globe) directly inside a page may cause CSS conflicts with your active theme's headers or footers, requiring extra custom CSS tuning.

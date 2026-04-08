<?php
/**
 * Plugin Name: BOSS Global APC Map
 * Description: A full-screen 3D interactive web map to locate Abroad Program Coordinators.
 * Version: 1.0.0
 * Author: BOSS Team
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'BOSS_APC_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BOSS_APC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Include main shortcode class
require_once BOSS_APC_PLUGIN_DIR . 'includes/class-boss-apc.php';

// Initialize the plugin
function boss_apc_map_init() {
    new Boss_APC_Map();
}
add_action( 'plugins_loaded', 'boss_apc_map_init' );

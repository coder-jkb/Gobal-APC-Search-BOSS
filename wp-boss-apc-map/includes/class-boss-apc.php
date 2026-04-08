<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Boss_APC_Map {

    public function __construct() {
        add_shortcode( 'boss_apc_map', array( $this, 'render_shortcode' ) );
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_assets' ) );
    }

    public function enqueue_assets() {
        // Load assets only if shortcode is present to respect WordPress optimize standards.
        global $post;
        if ( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'boss_apc_map' ) ) {
            wp_register_script( 'globe-gl', 'https://unpkg.com/globe.gl', array(), null, false );
            wp_enqueue_script('globe-gl');
            
            wp_enqueue_style( 'boss-apc-style', BOSS_APC_PLUGIN_URL . 'assets/css/style.css', array(), '1.0.0' );
            wp_enqueue_style( 'google-font-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', array(), null );

            wp_enqueue_script( 'boss-apc-script', BOSS_APC_PLUGIN_URL . 'assets/js/app.js', array('globe-gl'), '1.0.0', true );
        }
    }

    public function render_shortcode() {
        ob_start();
        include BOSS_APC_PLUGIN_DIR . 'templates/map-template.php';
        return ob_get_clean();
    }
}

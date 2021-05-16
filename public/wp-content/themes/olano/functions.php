<?php

function erango_css() {
	// get_stylesheet_directory_uri() => child theme
	// get_template_directory_uri() => parent theme
	// remove uri for filemtime as we want server rather than web address
	wp_enqueue_style('erango', get_stylesheet_directory_uri() . '/assets/css/style.css', array(),
	 filemtime(get_stylesheet_directory() . '/assets/css/style.css'), 'all');
}
add_action('wp_enqueue_scripts', 'erango_css');

add_theme_support( 'wp-block-styles' );
add_theme_support( 'align-wide' );
add_theme_support( 'responsive-embeds' );
add_theme_support( 'custom-spacing' );
add_theme_support( 'experimental-link-color' );
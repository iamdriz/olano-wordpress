<?php

function olano_home_testimonials_list_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'home-testimonials-list-block',
		get_stylesheet_directory_uri() . '/blocks/home/home-testimonials-list/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/home/home-testimonials-list/block.js' )
	);

	register_block_type( 'olano/home-testimonials-list-block', array(
        'api_version' => 2,
		'editor_script' => 'home-testimonials-list-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_home_testimonials_list_register_block' );

function olano_home_testimonials_list_javascript() {
    wp_enqueue_script(
        'home-testimonials-list-javascript',
        get_stylesheet_directory_uri() . '/blocks/home/home-testimonials-list/javascript.js',
		array('jquery', 'home-testimonials-list-block'),
		filemtime( get_stylesheet_directory() . '/blocks/home/home-testimonials-list/javascript.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'olano_home_testimonials_list_javascript');
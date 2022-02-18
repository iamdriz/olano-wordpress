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
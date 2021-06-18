<?php

function olano_home_testimonials_list_item_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'home-testimonials-list-item-block',
		get_stylesheet_directory_uri() . '/blocks/home/home-testimonials-list-item/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/home/home-testimonials-list-item/block.js' )
	);

	register_block_type( 'olano/home-testimonials-list-item-block', array(
        'api_version' => 2,
		'editor_script' => 'home-testimonials-list-item-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_home_testimonials_list_item_register_block' );
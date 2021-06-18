<?php

function olano_home_client_list_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'home-client-list-block',
		get_stylesheet_directory_uri() . '/blocks/home/home-client-list/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/home/home-client-list/block.js' )
	);

	register_block_type( 'olano/home-client-list-block', array(
		'editor_script' => 'home-client-list-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_home_client_list_register_block' );
<?php

function olano_services_list_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'services-list-block',
		get_stylesheet_directory_uri() . '/blocks/services-list/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/services-list/block.js' )
	);

	register_block_type( 'olano/services-list-block', array(
		'api_version' => 2,
		'editor_script' => 'services-list-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_services_list_register_block' );
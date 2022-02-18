<?php

function olano_service_links_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'service-links-block',
		get_stylesheet_directory_uri() . '/blocks/service/service-links/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/service/service-links/block.js' )
	);

	register_block_type( 'olano/service-links-block', array(
		'api_version' => 2,
		'editor_script' => 'service-links-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_service_links_register_block' );
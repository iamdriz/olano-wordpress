<?php

function olano_service_content_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'service-content-block',
		get_stylesheet_directory_uri() . '/blocks/service/service-content/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/service/service-content/block.js' )
	);

	register_block_type( 'olano/service-content-block', array(
		'api_version' => 2,
		'editor_script' => 'service-content-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_service_content_register_block' );
<?php

function olano_services_content_header_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'services-content-header-block',
		get_stylesheet_directory_uri() . '/blocks/services/services-content-header/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/services/services-content-header/block.js' )
	);

	register_block_type( 'olano/services-content-header-block', array(
		'editor_script' => 'services-content-header-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_services_content_header_register_block' );
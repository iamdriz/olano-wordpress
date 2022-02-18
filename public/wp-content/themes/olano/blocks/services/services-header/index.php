<?php

function olano_services_header_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'services-header-block',
		get_stylesheet_directory_uri() . '/blocks/services/services-header/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/services/services-header/block.js' )
	);

	register_block_type( 'olano/services-header-block', array(
		'editor_script' => 'services-header-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_services_header_register_block' );
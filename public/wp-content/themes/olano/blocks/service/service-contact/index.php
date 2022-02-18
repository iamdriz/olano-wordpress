<?php

function olano_service_contact_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'service-contact-block',
		get_stylesheet_directory_uri() . '/blocks/service/service-contact/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/service/service-contact/block.js' )
	);

	register_block_type( 'olano/service-contact-block', array(
		'editor_script' => 'service-contact-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_service_contact_register_block' );
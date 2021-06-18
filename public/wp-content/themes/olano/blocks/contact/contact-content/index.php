<?php

function olano_contact_content_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'contact-content-block',
		get_stylesheet_directory_uri() . '/blocks/contact/contact-content/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/contact/contact-content/block.js' )
	);

	register_block_type( 'olano/contact-content-block', array(
		'editor_script' => 'contact-content-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_contact_content_register_block' );
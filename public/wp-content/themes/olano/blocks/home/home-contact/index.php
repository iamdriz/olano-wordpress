<?php

function olano_home_contact_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'home-contact-block',
		get_stylesheet_directory_uri() . '/blocks/home/home-contact/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/home/home-contact/block.js' )
	);

	register_block_type( 'olano/home-contact-block', array(
		'editor_script' => 'home-contact-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_home_contact_register_block' );
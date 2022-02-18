<?php

function olano_about_content_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'about-content-block',
		get_stylesheet_directory_uri() . '/blocks/about/about-content/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/about/about-content/block.js' )
	);

	register_block_type( 'olano/about-content-block', array(
		'editor_script' => 'about-content-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_about_content_register_block' );
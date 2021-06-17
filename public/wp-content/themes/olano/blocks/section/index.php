<?php

function olano_section_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'olano-section-block',
		get_stylesheet_directory_uri() . '/blocks/section/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/section/block.js' )
	);

	register_block_type( 'olano/olano-section-block', array(
		'editor_script' => 'olano-section-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_section_register_block' );
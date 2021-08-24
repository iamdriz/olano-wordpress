<?php

function olano_work_header_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'work-header-block',
		get_stylesheet_directory_uri() . '/blocks/work/work-header/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/work/work-header/block.js' )
	);

	register_block_type( 'olano/work-header-block', array(
		'editor_script' => 'work-header-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_work_header_register_block' );
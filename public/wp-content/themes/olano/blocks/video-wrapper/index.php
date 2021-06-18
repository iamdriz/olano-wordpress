<?php

function olano_video_wrapper_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'video-wrapper-block',
		get_stylesheet_directory_uri() . '/blocks/video-wrapper/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/video-wrapper/block.js' )
	);

	register_block_type( 'olano/video-wrapper-block', array(
		'editor_script' => 'video-wrapper-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_video_wrapper_register_block' );
<?php

function olano_video_wrapper2_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'video-wrapper2-block',
		get_stylesheet_directory_uri() . '/blocks/video-wrapper2/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/video-wrapper2/block.js' )
	);

	register_block_type( 'olano/video-wrapper2-block', array(
		'editor_script' => 'video-wrapper2-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_video_wrapper2_register_block' );
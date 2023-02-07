<?php

function olano_case_study_content_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'case-study-content-block',
		get_stylesheet_directory_uri() . '/blocks/case-study/case-study-content/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/case-study/case-study-content/block.js' )
	);

	register_block_type( 'olano/case-study-content-block', array(
		'editor_script' => 'case-study-content-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_case_study_content_register_block' );
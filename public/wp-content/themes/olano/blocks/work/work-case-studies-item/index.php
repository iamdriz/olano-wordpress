<?php

function olano_work_case_studies_item_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'work-case-studies-item-block',
		get_stylesheet_directory_uri() . '/blocks/work/work-case-studies-item/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/work/work-case-studies-item/block.js' )
	);

	register_block_type( 'olano/work-case-studies-item-block', array(
		'api_version' => 2,
		'editor_script' => 'work-case-studies-item-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_work_case_studies_item_register_block' );
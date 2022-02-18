<?php

function olano_about_team_item_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'about-team-item-block',
		get_stylesheet_directory_uri() . '/blocks/about/about-team-item/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/about/about-team-item/block.js' )
	);

	register_block_type( 'olano/about-team-item-block', array(
		'api_version' => 2,
		'editor_script' => 'about-team-item-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_about_team_item_register_block' );
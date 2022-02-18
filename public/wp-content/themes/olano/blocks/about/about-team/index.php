<?php

function olano_about_team_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		'about-team-block',
		get_stylesheet_directory_uri() . '/blocks/about/about-team/block.js',
		array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-editor', 'wp-components' ),
		filemtime( get_stylesheet_directory() . '/blocks/about/about-team/block.js' )
	);

	register_block_type( 'olano/about-team-block', array(
		'api_version' => 2,
		'editor_script' => 'about-team-block', // enqueues the script after register
	) );

}
add_action( 'init', 'olano_about_team_register_block' );
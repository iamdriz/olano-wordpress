<?php

// general
require get_stylesheet_directory() . '/blocks/section/index.php';
require get_stylesheet_directory() . '/blocks/services-list/index.php';
require get_stylesheet_directory() . '/blocks/services-list-item/index.php';
require get_stylesheet_directory() . '/blocks/video-wrapper/index.php';
// home
require get_stylesheet_directory() . '/blocks/home/home-masthead/index.php';
require get_stylesheet_directory() . '/blocks/home/home-services/index.php';
require get_stylesheet_directory() . '/blocks/home/home-contact/index.php';
require get_stylesheet_directory() . '/blocks/home/home-client-list/index.php';
require get_stylesheet_directory() . '/blocks/home/home-testimonials-list/index.php';
require get_stylesheet_directory() . '/blocks/home/home-testimonials-list-item/index.php';
// services
require get_stylesheet_directory() . '/blocks/services/services-header/index.php';
// about
require get_stylesheet_directory() . '/blocks/about/about-header/index.php';
require get_stylesheet_directory() . '/blocks/about/about-team/index.php';
require get_stylesheet_directory() . '/blocks/about/about-team-item/index.php';
require get_stylesheet_directory() . '/blocks/about/about-content/index.php';
// contact
require get_stylesheet_directory() . '/blocks/contact/contact-content/index.php';

function olano_css() {
	// get_stylesheet_directory_uri() => child theme
	// get_template_directory_uri() => parent theme
	// remove uri for filemtime as we want server rather than web address
	wp_enqueue_style('erango', get_stylesheet_directory_uri() . '/assets/css/style.css', array(),
	 filemtime(get_stylesheet_directory() . '/assets/css/style.css'), 'all');
}
add_action('wp_enqueue_scripts', 'olano_css');

add_theme_support( 'wp-block-styles' );
// add_theme_support( 'align-wide' );
// add_theme_support( 'responsive-embeds' );
// add_theme_support( 'custom-spacing' );
// add_theme_support( 'experimental-link-color' );

add_theme_support( 'editor-styles' );
add_editor_style( './assets/css/style-editor.css' );

function olano_menus() {
	register_nav_menus(
		array(
		'header-menu' => __( 'Header Menu' ),
		'footer-menu-1' => __( 'Footer Menu 1' ),
		'footer-menu-2' => __( 'Footer Menu 2' )
		)
	);
}
add_action('init', 'olano_menus');

add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, array( 'preload' ) );
} );






// font-sizes
add_theme_support('disable-custom-font-sizes');
add_theme_support( 'editor-font-sizes', array(
    array(
        'name' => 'SM',
        'size' => '0.875rem',
        'slug' => 'sm'
    ),
    array(
        'name' => 'MD',
        'size' => '1rem',
        'slug' => 'md'
    ),
    array(
        'name' => 'LG',
        'size' => '1.25rem',
        'slug' => 'lg'
    ),
    array(
        'name' => 'XL',
        'size' => '1.5rem',
        'slug' => 'xl'
    ),
    array(
        'name' => 'XXL',
        'size' => '1.75rem',
        'slug' => 'xxl'
    ),
    array(
        'name' => 'XXXL',
        'size' => '2rem',
        'slug' => 'xxxl'
    ),
    array(
        'name' => 'H1',
        'size' => '2.5rem',
        'slug' => 'h1'
    ),
    array(
        'name' => 'H2',
        'size' => '2rem',
        'slug' => 'h2'
    ),
    array(
        'name' => 'H3',
        'size' => '1.75rem',
        'slug' => 'h3'
    ),
    array(
        'name' => 'H4',
        'size' => '1.5rem',
        'slug' => 'h4'
    ),
    array(
        'name' => 'H5',
        'size' => '1.25rem',
        'slug' => 'h5'
    ),
    array(
        'name' => 'H6',
        'size' => '1rem',
        'slug' => 'h6'
	),
    array(
        'name' => 'Display 1',
        'size' => '5rem',
        'slug' => 'display1'
    ),
    array(
        'name' => 'Display 2',
        'size' => '4.5rem',
        'slug' => 'display2'
    ),
    array(
        'name' => 'Display 3',
        'size' => '4rem',
        'slug' => 'display3'
    ),
    array(
        'name' => 'Display 4',
        'size' => '3.5rem',
        'slug' => 'display4'
    ),
    array(
        'name' => 'Display 5',
        'size' => '3rem',
        'slug' => 'display5'
    ),
    array(
        'name' => 'Display 6',
        'size' => '2.5rem',
        'slug' => 'display6'
    )
) );


// colors
add_theme_support( 'editor-color-palette', array(
    array(
        'name' => 'White',
        'slug' => 'white',
        'color' => '#ffffff',
    ),
    array(
        'name' => 'Black',
        'slug' => 'black',
        'color' => '#000000',
    ),
    array(
        'name' => 'Red',
        'slug' => 'red',
        'color' => '#fe3845',
    ),
    array(
        'name' => 'Off Red',
        'slug' => 'off-red',
        'color' => '#fe4c57',
    ),
    array(
        'name' => 'Off White',
        'slug' => 'off-white',
        'color' => '#f3f3f3',
    ),
    array(
        'name' => 'Yellow',
        'slug' => 'yellow',
        'color' => '#ffc050',
    ),
    array(
        'name' => 'Green',
        'slug' => 'green',
        'color' => '#00af85',
    ),
    array(
        'name' => 'Blue',
        'slug' => 'blue',
        'color' => '#016fb9',
	),
    array(
        'name' => 'Grey',
        'slug' => 'grey',
        'color' => '#3c3c3c',
    )
) );
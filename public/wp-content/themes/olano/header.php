<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title><?php wp_title(''); ?></title>
    <?php wp_head(); ?>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/aos@next/dist/aos.css">
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <!-- <script src="https://unpkg.com/@hotwired/turbo@7.0.1/dist/turbo.es2017-umd.js"></script> -->
    <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/application.js"></script>
</head>

<body <?php body_class(); ?>>
    <div style="overflow-x: hidden !important;">
        <header class="header">
            <div class="container">
                <a class="logo" href="<?php echo bloginfo('home'); ?>">
                    <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/logo-white.svg" alt="Olano logo">
                </a>
                <div class="burger">
                    <a class="burger__link">
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                    </a>
                </div>
                <nav class="menu">
                    <?php wp_nav_menu( array( 
                    'theme_location' => 'header-menu', 
                    'container' => '',
                    'container_class' => '',
                    'menu_class' => 'menu-list',
                    'fallback_cb' => false ) ); ?>
                </nav>
                <div class="circle"></div>
            </div>
        </header>

        <main class="main">
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
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
                <ul class="menu-list">
                    <li class="menu-list-item">
                        <a href="<?php echo bloginfo('home'); ?>">Home</a>
                    </li>
                    <li class="menu-list-item">
                        <a href="<?php echo bloginfo('home'); ?>/services">Services</a>
                    </li>
                    <li class="menu-list-item">
                        <a href="<?php echo bloginfo('home'); ?>/about">About</a>
                    </li>
                    <li class="menu-list-item">
                        <a href="<?php echo bloginfo('home'); ?>/contact">Contact</a>
                    </li>
                    <li class="menu-list-item">
                        <a href="#">Play</a>
                    </li>
                </ul>
            </nav>
            <div class="circle"></div>
        </div>
    </header>
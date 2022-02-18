<?php
$pagelist = get_pages('sort_column=menu_order&sort_order=asc');
$pages = array();
foreach ($pagelist as $page) {
   $pages[] += $page->ID;
}

$current = array_search(get_the_ID(), $pages);
$prevID = $pages[$current-1];
$nextID = $pages[$current+1];
?>

</main>
<footer class="footer">
    <div class="container">

        <div class="row">
            <div class="col md:col--2 margin-bottom-4 md:margin-bottom-0">
                <div class="footer-about">
                    <a class="footer-about__logo" href="<?php echo bloginfo('home'); ?>">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/logo-red.svg" alt="Olano logo">
                    </a>
                    <div class="footer-about__content">
                        <p>Olano is part of <a href="https://www.nicholasassociatesgroup.co.uk" target="_blank">Nicholas Associates Group</a>, Market leading partner of choice for talent management
                        solutions from Apprentice to Boardroom.</p>
                    </div>
                </div>
            </div>

            <div class="col md:col--9 md:offset-1">
                <ul class="row footer-menu">
                    <li class="col md:col--2 margin-bottom-4 md:margin-bottom-0 footer-menu-item">
                        <h3 class="footer-menu__title">Follow us</h3>
                        <ul class="social-list">
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--yellow" href="https://www.instagram.com/olanouk" target="_blank">
                                    <i class="fab fa-instagram fa-fw" aria-label="Instagram"></i>
                                </a>
                            </li>
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--blue" href="https://www.linkedin.com/company/olanouk" target="_blank">
                                    <i class="fab fa-linkedin fa-fw" aria-label="LinkedIn"></i>
                                </a>
                            </li>
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--green" href="https://open.spotify.com/user/mboqenwv93pht1oreco5d4x4g?si=ab43b979b9134bba" target="_blank">
                                    <i class="fab fa-spotify fa-fw" aria-label="Spotify"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="col md:col--2 margin-bottom-4 md:margin-bottom-0 footer-menu-item">
                        <h3 class="footer-menu__title">Company</h3>
                        <?php wp_nav_menu( array( 
                            'theme_location' => 'footer-menu-1', 
                            'container' => '',
                            'container_class' => '',
                            'menu_class' => 'footer-menu__list',
                            'fallback_cb' => false ) ); ?>
                    </li>
                    <li class="col md:col--2 margin-bottom-4 md:margin-bottom-0 footer-menu-item">
                        <h3 class="footer-menu__title">Resources</h3>
                        <?php wp_nav_menu( array( 
                            'theme_location' => 'footer-menu-2', 
                            'container' => '',
                            'container_class' => '',
                            'menu_class' => 'footer-menu__list',
                            'fallback_cb' => false ) ); ?>
                    </li>
                    <li class="col md:col--2 md:offset-1 footer-menu-item md:text-align-right">
                    <?php if (!empty($nextID)) { ?>
                        <a class="arrow-link" href="<?php echo get_permalink($nextID); ?>"><?php echo get_the_title($nextID); ?></a>
                    <?php } else { ?>
                        <a class="arrow-link" href="<?php echo bloginfo('home'); ?>">Home</a>
                    <?php } ?>
                    </li>
                </ul>
                <div class="footer-copyright">
                    <p>Copyright &copy; <?php echo date('Y'); ?> Nicholas Associates Group Limited. All rights reserved.<br>
                    Registered in England – Company number: 03606174 | VAT Registration no: GB727824120</p>
                </div>
            </div>
        </div>

    </div>
</footer>

<div class="back-to-top">
    <i class="far fa-chevron-up fa-fw back-top-top__icon"></i>
</div>

<div class="grid-overlay">
	<div class="container">
		<div class="grid">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="<?php echo bloginfo('template_directory'); ?>/assets/js/application.js"></script>
    <?php wp_footer(); ?>
    </div><!-- overflow: hidden !important -->
</body>

</html>
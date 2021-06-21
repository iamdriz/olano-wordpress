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

<footer class="footer">
    <div class="container">

        <div class="row">
            <div class="col md:col--2">
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
                    <li class="col md:col--2 footer-menu-item">
                        <h3 class="footer-menu__title">Follow us</h3>
                        <ul class="social-list">
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--yellow" href="#">
                                    <i class="fab fa-instagram fa-fw" aria-label="Instagram"></i>
                                </a>
                            </li>
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--blue" href="#">
                                    <i class="fab fa-linkedin fa-fw" aria-label="LinkedIn"></i>
                                </a>
                            </li>
                            <li class="social-list-item">
                                <a class="social-list-link social-list-link--green" href="#">
                                    <i class="fab fa-spotify fa-fw" aria-label="Spotify"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="col md:col--2 footer-menu-item">
                        <h3 class="footer-menu__title">Company</h3>
                        <?php wp_nav_menu( array( 
                            'theme_location' => 'footer-menu-1', 
                            'container' => '',
                            'container_class' => '',
                            'menu_class' => 'footer-menu__list',
                            'fallback_cb' => false ) ); ?>
                    </li>
                    <li class="col md:col--2 footer-menu-item">
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
                    <p>Copyright &copy; 2021 Nicholas Associates Group Limited. All rights reserved.<br>
                    Registered in England – Company number: 03606174 | VAT Registration no: GB727824120</p>
                </div>
            </div>
        </div>

    </div>
</footer>

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
    <script>
        $(window).load(function() {
            $('.preload').removeClass('preload');
        });
        $(document).on('click', '.burger__link', function(e){
            e.preventDefault();
            $('body').toggleClass('show-menu');
        });
        $(document).on('click', function (e) {
            if ($(e.target).parents().hasClass('tooltip')) return;
            $('.tooltip').removeClass('tooltip--open');
            $('body').removeClass('show-tooltip');
        });
        $(document).on('click', '[data-tooltip-close]', function (e) {
            e.preventDefault();
            let tooltip = $(this).parents('.tooltip');
            $(tooltip).removeClass('tooltip--open');
            $('body').removeClass('show-tooltip');
        });
        $(document).on('click', '[data-tooltip-open]', function (e) {
            e.preventDefault();
            let tooltip = $(this).attr('href');
            if ($(tooltip).hasClass('tooltip--open')) {
                $(tooltip).removeClass('tooltip--open');
                $('body').removeClass('show-tooltip');
            } else {
                $('.tooltip').removeClass('tooltip--open');
                $(tooltip).addClass('tooltip--open');
                $('body').addClass('show-tooltip');
            }
        });
        $(document).on('keydown', function (e) {
            let tooltip = $('.tooltip--open');
            let key = e.which;
            if (!$(tooltip).length > 0) return;
            if (key == 27) {
                $('.tooltip').removeClass('tooltip--open');
            } else if (key == 37) {
                let arrowLeft = $(tooltip).find('.tooltip-arrow:first-child');
                $(arrowLeft).trigger('click');
            } else if (key == 39) {
                let arrowRight = $(tooltip).find('.tooltip-arrow:last-child');
                $(arrowRight).trigger('click');
            }
        });

        $(document).on('click', '.book a', function (e) {
            e.preventDefault();
            let page = $(this).attr('href');
            $('.book-page--current').removeClass('book-page--current');
            $(page).addClass('book-page--current');
        });

        let pressed = {};

        document.addEventListener('keydown', (event) => {
            pressed[event.which] = true;
        });
        document.addEventListener('keyup', (event) => {
            delete pressed[event.which];
        });
        document.addEventListener('keydown', (event) => {
            if(pressed[16]&&pressed[71]){
                $('.grid-overlay').toggleClass('grid-overlay--visible');
            }
        });

        function nextTestimonial() {
            $('.testimonial-arrow:first-child').removeClass('testimonial-arrow--disabled');
            let testimonial = $('.testimonials-list-item--active').next();
            if( $(testimonial).is(':last-child') ) {
                $('.testimonial-arrow:last-child').addClass('testimonial-arrow--disabled');
            }
            $('.testimonials-list-item').removeClass('testimonials-list-item--active');
            $(testimonial).addClass('testimonials-list-item--active');
        }

        function previousTestimonial() {
            $('.testimonial-arrow:last-child').removeClass('testimonial-arrow--disabled');
            let testimonial = $('.testimonials-list-item--active').prev();
            if( $(testimonial).is(':first-child') ) {
                $('.testimonial-arrow:first-child').addClass('testimonial-arrow--disabled');
            }
            $('.testimonials-list-item').removeClass('testimonials-list-item--active');
            $(testimonial).addClass('testimonials-list-item--active');
        }

        $('.testimonials-list-item:first-child').addClass('testimonials-list-item--active');
        $('.testimonial-arrow:first-child').addClass('testimonial-arrow--disabled');

        $(document).on('click', '.testimonial-arrow:first-child', function(e){
            e.preventDefault();
            previousTestimonial();
        });
        $(document).on('click', '.testimonial-arrow:last-child', function(e){
            e.preventDefault();
            nextTestimonial();
        });

    </script>
    <?php wp_footer(); ?>
</body>

</html>
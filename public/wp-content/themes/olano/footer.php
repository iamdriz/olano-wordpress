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
                    <li class="col md:col--3 footer-menu-item">
                        <h3 class="footer-menu__title">Follow us</h3>
                        <ul class="social-links">
                            <li><a href="#"><i class="fab fa-facebook fa-fw" aria-label="Facebook"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter fa-fw" aria-label="Twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin fa-fw" aria-label="LinkedIn"></i></a></li>
                        </ul>
                    </li>
                    <li class="col md:col--3 footer-menu-item">
                        <h3 class="footer-menu__title">Company</h3>
                        <ul class="footer-menu__list">
                            <li><a href="<?php echo bloginfo('home'); ?>/services">Services</a></li>
                            <li><a href="<?php echo bloginfo('home'); ?>/about">About</a></li>
                            <li><a href="<?php echo bloginfo('home'); ?>/contact">Contact</a></li>
                        </ul>
                    </li>
                    <li class="col md:col--3 footer-menu-item">
                        <h3 class="footer-menu__title">Resources</h3>
                        <ul class="footer-menu__list">
                            <li><a href="#">Our Stuff</a></li>
                            <li><a href="#">Brand Guidelines</a></li>
                            <li><a href="#">Policies</a></li>
                        </ul>
                    </li>
                    <li class="col md:col--3 footer-menu-item">
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

    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script>
        $(document).on('click', '.burger__link', function(e){
            e.preventDefault();
            $('body').toggleClass('show-menu');
        });

        function offsetVideo(){
            let height = $('.video').outerHeight()/2;
            $('section#services').css({
                marginTop: -height - 64,
                paddingTop: height + 64
            });
        }

        $(document).ready(function(){
            offsetVideo();
        });

        $(window).resize(function(){
            offsetVideo();
        });


        $(document).on('click', function (e) {
            if ($(e.target).parents().hasClass('tooltip')) return;
            $('.tooltip').removeClass('tooltip--open');
        });
        $(document).on('click', '[data-tooltip-close]', function (e) {
            e.preventDefault();
            let tooltip = $(this).parents('.tooltip');
            $(tooltip).removeClass('tooltip--open');
        });
        $(document).on('click', '[data-tooltip-open]', function (e) {
            e.preventDefault();
            let tooltip = $(this).attr('href');
            if ($(tooltip).hasClass('tooltip--open')) {
                $(tooltip).removeClass('tooltip--open');
            } else {
                $('.tooltip').removeClass('tooltip--open');
                $(tooltip).addClass('tooltip--open');
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
    </script>
    <?php wp_footer(); ?>
</body>

</html>
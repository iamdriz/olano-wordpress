<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

    <?php if ( !empty( get_the_content() ) ) { the_content(); } ?>

<?php endwhile; ?>
<?php else : ?>
    <section class="section section--red">
    <div class="container">

        <div class="row align-items-center">
            <div class="col lg:col--4 margin-bottom-4 lg:margin-bottom-0">
                <h1 class="font-size-display2">Uh oh! Looks like something’s broken.</h1>
                <p class="font-size-lg">Error 404 - page not found.</p>
                <div class="wp-block-buttons margin-top-4">
                    <div class="wp-block-button">
                        <a class="wp-block-button__link has-yellow-background-color" href="<?php echo bloginfo('home'); ?>">Go to Home</a>
                    </div>
                    <div class="wp-block-button">
                        <a class="wp-block-button__link has-white-background-color" href="javascript:history.back();">Go back</a>
                    </div>
                </div>
            </div>
            <div class="col lg:col--7 lg:offset-1">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/404-cat.gif">
            </div>
        </div>

    </div>
</section>

<?php endif; ?>

<?php get_footer(); ?>
<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

    <?php if ( !empty( get_the_content() ) ) { the_content(); } ?>

<?php endwhile; ?>
<?php else : ?>
    <section class="section section--red">
    <div class="container">

        <div class="row">
            <div class="col md:col--9 md:offset-3">
                <h1 class="font-size-display2">404 Not Found</h1>
            </div>
        </div>  

    </div>
</section>

<?php endif; ?>

<?php get_footer(); ?>
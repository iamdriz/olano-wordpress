<?php get_header(); ?>

<?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

<section class="section section--red">
    <div class="container">

        <div class="row">
            <div class="col md:col--9 md:offset-3">
                <h1 class="font-size-display2"><?php the_title(); ?></h1>
            </div>
        </div>  

    </div>
</section>

<section class="section section--off-white">
    <div class="container">

        <?php the_content(); ?>

    </div>
</section>

<?php endwhile; ?>
<?php else : ?>
    <p>No content.</p>
<?php endif; ?>

<?php get_footer(); ?>
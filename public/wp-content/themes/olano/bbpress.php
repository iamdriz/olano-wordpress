<?php get_header(); ?>

<section class="section section--red">
    <div class="container">

        <div class="row">
            <div class="col md:col--7 md:offset-2">
                <h1 class="font-size-display2"><?php the_title(); ?></h1>
            </div>
        </div>

    </div>
</section>

<section class="section section--off-white">
    <div class="container">

        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>

                <?php the_content(); ?>

            <?php endwhile; ?>
        <?php endif; ?>

    </div>
</section>

<?php get_footer(); ?>
<?php get_header(); ?>

<section class="section section--blue">
    <div class="container">

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; ?>
    <?php else : ?>
        <p>No content.</p>
    <?php endif; ?>

    </div>
</section>

<?php get_footer(); ?>
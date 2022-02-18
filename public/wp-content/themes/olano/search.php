<?php get_header(); ?>

<section class="section section--red">
    <div class="container">

        <div class="row">
            <div class="col md:col--9 md:offset-3">
                <h1 class="font-size-display2">Search</h1>
            </div>
        </div>  

    </div>
</section>

<section class="section section--off-white">
    <div class="container">

        <div class="row">
            <div class="col md:col--9 md:offset-3">

                <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>

                <h3><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></h3>

                <?php endwhile; ?>
                <?php else : ?>

                <p>No results found.</p>

                <?php endif; ?>

            </div>
        </div>

    </div>
</section>

<?php get_footer(); ?>
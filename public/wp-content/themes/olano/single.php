<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

    <article class="article">

        <section class="section section--red">
            <div class="container">

                <header class="article-header margin-bottom-8">
                    <div class="row">
                        <div class="col col--6 offset-3 md:col--2 md:offset-1 margin-bottom-4 md:margin-bottom-0">
                            <figure class="figure figure--rounded">
                                <img src="http://localhost:8222/wp-content/uploads/Red.svg">
                            </figure>
                        </div>
                        <div class="col md:col--7 md:offset-1">
                            <h1 class="font-size-display2"><?php the_title(); ?></h1>
                            <p class="font-size-lg"><?php echo get_the_date('F d, Y') ?></p>
                        </div>
                    </div>
                </header>

            </div>
        </section>

        <section class="section section--off-white">
            <div class="container">

            <div class="row">
                <div class="col md:col--12">

                    <div class="article-content">
                        <figure class="article-thumbnail">
                            <?php if ( has_post_thumbnail() ) { ?>
                                <?php echo the_post_thumbnail(); ?>
                            <?php } else { ?>
                                <!-- <img src="https://picsum.photos/1920/1080?random=<?php the_ID(); ?>" width="1920" height="1080"> -->
                                <div style="height:1rem;background-color:var(--blue);"></div>
                            <?php } ?>		
                        </figure>
                        <div class="article-content__inner">
                            <?php the_content(); ?>
                        </div>
                    </div>

                </div>
            </div>
                
            </div>
        </section>

</article>

<?php endwhile; ?>

<section class="section section--white">
    <div class="container">

    <?php
        // $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
        // $args = array(
        //     'posts_per_page' => 3,
        //     'paged'          => $paged
        // );

        // $the_query = new WP_Query( $args );

        $related_query = new WP_Query(array(
            'post_type' => 'post',
            'tag__in' => wp_get_post_tags(get_the_ID()),
            'category__in' => wp_get_post_categories(get_the_ID()),
            'post__not_in' => array(get_the_ID()),
            'posts_per_page' => 3,
            'orderby' => 'rand',
        ));
    ?>
    
    <?php if ($related_query->have_posts()) { ?>
        <div class="row margin-bottom-6">
            <div class="col md:col-11 md:offset-1">
                <h2 class="font-size-display4">See also</h2>
            </div>
        </div>
        <?php get_template_part('template-parts/post-list', 'posts', array('the_query' => $related_query)); ?>
    <?php } ?>

    <div class="wp-block-buttons is-content-justification-center<?php if($related_query->have_posts()) echo ' margin-top-4'; ?>">
        <div class="wp-block-button">
            <a class="wp-block-button__link has-orange-background-color has-background" href="<?php echo get_post_type_archive_link('post'); ?>">Back to Blog</a>
        </div>
    </div>

    <?php wp_reset_postdata(); ?>

    </div>
</section>

<?php get_template_part('template-parts/follow-us-section'); ?>

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
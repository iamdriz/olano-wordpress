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

                <div class="article-content">
                    <figure class="article-thumbnail">
                        <?php if ( has_post_thumbnail() ) { ?>
                            <?php echo the_post_thumbnail(); ?>
                        <?php } else { ?>
                            <img src="https://picsum.photos/1920/1080?random=<?php the_ID(); ?>" width="1920" height="1080">
                        <?php } ?>		
                    </figure>
                    <div class="article-content__inner">
                        <div class="row">
                            <div class="col md:col--10 md:offset-1">
                                <?php the_content(); ?>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

</article>

<?php get_template_part('template-parts/follow-us-section'); ?>

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
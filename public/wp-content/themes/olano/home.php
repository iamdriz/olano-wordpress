<?php get_header(); ?>

<section class="section section--red">
	<div class="container">

		<div class="row<?php if(!is_archive() && get_query_var('paged') == 0) echo ' margin-bottom-8' ?>">
			<!-- <div class="col col--6 offset-3 md:col--2 md:offset-1 margin-bottom-4 md:margin-bottom-0">
				<figure class="figure figure--rounded">
					<img src="http://localhost:8222/wp-content/uploads/Red.svg">
				</figure>
			</div> -->
			<div class="col md:col--7 md:offset-2">
				<h1 class="font-size-display2">What's new?</h1>
				<p class="font-size-lg">Our blog provides the best practices, tips, and inspiration for corporate training, instructional design and eLearning.</p>
			</div>
		</div>

	</div>
</section>

<!--<section class="section section--red">
  <div class="container">

  <?php wp_list_categories('title_li=0&hide_empty=0'); ?>

  </div>
</section>-->

<section class="section section--off-white">
	<div class="container">
		<?php get_template_part('template-parts/post-list'); ?>
		<?php erango_numeric_posts_nav(); ?>
	</div>
</section>

<?php get_template_part('template-parts/follow-us-section'); ?>

<?php get_footer(); ?>
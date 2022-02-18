<?php get_header(); ?>

<section class="section section--red">
	<div class="container">

		<div class="row<?php if(!is_archive() && get_query_var('paged') == 0) echo ' margin-bottom-8' ?>">
			<div class="col md:col--7 md:offset-2">
				<h1 class="font-size-display2">
				<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
					<?php /* If this is a category archive */ if (is_category()) { ?>
						<?php echo single_cat_title('', false); ?>
					<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
						<?php echo single_tag_title('', false); ?>
					<?php /* If this is a daily archive */ } elseif (is_day()) { ?>
						<?php echo get_the_time(__('F jS, Y', 'kubrick')); ?>
					<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
						<?php echo get_the_time(__('F, Y', 'kubrick')); ?>
					<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
						<?php echo get_the_time(__('Y', 'kubrick')); ?>
					<?php /* If this is an author archive */ } elseif (is_author()) { ?>
						<?php echo get_the_author_nickname(); ?>
					<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
						<?php echo ''; ?>
					<?php } ?>
				</h1>
			</div>
		</div>

	</div>
</section>

<section class="section section--off-white">
	<div class="container">
		<?php get_template_part('template-parts/post-list', 'posts', array('the_query' => $wp_query)); ?>
		<?php erango_numeric_posts_nav(); ?>
	</div>
</section>

<?php //get_template_part('template-parts/filters'); ?>

<?php get_template_part('template-parts/follow-us-section'); ?>

<?php get_footer(); ?>
<?php get_header(); ?>

<section class="section section--red">
	<div class="container">

		<div class="row<?php if(!is_archive() && get_query_var('paged') == 0) echo ' margin-bottom-8' ?>">
			<div class="col md:col--7 md:offset-2">
				<h1 class="font-size-display2">Archive</h1>
				<p class="font-size-lg">
				<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
					<?php /* If this is a category archive */ if (is_category()) { ?>
						<?php printf(__('Archive for the &#8216;%s&#8217; Category', 'kubrick'), single_cat_title('', false)); ?>
					<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
						<?php printf(__('Posts Tagged &#8216;%s&#8217;', 'kubrick'), single_tag_title('', false) ); ?>
					<?php /* If this is a daily archive */ } elseif (is_day()) { ?>
						<?php printf(_c('Archive for %s|Daily archive page', 'kubrick'), get_the_time(__('F jS, Y', 'kubrick'))); ?>
					<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
						<?php printf(_c('Archive for %s|Monthly archive page', 'kubrick'), get_the_time(__('F, Y', 'kubrick'))); ?>
					<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
						<?php printf(_c('Archive for %s|Yearly archive page', 'kubrick'), get_the_time(__('Y', 'kubrick'))); ?>
					<?php /* If this is an author archive */ } elseif (is_author()) { ?>
						<?php _e('Author Archive', 'kubrick'); ?>
					<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
						<?php _e('Blog Archives', 'kubrick'); ?>
					<?php } ?>
				</p>
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

<section class="section section--white">
	<div class="container">
		<div class="wp-block-buttons is-content-justification-center">
			<div class="wp-block-button">
				<a class="wp-block-button__link has-orange-background-color has-background" href="<?php echo get_post_type_archive_link('post'); ?>">Back to Blog</a>
			</div>
		</div>
	</div>
</section>

<?php get_template_part('template-parts/follow-us-section'); ?>

<?php get_footer(); ?>
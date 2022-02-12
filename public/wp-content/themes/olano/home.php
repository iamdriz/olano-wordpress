<?php get_header(); ?>

<section class="section section--red">
	<div class="container">

		<div class="row<?php if (!is_archive() && get_query_var('paged') == 0) echo ' margin-bottom-8' ?>">
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

<section class="section section--off-white">
	<div class="container">
		<?php get_template_part('template-parts/post-list', 'posts', array('the_query' => $wp_query, 'index' => true)); ?>
		<?php erango_numeric_posts_nav(); ?>
	</div>
</section>

<!--<section class="section section--blue">
	<div class="container">

		<h3>Categories</h3>
		<?php wp_list_categories('title_li=0&hide_empty=0'); ?>

		<h3>Tags</h3>
		<?php wp_tag_cloud('hide_empty=0'); ?>

		<h3>Archives</h3>
		<?php wp_get_archives('type=monthly'); ?>
		<h3>Authors</h3>
		<?php wp_list_authors('exclude_admin=0&optioncount=1&show_fullname=1&hide_empty=0'); ?>

		<ul class="feeds">
			<li><a href="<?php bloginfo('rss2_url'); ?>" title="<?php _e('Syndicate this site using RSS'); ?>"><?php _e('<abbr title="Really Simple Syndication">RSS</abbr>'); ?></a></li>
			<li><a href="<?php bloginfo('atom_url'); ?>" title="<?php _e('Syndicate this site using Atom'); ?>"><?php _e('Atom'); ?></a></li>
			<li><a href="<?php bloginfo('comments_rss2_url'); ?>" title="<?php _e('The latest comments to all posts in RSS'); ?>"><?php _e('Comments <abbr title="Really Simple Syndication">RSS</abbr>'); ?></a></li>
		</ul>

	</div>
</section>-->

<?php get_template_part('template-parts/follow-us-section'); ?>

<?php get_footer(); ?>
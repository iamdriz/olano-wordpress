<?php $the_query = $args['the_query']; $index = $args['index']; ?>
<?php if ($the_query->have_posts()) : ?>
<div class="row post-list<?php if(!is_archive() && get_query_var('paged') == 0 && $index) echo ' post-list--special' ?>">
	<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
		<?php $count = $the_query->current_post+1; ?>
		<?php
			$column_class = 'col';
			if(!is_archive() && get_query_var('paged') == 0 && $index) {
				if($count == 1) { $column_class = 'col'; }
				else if($count == 2 || $count == 3) { $column_class = 'col md:col--6'; }
				else if($count > 3) { $column_class = 'col md:col--4'; }
			} else {
				$column_class = 'col md:col--4';
			}
			$featured = ($count == 1 && !is_archive() && get_query_var('paged') == 0 && $index)
		?>
		<div class="<?php echo $column_class ?> margin-bottom-4">
			<article <?php post_class(($featured ? 'post--featured text-align-center' : 'post--archived')); ?> id="post-<?php the_ID(); ?>">         
				<figure class="post-thumbnail<?php if($count == 1 && !is_archive() && get_query_var('paged') == 0) echo ' post-thumbnail--short' ?>">
					<?php if ( has_post_thumbnail() ) { ?>
						<a href="<?php echo get_permalink(); ?>"><?php echo the_post_thumbnail(); ?></a>
					<?php } else { ?>
						<a href="<?php echo get_permalink(); ?>"><img src="https://picsum.photos/1920/1080?grayscale&blur=10&random=<?php the_ID(); ?>" width="1920" height="1080"></a>
					<?php } ?>		
				</figure>
				<section class="post-content">
					<h2 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
					<?php if($featured) : ?>
						<p class="post-datetime"><?php echo get_the_date('d/m/Y') ?></p>
						<?php the_excerpt(); ?>
						<div class="wp-block-buttons is-content-justification-center margin-top-4">
							<div class="wp-block-button">
								<a class="wp-block-button__link has-orange-background-color has-background" href="<?php the_permalink() ?>">Read more</a>
							</div>
						</div>
					<?php else : ?>
						<div class="post-footer">
							<p class="post-datetime"><?php echo get_the_date('d/m/Y') ?></p>
							<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>" class="arrow-link post-link">Read more</a>
						</div>
					<?php endif; ?>
				</section>
			</article>
		</div>
	<?php endwhile; ?>
</div>
<?php else : ?>

	<div class="row">
		<div class="col md:col--10 md:offset-2">
			
			<p>No posts.</p>

		</div>
	</div>  

<?php endif; ?>
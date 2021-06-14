<?php get_header(); ?>

<section class="section section--red">
    <div class="container">

        <div class="row">
            <div class="col md:col--9 md:offset-3">
                <h1 class="font-size-display2"><?php single_post_title(); ?></h1>
            </div>
        </div>  

    </div>
</section>

<section class="section section--off-white">
  <div class="container">
    <?php get_template_part('template-parts/post-list'); ?> 
  </div>
</section>

<section class="section section--off-white">
    <div class="container">
      <!--<div class="navigation">
        <div class="alignleft">
          <?php next_posts_link('<i class="fas fa-chevron-left fa-fw"></i> Older') ?>
        </div>
        <div class="alignright">
          <?php previous_posts_link('Newer <i class="fas fa-chevron-right fa-fw"></i>') ?>
        </div>
      </div>-->
      <?php //erango_numeric_posts_nav(); ?>
    </div>
</section>

<!--<section class="section section--white">
  <div class="container">
      <h3>Calender</h3>
      <?php get_calendar(); ?>
      <h3>Categories</h3>
      <?php wp_list_categories('title_li=0'); ?>
      
      <h3>Tags</h3>
      <?php wp_tag_cloud(); ?>
      
      <h3>Archives</h3>
      <?php wp_get_archives('type=monthly'); ?>
      <h3>Authors</h3>
      <?php wp_list_authors('exclude_admin=0&optioncount=1&show_fullname=1&hide_empty=1'); ?> 
    
      <div class="sub-menu">
        <?php
        if($post->post_parent)
        $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
        else
        $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
        if ($children) { ?>
        <ul>
          <?php echo $children; ?>
        </ul>
        <?php } ?>
        <?php get_search_form(); ?>
        <?php wp_list_bookmarks(); ?>
        <?php wp_meta(); ?>
        <h3>Feeds</h3>
        <ul class="feeds">
    <li><a href="<?php bloginfo('rss2_url'); ?>" title="<?php _e('Syndicate this site using RSS'); ?>"><?php _e('<abbr title="Really Simple Syndication">RSS</abbr>'); ?></a></li>
    <li><a href="<?php bloginfo('atom_url'); ?>" title="<?php _e('Syndicate this site using Atom'); ?>"><?php _e('Atom'); ?></a></li>
    <li><a href="<?php bloginfo('comments_rss2_url'); ?>" title="<?php _e('The latest comments to all posts in RSS'); ?>"><?php _e('Comments <abbr title="Really Simple Syndication">RSS</abbr>'); ?></a></li>
</ul>
      </div>
  </div>
</section>-->

<?php get_footer(); ?>
<section class="section section--white">
	<div class="container">

        <div class="row">
            <div class="col md:col--2">
                <ul class="categories">
                    <li class="cat-item<?php if(!is_archive()) { echo ' current-cat'; } ?>"><a href="<?php echo get_post_type_archive_link('post'); ?>">All Posts</a></li>
                </ul>
            </div>
            <div class="col md:col--7 md:offset-1">
                <ul class="categories">
                    <?php wp_list_categories('title_li=0&hide_empty=0'); ?>
                </ul>
            </div>
        </div>
        <div class="row margin-top-4">
            <div class="col md:col--2 md:offset-3">
                <?php wp_tag_cloud(); ?>
            </div>
        </div>

    </div>
</section>
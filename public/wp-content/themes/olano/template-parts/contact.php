<div class="row align-items-center">
    <figure class="col md:col--5 md:offset-1 md:order-2">
        <img loading="lazy" src="<?php echo bloginfo('template_directory'); ?>/assets/img/contact-us.svg">
    </figure>
    <div class="col md:col--3 md:offset-2 md:order-1">
        <?php if(is_home()) { ?>
        <h2 class="">Contact us.</h2>
        <?php } else { ?>
        <h1 class="">Contact us.</h1>
        <?php } ?>
        <ul class="contact-block__list">
            <li class="contact-block__list__item contact-block__list__item--email">
                info@olano.co.uk
            </li>
            <li class="contact-block__list__item contact-block__list__item--phone">
                07713 255 404
            </li>
            <li class="contact-block__list__item contact-block__list__item--address">
                Unit 8<br>
                Europa Green<br>
                Sheffield Business Park<br>
                Sheffield<br>
                S9 1XH
            </li>
        </ul>
    </div>
</div>
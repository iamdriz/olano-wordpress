<div class="row align-items-center">
    <figure class="col md:col--5 md:offset-1 md:order-2">
        <img loading="lazy" src="<?php echo bloginfo('template_directory'); ?>/assets/img/contact-us.svg">
    </figure>
    <div class="col md:col--3 md:offset-2 md:order-1">
        <?php if(is_home()) { ?>
        <h2 class="font-size-display4">Contact us.</h2>
        <?php } else { ?>
        <h1 class="font-size-display1">Contact us.</h1>
        <?php } ?>
        <ul class="contact-list">
            <li class="contact-list-item contact-list-item--email">
                <a href="mailto:info@olano.co.uk">info@olano.co.uk</a>
            </li>
            <li class="contact-list-item contact-list-item--phone">
                <a href="tel:07713255404">07713 255 404</a>
            </li>
            <li class="contact-list-item contact-list-item--address">
                Unit 8<br>
                Europa Green<br>
                Sheffield Business Park<br>
                Sheffield<br>
                S9 1XH
            </li>
        </ul>
    </div>
</div>
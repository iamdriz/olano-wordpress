<?php get_header(); ?>

    <section class="section section--masthead">
        <div class="section__inner container">

            <div class="masthead">
                <div class="masthead__left">
                    <h1>Relevant training, meaningful results.</h1>
                    <p style="font-size:20px;">This is what we love to create! Click through the characters on the right to see how.</p>
                </div>
                <div class="masthead__right">
                    <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/masthead.svg">
                    <a class="pulse">
                        <span class="pulse__inner tooltip bottom" data-tooltip="Lorem ipsum dolor sit, amet consectetur adipisicing elit.">+</span>
                    </a>
                    <a class="pulse">
                        <span class="pulse__inner tooltip left" data-tooltip="Lorem ipsum dolor sit, amet consectetur adipisicing elit.">+</span>
                    </a>
                    <a class="pulse">
                        <span class="pulse__inner tooltip right" data-tooltip="Lorem ipsum dolor sit, amet consectetur adipisicing elit.">+</span>
                    </a>
                </div>
            </div>
            
        </div>
    </section>

    <section id="video" class="section section--video">
        <div class="container">
            <div class="element">
                <iframe width="1920" height="1080" src="https://www.youtube.com/embed/Koj3N4cupNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>

    <section id="services" class="section section--off-white section--pattern">
        <div class="container">

            <div class="section__header">
                <h2>Our services</h2>
                <p>We regonise you might have your own ways of working, or are looking for something specific. That's great!
                     If however, you are unsure, and want to explore your options,
                      please take a look at the services we provide below and our team will explain how each one might be right for you.</p>
            </div>

            <div class="services">
                <div class="services-list-item">
                    <div class="services-list-item__icon">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/services/Blue.svg">
                    </div>
                    <h3 class="services-list-item__title">Bespoke elearning</h3>
                    <a class="arrow-link" href="#">Explore more</a>
                </div>
                <div class="services-list-item">
                    <div class="services-list-item__icon">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/services/Green.svg">
                    </div>
                    <h3 class="services-list-item__title">Classroom &amp; virtual</h3>
                    <a class="arrow-link" href="#">Explore more</a>
                </div>
                <div class="services-list-item">
                    <div class="services-list-item__icon">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/services/Red.svg">
                    </div>
                    <h3 class="services-list-item__title">Explainer videos</h3>
                    <a class="arrow-link" href="#">Explore more</a>
                </div>
                <div class="services-list-item">
                    <div class="services-list-item__icon">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/services/Yellow.svg">
                    </div>
                    <h3 class="services-list-item__title">Content development</h3>
                    <a class="arrow-link" href="#">Explore more</a>
                </div>
            </div>

            <div class="wp-block-buttons is-content-justification-center">
                <div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-orange-background-color has-background" href="">Full list</a></div>
            </div>

        </div>
    </section>

    <section id="testimonials" class="section section--yellow">
        <div class="container">
            
            <div class="section__header">
                <h2>Testimonials</h2>
            </div>

            <div class="testimonials">
                <div class="testimonial">
                    <div class="testimonial__photo">
                        <img src="https://picsum.photos/640/640">
                    </div>
                    <div class="testimonial__content">
                        <p class="testimonial__quote">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis repellendus eum doloremque laudantium harum voluptatibus deserunt, iste non consequuntur provident quae nobis dolor! Perferendis odio autem ex dolores itaque."</p>
                        <div class="testimonial__author">
                            <p class="testimonial__author__name">John Doe</p>
                            <p class="testimonial__author__title">Jobtitle goes here</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial">
                    <div class="testimonial__photo">
                        <img src="https://picsum.photos/640/640">
                    </div>
                    <div class="testimonial__content">
                        <p class="testimonial__quote">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis repellendus eum doloremque laudantium harum voluptatibus deserunt, iste non consequuntur provident quae nobis dolor! Perferendis odio autem ex dolores itaque."</p>
                        <div class="testimonial__author">
                            <p class="testimonial__author__name">John Doe</p>
                            <p class="testimonial__author__title">Jobtitle goes here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="client-logos">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/Clugston-01.svg">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/Haven-01.svg">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/Howdens-01.svg">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/Lavazza-01.svg">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/Muller-01.svg">
                <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/clients/NHS-01.svg">
                <!-- <img src="./clients/NSA-01.svg">
                <img src="./clients/O2-01.svg">
                <img src="./clients/Telefonica-01.svg">
                <img src="./clients/Vanderlande-01.svg">
                <img src="./clients/Vodafone-01.svg">
                <img src="./clients/Youngs-01.svg"> -->
            </div>

        </div>
    </section>

    <section id="contact" class="section section--red section--pattern">
        <div class="container">

            <div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile">
                <figure class="wp-block-media-text__media">
                    <img loading="lazy" src="<?php echo bloginfo('template_directory'); ?>/assets/img/contact-us.svg">
                </figure>
                <div class="wp-block-media-text__content">
                    <div class="section__header">
                        <h2>Contact us</h2>
                    </div>
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

        </div>
    </section>

<?php get_footer(); ?>
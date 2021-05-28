<?php get_header(); ?>

    <section class="section section--masthead">
        <div class="container">

            <div class="wp-block-columns are-vertically-aligned-center">
                <div class="wp-block-column" style="flex-basis:33.3%;">
                    <h1>Relevant training, meaningful results.</h1>
                    <p>This is what we love to create! Click through the characters on the right to see how.</p>
                </div>
                <div class="wp-block-column" style="flex-basis:66.6%;">
                    <div class="" style="position:relative">
                        <img src="<?php echo bloginfo('template_directory'); ?>/assets/img/masthead.svg">
                        <div class="tooltips">
                            <div class="tooltip" id="tooltip-1">
                                <a class="tooltip-pulse" href="#tooltip-1" data-tooltip-open>
                                    <i class="fas fa-plus fa-fw tooltip-pulse__icon"></i>
                                </a>
                                <div class="tooltip-bubble tooltip-bubble--bottom tooltip-bubble--left" aria-hidden="true">
                                    <div class="tooltip-bubble__content">
                                        <p>Hey! At Olano, we always start a project by understanding what the purpose of the training is you would like.</p>
                                    </div>
                                    <div class="tooltip-bubble__arrows">
                                        <a class="tooltip-arrow" href="#tooltip-3" data-tooltip-open>
                                            <i class="fas fa-arrow-left fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                        <a class="tooltip-arrow" href="#tooltip-2" data-tooltip-open>
                                            <i class="fas fa-arrow-right fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                    </div>
                                    <a class="tooltip-bubble__close" data-tooltip-close>
                                        <i class="fas fa-times fa-fw tooltip-bubble__close__icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="tooltip" id="tooltip-2">
                                <a class="tooltip-pulse" href="#tooltip-2" data-tooltip-open>
                                    <i class="fas fa-plus fa-fw tooltip-pulse__icon"></i>
                                </a>
                                <div class="tooltip-bubble tooltip-bubble--top tooltip-bubble--left" aria-hidden="true">
                                    <div class="tooltip-bubble__content">
                                        <p>We then like to discuss the criteria needed for your project to be a success.</p>
                                    </div>
                                    <div class="tooltip-bubble__arrows">
                                        <a class="tooltip-arrow" href="#tooltip-1" data-tooltip-open>
                                            <i class="fas fa-arrow-left fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                        <a class="tooltip-arrow" href="#tooltip-3" data-tooltip-open>
                                            <i class="fas fa-arrow-right fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                    </div>
                                    <a class="tooltip-bubble__close" data-tooltip-close>
                                        <i class="fas fa-times fa-fw tooltip-bubble__close__icon"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="tooltip" id="tooltip-3">
                                <a class="tooltip-pulse" href="#tooltip-3" data-tooltip-open>
                                    <i class="fas fa-plus fa-fw tooltip-pulse__icon"></i>
                                </a>
                                <div class="tooltip-bubble tooltip-bubble--top tooltip-bubble--right" aria-hidden="true">
                                    <div class="tooltip-bubble__content">
                                        <p>Once we have understood all your needs, our journey to creating your bespoke training programme begins. Scroll down to watch a short clip of what this may look like.</p>
                                    </div>
                                    <div class="tooltip-bubble__arrows">
                                        <a class="tooltip-arrow" href="#tooltip-2" data-tooltip-open>
                                            <i class="fas fa-arrow-left fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                        <a class="tooltip-arrow" href="#tooltip-1" data-tooltip-open>
                                            <i class="fas fa-arrow-right fa-fw tooltip-arrow__icon"></i>
                                        </a>
                                    </div>
                                    <a class="tooltip-bubble__close" data-tooltip-close>
                                        <i class="fas fa-times fa-fw tooltip-bubble__close__icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="video">
                <iframe width="1920" height="1080" src="https://www.youtube.com/embed/Koj3N4cupNE" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
    </section>

    <section id="services" class="section section--off-white section--pattern">
        <div class="container">

            <div class="section-header">
                <h2 class="section-header__title">Our services</h2>
                <p class="section-header__subtitle">We regonise you might have your own ways of working, or are looking for something specific. That's great!
                     If however, you are unsure, and want to explore your options,
                      please take a look at the services we provide below and our team will explain how each one might be right for you.</p>
            </div>

            <?php get_template_part('template-parts/services'); ?>

            <div class="wp-block-buttons is-content-justification-center">
                <div class="wp-block-button is-style-fill">
                    <a class="wp-block-button__link has-orange-background-color has-background" href="<?php echo bloginfo('home'); ?>/services">Full list</a>
                </div>
            </div>

        </div>
    </section>

    <section id="testimonials" class="section section--yellow">
        <div class="container">
            
            <div class="section-header">
                <h2 class="section-header__title">Testimonials</h2>
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

            <?php get_template_part('template-parts/contact'); ?>

        </div>
    </section>

<?php get_footer(); ?>
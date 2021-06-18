(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.__experimentalUseInnerBlocksProps;

    blocks.registerBlockType('olano/olano-home-testimonials-list-block', {
        apiVersion: 2,
        title: 'Home Testimonials List Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit: function(props) {

            const blockProps = useBlockProps( { className: 'testimonials' } );
            const innerBlocksProps = useInnerBlocksProps( useBlockProps( { className: 'testimonials-list' } ),
             { allowedBlocks: ['olano/olano-home-testimonials-list-item-block'], orientation: 'horizontal' } );
            
            return el('div', { ...blockProps },
                el('div', { ...innerBlocksProps }),
                el('div', { className: 'testimonial-arrows' },
                    el('a', { className: 'testimonial-arrow' },
                        el('i', { className: 'far fa-arrow-left fa-fw testimonial-arrow__icon'})
                    ),
                    el('a', { className: 'testimonial-arrow' },
                        el('i', { className: 'far fa-arrow-right fa-fw testimonial-arrow__icon'})
                    )
                )
            )
        },
        save: function(props) {
            return el('div', { className: 'testimonials' },
                el('div', { className: 'testimonials-list' },
                    el(InnerBlocks.Content)
                ),
                el('div', { className: 'testimonial-arrows' },
                        el('a', { className: 'testimonial-arrow' },
                            el('i', { className: 'far fa-arrow-left fa-fw testimonial-arrow__icon'})
                        ),
                        el('a', { className: 'testimonial-arrow' },
                            el('i', { className: 'far fa-arrow-right fa-fw testimonial-arrow__icon'})
                        )
                )
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
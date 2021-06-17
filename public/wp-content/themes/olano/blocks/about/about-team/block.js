(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.__experimentalUseInnerBlocksProps;

    blocks.registerBlockType('olano/olano-about-team-block', {
        apiVersion: 2,
        title: 'About Team Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit: function(props) {

            const blockProps = useBlockProps( { className: 'staff-list' } );
            const innerBlocksProps = useInnerBlocksProps( blockProps, { allowedBlocks: ['olano/olano-about-team-item-block'] } );
            
            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                    el('h2', { className: 'font-size-h4 border-top' }, 'The Olano team')
                ),
                el('div', { className: 'col md:col--9 md:offset-1'},
                    el('div', { ...blockProps },
                        el(InnerBlocks, { ...innerBlocksProps })
                    )
                )
            )
        },
        save: function(props) {
            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                    el('h2', { className: 'font-size-h4 border-top' }, 'The Olano team')
                ),
                el('div', { className: 'col md:col--9 md:offset-1'},
                    el('div', { className: 'staff-list' },
                        el(InnerBlocks.Content)
                    )
                )
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
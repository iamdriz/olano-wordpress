(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.__experimentalUseInnerBlocksProps;

    blocks.registerBlockType('olano/olano-work-case-studies-block', {
        apiVersion: 2,
        title: 'Work Case Studies Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit: function(props) {

            const blockProps = useBlockProps( { className: '' } );
            const innerBlocksProps = useInnerBlocksProps( useBlockProps( { className: 'work-case-studies' } ),
             { allowedBlocks: ['olano/olano-work-case-studies-item-block'], orientation: 'vertical' } );
            
            return el('div', { ...blockProps },
                el('div', { ...innerBlocksProps })
            )
        },
        save: function(props) {
            return el('div', { className: 'work-case-studies' },
                el(InnerBlocks.Content)
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
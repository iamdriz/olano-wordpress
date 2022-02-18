(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.useInnerBlocksProps;

    blocks.registerBlockType('olano/olano-services-list-block', {
        apiVersion: 2,
        title: 'Services List Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit: function(props) {

            const blockProps = useBlockProps( { className: 'services-list' } );
            const innerBlocksProps = useInnerBlocksProps( blockProps,
             { allowedBlocks: ['olano/olano-services-list-item-block'], orientation: 'horizontal' } );
            
            return el('div', { ...innerBlocksProps })
        },
        save: function(props) {
            return el('div', { className: 'services-list' },
                el(InnerBlocks.Content)
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
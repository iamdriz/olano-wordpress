(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.__experimentalUseInnerBlocksProps;
    var RichText = blockEditor.RichText;

    blocks.registerBlockType('olano/olano-about-team-block', {
        apiVersion: 2,
        title: 'About Team Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
                default: 'Enter title.',
			},
        },
        edit: function(props) {

            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }

            const blockProps = useBlockProps( { className: 'row' } );
            const innerBlocksProps = useInnerBlocksProps( useBlockProps( { className: 'staff-list' } ),
             { allowedBlocks: ['olano/olano-about-team-item-block'], orientation: 'horizontal' } );
            
            return el('div', { ...blockProps },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                    el( RichText, {
                        tagName: 'h2',
                        className: 'font-size-h4 border-top',
                        onChange: onChangeTitle,
                        value: props.attributes.title,
                    } )
                ),
                el('div', { className: 'col md:col--9 md:offset-1'},
                    el('div', { ...innerBlocksProps })
                )
            )
        },
        save: function(props) {
            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                el( RichText.Content, {
                    tagName: 'h2',
                    className: 'font-size-h4 border-top',
                    value: props.attributes.title,
                } )
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
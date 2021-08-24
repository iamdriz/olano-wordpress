(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;

    blocks.registerBlockType('olano/olano-work-header-block', {
        title: 'Work Header Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h1',
                default: 'Enter title.',
			}
        },
        edit: function(props) {

            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }

            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--9 md:offset-3'},
                    el( RichText, {
                        tagName: 'h1',
                        className: 'font-size-display2',
                        onChange: onChangeTitle,
                        value: props.attributes.title,
                    } )
                ),
            )
        },
        save: function(props) {
            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--9 md:offset-3'},
                    el( RichText.Content, {
                        tagName: 'h1',
                        className: 'font-size-display2',
                        value: props.attributes.title,
                    } )
                ),
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
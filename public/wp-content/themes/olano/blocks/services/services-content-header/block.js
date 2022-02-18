(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;

    blocks.registerBlockType('olano/olano-services-content-header-block', {
        title: 'Services Content Header Block',
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
            content: {
				type: 'array',
				source: 'children',
				selector: 'p',
                default: 'Enter content.',
			},
        },
        edit: function(props) {

            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }

            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--7'},
                    el( RichText, {
                        tagName: 'h2',
                        className: 'has-display-3-font-size',
                        onChange: onChangeTitle,
                        value: props.attributes.title,
                    } ),
                    el( RichText, {
                        tagName: 'p',
                        className: 'font-size-xl',
                        onChange: onChangeContent,
                        value: props.attributes.content,
                    } )
                ),
            )
        },
        save: function(props) {
            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--7'},
                    el( RichText.Content, {
                        tagName: 'h2',
                        className: 'has-display-3-font-size',
                        value: props.attributes.title,
                    } ),
                    el( RichText.Content, {
                        tagName: 'p',
                        className: 'font-size-xl',
                        value: props.attributes.content,
                    } )
                ),
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
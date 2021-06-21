(function (blocks, element, blockEditor, editor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
	var MediaUpload = blockEditor.MediaUpload;

    blocks.registerBlockType('olano/olano-service-header-block', {
        title: 'Service Header Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h1',
                default: 'Enter title.',
			},
            content: {
				type: 'array',
				source: 'children',
				selector: 'p',
                default: 'Enter content.'
			},
            mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
		},
        edit: function (props) {
            var title = props.attributes.title;
            var content = props.attributes.content;
            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }
            function onSelectImage(media) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				});
			};
            
            return el(
                'div', { className: 'row' },
                    el('div', { className: 'col col--6 offset-3 md:col--2 md:offset-1' },
                        el('figure', { className: '' },
                            el( MediaUpload, {
                                onSelect: onSelectImage,
                                allowedTypes: 'image',
                                value: props.attributes.mediaID,
                                render: function( obj ) {
                                    return el(
                                        components.Button,
                                        {
                                            className: props.attributes.mediaID
                                                ? 'button button-large'
                                                : 'button button-large',
                                            onClick: obj.open,
                                        },
                                        ! props.attributes.mediaID
                                            ? 'Upload Image'
                                            : 'Edit Image'
                                    );
                                },
                            } ),
                            (props.attributes.mediaID ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                        )
                    ),
                    el('div', { className: 'col md:col--7' },
                        el( RichText, {
                            tagName: 'h1',
                            className: 'font-size-display2',
                            onChange: onChangeTitle,
                            value: title,
                        } ),
                        el( RichText, {
                            tagName: 'p',
                            className: 'font-size-lg',
                            onChange: onChangeContent,
                            value: content,
                        } )
                    ),
                );
        },
        save: function (props) {
            return el(
                'div', { className: 'row' },
                    el('div', { className: 'col col--6 offset-3 md:col--2 md:offset-1' },
                        el('figure', { className: '' },
                            (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                        )
                    ),
                    el('div', { className: 'col md:col--7' },
                        el( RichText.Content, {
                            tagName: 'h1',
                            className: 'font-size-display2',
                            value: props.attributes.title,
                        } ),
                        el( RichText.Content, {
                            tagName: 'p',
                            className: 'font-size-lg',
                            value: props.attributes.content,
                        } )
                    ),
            );
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
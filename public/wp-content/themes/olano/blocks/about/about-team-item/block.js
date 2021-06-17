(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
    var RichText = blockEditor.RichText;
    var MediaUpload = blockEditor.MediaUpload;

    blocks.registerBlockType('olano/olano-about-team-item-block', {
        apiVersion: 2,
        parent: ['olano/olano-about-team-block'],
        title: 'About Team Item Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            name: {
                type: 'array',
                source: 'children',
                selector: 'h3',
                default: 'Enter name.',
            },
            title: {
                type: 'array',
                source: 'children',
                selector: 'p',
                default: 'Enter title.',
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
        edit: function(props) {
            function onChangeName( newName ) {
                props.setAttributes( { name: newName } );
            }
            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }
            function onSelectImage(media) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				});
			};

            return el('div', { className: 'staff-list-item' },
                el('div', { className: 'staff-list-item__content'},
                    el( RichText, {
                        tagName: 'h3',
                        className: 'staff-list-item__name',
                        value: props.attributes.name,
                        onChange: onChangeName,
                    } ),
                    el( RichText, {
                        tagName: 'p',
                        className: 'staff-list-item__title',
                        value: props.attributes.title,
                        onChange: onChangeTitle,
                    } )
                ),
                el('div', { className: 'staff-list-item__photo' },
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
            )
        },
        save: function(props) {
            return el('div', {
                    className: 'staff-list-item'
                },
                el('div', { className: 'staff-list-item__content'},
                    el( RichText.Content, {
                        tagName: 'h3',
                        className: 'staff-list-item__name',
                        value: props.attributes.name,
                    } ),
                    el( RichText.Content, {
                        tagName: 'p',
                        className: 'staff-list-item__title',
                        value: props.attributes.title,
                    } )
                ),
                el('div', { className: 'staff-list-item__photo' },
                    (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                )
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
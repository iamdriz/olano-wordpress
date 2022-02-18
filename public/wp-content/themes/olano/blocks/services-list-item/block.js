(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
    var MediaUpload = blockEditor.MediaUpload;
    var useBlockProps = blockEditor.useBlockProps;

    const { InspectorControls, BlockControls } = editor;
	const { Fragment } = element;
	const {
        TextControl,
        CheckboxControl,
        RadioControl,
        SelectControl,
        TextareaControl,
        ToggleControl,
        RangeControl,
        Panel,
        PanelBody,
        PanelRow
    } = components;

    blocks.registerBlockType('olano/olano-services-list-item-block', {
        apiVersion: 2,
        parent: ['olano/olano-services-list-block'],
        title: 'Services List Item Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: 'h3',
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
            href: {
                type: 'string'
            }
        },
        edit: function(props) {
            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }
            function onSelectImage(media) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				});
			};

            const blockProps = useBlockProps( { className: 'services-list-item' } );

            return (
                el( Fragment, {},

                    /*  
                     * SETTINGS
                     */
                    el( InspectorControls, {},
                        el( PanelBody, { title: 'Services List Item Settings', initialOpen: true },
         
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'href',
                                        onChange: ( value ) => {
                                            props.setAttributes( { href: value } );
                                        },
                                        value: props.attributes.href
                                    }
                                ),
                            ),

                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { ...blockProps },
                        el('div', { className: 'services-list-item__icon' },
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
                        ),
                        el('div', { className: 'services-list-item__content'},
                            el( RichText, {
                                tagName: 'h3',
                                className: 'services-list-item__title',
                                value: props.attributes.title,
                                onChange: onChangeTitle,
                            } ),
                            el('div', { className: 'arrow-link' },
                                'Explore more'
                            )
                        ),
                    )
            ));
        },
        save: function(props) {
            return el('a', {
                    className: 'services-list-item',
                    href: props.attributes.href
                },
                el('div', { className: 'services-list-item__icon' },
                    (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                ),
                el('div', { className: 'services-list-item__content'},
                    el( RichText.Content, {
                        tagName: 'h3',
                        className: 'services-list-item__title',
                        value: props.attributes.title,
                    } ),
                    el('div', { className: 'arrow-link' },
                        'Explore more'
                    )
                ),
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
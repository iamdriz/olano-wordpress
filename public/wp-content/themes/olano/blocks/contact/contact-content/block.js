(function (blocks, element, blockEditor, editor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
	var MediaUpload = blockEditor.MediaUpload;

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

    blocks.registerBlockType('olano/olano-contact-content-block', {
        title: 'Contact Content Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            email: {
                type: 'string',
                default: 'Enter content.'
            },
            phone: {
                type: 'string',
                default: 'Enter content.'
            },
            address: {
                type: 'string',
                default: 'Enter content.'
            },
            title: {
				type: 'array',
				source: 'children',
				selector: 'h1',
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
        edit: function (props) {

            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }
            function onSelectImage(media) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				});
			};

            return (
                el( Fragment, {},

                    /*  
                     * SETTINGS
                     */
                    el( InspectorControls, {},
                        el( PanelBody, { title: 'Contact List Settings', initialOpen: true },
         
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'Email address',
                                        onChange: ( value ) => {
                                            props.setAttributes( { email: value } );
                                        },
                                        value: props.attributes.email
                                    }
                                ),
                            ),
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'Phone number',
                                        onChange: ( value ) => {
                                            props.setAttributes( { phone: value } );
                                        },
                                        value: props.attributes.phone
                                    }
                                ),
                            ),
                            el( PanelRow, {},
                                el( TextareaControl,
                                    {
                                        label: 'Address',
                                        onChange: ( value ) => {
                                            props.setAttributes( { address: value } );
                                        },
                                        value: props.attributes.address
                                    }
                                ),
                            ),

                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { className: 'row align-items-center' },
                        el('div', { className: 'col md:col--5 md:offset-1 md:order-2'},
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
                        el('div', { className: 'col md:col--3 md:offset-2 md:order-1'},
                            el( RichText, {
                                tagName: 'h1',
                                className: 'font-size-display2',
                                onChange: onChangeTitle,
                                value: props.attributes.title,
                            } ),
                            el('ul', { className: 'contact-list' },
                                el('li', { className: 'contact-list-item contact-list-item--email'},
                                    props.attributes.email
                                ),
                                el('li', { className: 'contact-list-item contact-list-item--phone'},
                                    props.attributes.phone
                                ),
                                el('li', { className: 'contact-list-item contact-list-item--address'},
                                    props.attributes.address
                                )
                            )
                        )
                    )
                ))
        },
        save: function (props) {

            return el('div', { className: 'row align-items-center' },
                el('div', { className: 'col md:col--5 md:offset-1 md:order-2'},
                    el('figure', { className: '' },
                        (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                    )
                ),
                el('div', { className: 'col md:col--3 md:offset-2 md:order-1'},
                    el( RichText.Content, {
                        tagName: 'h1',
                        className: 'font-size-display2',
                        value: props.attributes.title,
                    } ),
                    el('ul', { className: 'contact-list' },
                        el('li', { className: 'contact-list-item contact-list-item--email'},
                            props.attributes.email
                        ),
                        el('li', { className: 'contact-list-item contact-list-item--phone'},
                            props.attributes.phone
                        ),
                        el('li', { className: 'contact-list-item contact-list-item--address'},
                            props.attributes.address
                        )
                    )
                )
            )
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
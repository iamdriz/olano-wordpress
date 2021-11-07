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

    blocks.registerBlockType('olano/olano-home-contact-block', {
        title: 'Home Contact Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            email: {
                type: 'string',
                default: 'Enter content.'
            },
            email_href: {
                type: 'string',
                default: ''
            },
            phone: {
                type: 'string',
                default: 'Enter content.'
            },
            phone_href: {
                type: 'string',
                default: ''
            },
            address: {
                type: 'string',
                default: 'Enter content.'
            },
            title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
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
                                        label: 'Email address href',
                                        onChange: ( value ) => {
                                            props.setAttributes( { email_href: value } );
                                        },
                                        value: props.attributes.email_href
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
                                el( TextControl,
                                    {
                                        label: 'Phone number href',
                                        onChange: ( value ) => {
                                            props.setAttributes( { phone_href: value } );
                                        },
                                        value: props.attributes.phone_href
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
                        el('div', { className: 'col md:col--3 md:offset-2 margin-bottom-4 md:margin-bottom-0'},
                            el( RichText, {
                                tagName: 'h2',
                                className: 'font-size-display4',
                                onChange: onChangeTitle,
                                value: props.attributes.title,
                            } ),
                            el('ul', { className: 'contact-list' },
                                el('li', { className: 'contact-list-item contact-list-item--email'},
                                    el('a', { href: props.attributes.email_href }, props.attributes.email)
                                ),
                                el('li', { className: 'contact-list-item contact-list-item--phone'},
                                    el('a', { href: props.attributes.phone_href }, props.attributes.phone)
                                ),
                                el('li', { className: 'contact-list-item contact-list-item--address'},
                                    props.attributes.address
                                )
                            )
                        ),
                        el('div', { className: 'col md:col--5 md:offset-1'},
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
                        )
                    )
                ))
        },
        save: function (props) {

            return el('div', { className: 'row align-items-center' },
                el('div', { className: 'col md:col--3 md:offset-2 margin-bottom-4 md:margin-bottom-0'},
                    el( RichText.Content, {
                        tagName: 'h2',
                        className: 'font-size-display4',
                        value: props.attributes.title,
                    } ),
                    el('ul', { className: 'contact-list' },
                        el('li', { className: 'contact-list-item contact-list-item--email'},
                            el('a', { href: props.attributes.email_href }, props.attributes.email)
                        ),
                        el('li', { className: 'contact-list-item contact-list-item--phone'},
                            el('a', { href: props.attributes.phone_href }, props.attributes.phone)
                        ),
                        el('li', { className: 'contact-list-item contact-list-item--address'},
                            props.attributes.address
                        )
                    )
                ),
                el('div', { className: 'col md:col--5 md:offset-1'},
                    el('figure', { className: '' },
                        (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                    )
                )
            )
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
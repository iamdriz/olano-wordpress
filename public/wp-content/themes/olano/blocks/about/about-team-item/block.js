(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;
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
            bio: {
                type: 'string',
                default: 'Enter bio.'
            },
            fun_fact: {
                type: 'string'
            },
            spotify: {
                type: 'string'
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

            let spotify;
            if(props.attributes.spotify) {
                spotify = el('ul', { className: 'social-list' },
                            el('li', { className: 'social-list-item' },
                                el('a', { className: 'social-list-link social-list-link--green', href: props.attributes.spotify, target: '_blank', rel: 'noopener' },
                                    el('i', { className: 'fab fa-spotify fa-fw', ariaLabel: 'Spotify' })
                                )
                            )
                        );
            }

            const blockProps = useBlockProps( { className: 'staff-list-item' } );

            return(
                el( Fragment, {},

                /*  
                 * SETTINGS
                 */
                el( InspectorControls, {},
                    el( PanelBody, { title: 'About Team Settings', initialOpen: true },
     
                        el( PanelRow, {},
                            el( TextareaControl,
                                {
                                    label: 'Bio',
                                    onChange: ( value ) => {
                                        props.setAttributes( { bio: value } );
                                    },
                                    value: props.attributes.bio
                                }
                            ),
                        ),

                        el( PanelRow, {},
                            el( TextareaControl,
                                {
                                    label: 'Fun fact',
                                    onChange: ( value ) => {
                                        props.setAttributes( { fun_fact: value } );
                                    },
                                    value: props.attributes.fun_fact
                                }
                            ),
                        ),

                        el( PanelRow, {},
                            el( TextControl,
                                {
                                    label: 'Spotify href',
                                    onChange: ( value ) => {
                                        props.setAttributes( { spotify: value } );
                                    },
                                    value: props.attributes.spotify
                                }
                            ),
                        ),

                    ),
                ),
    
                /*  
                * BLOCK
                */
                el('div', { ...blockProps },
                    el('div', { className: 'staff-list-item__inner' },
                        el('div', { className: 'staff-list-item__front' },
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
                        ),
                        el('div', { className: 'staff-list-item__back'},
                            el('div', { className: 'staff-list-item__content'},
                                el('p', {}, props.attributes.bio),
                                (props.attributes.fun_fact ? el('p', {}, el('b', {}, 'Fun fact: '), props.attributes.fun_fact ) : ''),
                                (spotify ? spotify : '')
                            )
                        )
                    )
                )
            ))
        },
        save: function(props) {
            let spotify;
            if(props.attributes.spotify) {
                spotify = el('ul', { className: 'social-list' },
                            el('li', { className: 'social-list-item' },
                                el('a', { className: 'social-list-link social-list-link--green', href: props.attributes.spotify, target: '_blank', rel: 'noopener' },
                                    el('i', { className: 'fab fa-spotify fa-fw', ariaLabel: 'Spotify' })
                                )
                            )
                        );
            }
            return el('div', {
                    className: 'staff-list-item'
                },
                el('div', { className: 'staff-list-item__inner' },
                    el('div', { className: 'staff-list-item__front' },
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
                    ),
                    el('div', { className: 'staff-list-item__back'},
                        el('div', { className: 'staff-list-item__content'},
                            el('p', {}, props.attributes.bio),
                            (props.attributes.fun_fact ? el('p', {}, el('b', {}, 'Fun fact: '), props.attributes.fun_fact ) : ''),
                            (spotify ? spotify : '')
                        )
                    )
                )
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
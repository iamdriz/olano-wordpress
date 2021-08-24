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

    var tooltips = function(props) {
        return el('div', { className: 'tooltips'},
            el('div', { className: 'tooltip', id: 'tooltip-1' },
                el('a', { className: 'tooltip-pulse', href: '#tooltip-1', 'data-tooltip-open': '' },
                    el('i', { className: 'far fa-plus fa-fw tooltip-pulse__icon' })
                ),
                el('div', { className: 'tooltip-bubble tooltip-bubble--bottom tooltip-bubble--right' },
                    el('div', { className: 'tooltip-bubble__content' },
                        el('p', {}, props.attributes.tooltip1)
                    ),
                    el('div', { className: 'tooltip-bubble__arrows' },
                        el('a', { className: 'tooltip-arrow tooltip-arrow--disabled', href: '#tooltip-3', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-left fa-fw tooltip-arrow__icon' })
                        ),
                        el('a', { className: 'tooltip-arrow', href: '#tooltip-2', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-right fa-fw tooltip-arrow__icon' })
                        ),
                    ),
                    el('a', { className: 'tooltip-bubble__close', 'data-tooltip-close': '' },
                        el('i', { className: 'far fa-times fa-fw tooltip-bubble__close__icon' })
                    ),
                )
            ),
            el('div', { className: 'tooltip tooltip--disabled', id: 'tooltip-2' },
                el('a', { className: 'tooltip-pulse', href: '#tooltip-2', 'data-tooltip-open': '' },
                    el('i', { className: 'far fa-plus fa-fw tooltip-pulse__icon' })
                ),
                el('div', { className: 'tooltip-bubble tooltip-bubble--top tooltip-bubble--left' },
                    el('div', { className: 'tooltip-bubble__content' },
                        el('p', {}, props.attributes.tooltip2)
                    ),
                    el('div', { className: 'tooltip-bubble__arrows' },
                        el('a', { className: 'tooltip-arrow', href: '#tooltip-1', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-left fa-fw tooltip-arrow__icon' })
                        ),
                        el('a', { className: 'tooltip-arrow', href: '#tooltip-3', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-right fa-fw tooltip-arrow__icon' })
                        ),
                    ),
                    el('a', { className: 'tooltip-bubble__close', 'data-tooltip-close': '' },
                        el('i', { className: 'far fa-times fa-fw tooltip-bubble__close__icon' })
                    ),
                )
            ),
            el('div', { className: 'tooltip tooltip--disabled', id: 'tooltip-3' },
                el('a', { className: 'tooltip-pulse', href: '#tooltip-3', 'data-tooltip-open': '' },
                    el('i', { className: 'far fa-plus fa-fw tooltip-pulse__icon' })
                ),
                el('div', { className: 'tooltip-bubble tooltip-bubble--top tooltip-bubble--right' },
                    el('div', { className: 'tooltip-bubble__content' },
                        el('p', {}, props.attributes.tooltip3)
                    ),
                    el('div', { className: 'tooltip-bubble__arrows' },
                        el('a', { className: 'tooltip-arrow', href: '#tooltip-2', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-left fa-fw tooltip-arrow__icon' })
                        ),
                        el('a', { className: 'tooltip-arrow tooltip-arrow--disabled', href: '#tooltip-1', 'data-tooltip-open': '' },
                            el('i', { className: 'far fa-chevron-right fa-fw tooltip-arrow__icon' })
                        ),
                    ),
                    el('a', { className: 'tooltip-bubble__close', 'data-tooltip-close': '' },
                        el('i', { className: 'far fa-times fa-fw tooltip-bubble__close__icon' })
                    ),
                )
            )
        )
    }

    blocks.registerBlockType('olano/olano-home-masthead-block', {
        title: 'Home Masthead Block',
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
            tooltip1: {
                type: 'string',
                default: 'Enter content.'
            },
            tooltip2: {
                type: 'string',
                default: 'Enter content.'
            },
            tooltip3: {
                type: 'string',
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

            return (
                el( Fragment, {},

                    /*  
                     * SETTINGS
                     */
                    el( InspectorControls, {},
                        el( PanelBody, { title: 'Masthead Settings', initialOpen: true },
         
                            el( PanelRow, {},
                                el( TextareaControl,
                                    {
                                        label: 'Tooltip 1',
                                        onChange: ( value ) => {
                                            props.setAttributes( { tooltip1: value } );
                                        },
                                        value: props.attributes.tooltip1
                                    }
                                ),
                            ),
                            el( PanelRow, {},
                                el( TextareaControl,
                                    {
                                        label: 'Tooltip 2',
                                        onChange: ( value ) => {
                                            props.setAttributes( { tooltip2: value } );
                                        },
                                        value: props.attributes.tooltip2
                                    }
                                ),
                            ),
                            el( PanelRow, {},
                                el( TextareaControl,
                                    {
                                        label: 'Tooltip 3',
                                        onChange: ( value ) => {
                                            props.setAttributes( { tooltip3: value } );
                                        },
                                        value: props.attributes.tooltip3
                                    }
                                ),
                            ),

                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { className: 'row align-items-center' },
                        el('div', { className: 'col lg:col--4 margin-bottom-4 md:margin-bottom-0' },
                            el( RichText, {
                                tagName: 'h1',
                                className: 'font-size-display2',
                                onChange: onChangeTitle,
                                value: props.attributes.title,
                            } ),
                            el( RichText, {
                                tagName: 'p',
                                className: 'font-size-lg',
                                onChange: onChangeContent,
                                value: props.attributes.content,
                            } )
                        ),
                        el('div', { className: 'col lg:col--7 lg:offset-1'},
                            el('div', { className: 'the-o'},
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
                                ),
                                tooltips(props)
                            )
                        )
                    )
                ))
        },
        save: function (props) {

            return el('div', { className: 'row align-items-center' },
                el('div', { className: 'col lg:col--4 margin-bottom-4 md:margin-bottom-0' },
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
                el('div', { className: 'col lg:col--7 lg:offset-1'},
                    el('div', { className: 'the-o'},
                    el('figure', { className: '' },
                            (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                        ),
                        tooltips(props)
                    )
                )
            )
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
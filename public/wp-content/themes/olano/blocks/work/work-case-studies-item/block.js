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

    blocks.registerBlockType('olano/olano-work-case-studies-item-block', {
        apiVersion: 2,
        parent: ['olano/olano-work-case-studies-block'],
        title: 'Work Case Studies Item Block',
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
            case_study_href: {
                type: 'string',
                default: ''
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

            const blockProps = useBlockProps( { className: 'case-studies-item' } );

            
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
                                        label: 'Case study href',
                                        onChange: ( value ) => {
                                            props.setAttributes( { case_study_href: value } );
                                        },
                                        value: props.attributes.case_study_href
                                    }
                                ),
                            ),
                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { ...blockProps },
                        el('div', { className: 'case-studies-item__content'},
                            el( RichText, {
                                tagName: 'p',
                                className: 'case-studies-item__category',
                                value: props.attributes.title,
                                onChange: onChangeTitle,
                            } ),
                            el( RichText, {
                                tagName: 'h3',
                                className: 'case-studies-item__title',
                                value: props.attributes.name,
                                onChange: onChangeName,
                            } )
                        ),
                        el('div', { className: 'case-studies-item__photo' },
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
                ))
        },
        save: function(props) {
            return el('div', {
                    className: 'case-studies-item'
                },
                el('div', { className: 'case-studies-item__content'},
                    el( RichText.Content, {
                        tagName: 'p',
                        className: 'case-studies-item__category',
                        value: props.attributes.title,
                    } ),
                    el( RichText.Content, {
                        tagName: 'h3',
                        className: 'case-studies-item__title',
                        value: props.attributes.name,
                    } )
                ),
                el('div', { className: 'case-studies-item__photo' },
                    el('a', { href: props.attributes.case_study_href },
                        (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                    )
                )
            )
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
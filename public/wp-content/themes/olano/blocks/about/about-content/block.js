
(function (blocks, element, blockEditor, editor, components) {
    var el = element.createElement;
    const { RichText, InspectorControls, BlockControls } = editor;
	var MediaUpload = blockEditor.MediaUpload;
    var InnerBlocks = blockEditor.InnerBlocks;
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

    blocks.registerBlockType('olano/olano-about-content-block', {
        title: 'About Content Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
            mediaAlignment: {
                type: 'string',
                default: 'left',
            },
		},
        edit: function (props) {

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
                        el( PanelBody, { title: 'Section Settings', initialOpen: true },

                            el(PanelRow, {},
                                el( SelectControl,
                                    {
                                        label: 'Media Alignment',
                                        options : [
                                            { label: 'Left', value: 'left' },
                                            { label: 'Right', value: 'right' },
                                        ],
                                        onChange: ( value ) => {
                                            props.setAttributes( { mediaAlignment: value } );
                                        },
                                        value: props.attributes.mediaAlignment
                                    }
                                )
                            ),
                        )
                    ),     
            
                    /*  
                    * BLOCK
                    */
                    el(
                        'div', { className: 'row align-items-center margin-bottom-8' },
                            el('div', { className: props.attributes.mediaAlignment == 'left' ? 'col md:col--5 margin-bottom-4 md:margin-bottom-0' : 'col md:col--5 md:offset-1 md:order-2 margin-bottom-4 md:margin-bottom-0' },
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
                            el('div', { className: props.attributes.mediaAlignment == 'left' ? 'col md:col--6 md:offset-1' : 'col md:col--6' },
                                el(InnerBlocks),
                            ),
                        )
            ));
        },
        save: function (props) {
            return el(
                'div', { className: 'row align-items-center margin-bottom-8' },
                    el('div', { className: props.attributes.mediaAlignment == 'left' ? 'col md:col--5 margin-bottom-4 md:margin-bottom-0' : 'col md:col--5 md:offset-1 md:order-2 margin-bottom-4 md:margin-bottom-0' },
                        el('figure', { className: '' },
                            (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                        )
                    ),
                    el('div', { className: props.attributes.mediaAlignment == 'left' ? 'col md:col--6 md:offset-1' : 'col md:col--6' },
                        el(InnerBlocks.Content)
                    ),
            );
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
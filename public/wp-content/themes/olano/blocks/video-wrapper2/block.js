(function (blocks, element, blockEditor, editor, components) {
    var el = element.createElement;
    var RichText = blockEditor.RichText;
	var MediaUpload = blockEditor.MediaUpload;
    var InnerBlocks = blockEditor.InnerBlocks;
    var useBlockProps = blockEditor.useBlockProps;
    var useInnerBlocksProps = blockEditor.useInnerBlocksProps;

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

    blocks.registerBlockType('olano/olano-video-wrapper2-block', {
        title: 'Video Wrapper2 Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            video_wrapper_class: {
                type: 'string',
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
                        el( PanelBody, { title: 'Video Wrapper2 Settings', initialOpen: true },
         
                            el( PanelRow, {},
                                el( SelectControl,
                                    {
                                        label: 'Color',
                                        options : [
                                            { label: 'Red', value: 'video-wrapper--red' },
                                            { label: 'Blue', value: 'video-wrapper--blue' },
                                            { label: 'Yellow', value: 'video-wrapper--yellow' },
                                            { label: 'Green', value: 'video-wrapper--green' },
                                        ],
                                        onChange: ( value ) => {
                                            props.setAttributes( { video_wrapper_class: value } );
                                        },
                                        value: props.attributes.video_wrapper_class
                                    }
                                )
                            ),
                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { className: 'video-wrapper ' + props.attributes.video_wrapper_class },
                        el('div', { className: 'container'},
                            // el('figure', { className: 'video' },
                            //     el( MediaUpload, {
                            //         onSelect: onSelectImage,
                            //         allowedTypes: 'image',
                            //         value: props.attributes.mediaID,
                            //         render: function( obj ) {
                            //             return el(
                            //                 components.Button,
                            //                 {
                            //                     className: props.attributes.mediaID
                            //                         ? 'button button-large'
                            //                         : 'button button-large',
                            //                     onClick: obj.open,
                            //                 },
                            //                 ! props.attributes.mediaID
                            //                     ? 'Upload Image'
                            //                     : 'Edit Image'
                            //             );
                            //         },
                            //     } ),
                            //     (props.attributes.mediaID ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                            // )
                            
                            el(InnerBlocks)
                        ),
                    )
                ))
        },
        save: function (props) {

            return el('div', { className: 'video-wrapper ' + props.attributes.video_wrapper_class },
                el('div', { className: 'container'},
                    // el('figure', { className: 'video' },
                    //     (props.attributes.mediaURL ? el( 'img', { src: props.attributes.mediaURL } ) : el('div'))
                    // )
                    el(InnerBlocks.Content)
                ),
            )
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
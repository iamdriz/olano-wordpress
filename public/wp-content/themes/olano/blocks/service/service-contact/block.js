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

    blocks.registerBlockType('olano/olano-service-contact-block', {
        title: 'Service Contact Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        edit: function (props) {

            function onChangeTitle( newTitle ) {
                props.setAttributes( { title: newTitle } );
            }

            return (
                el( Fragment, {},

                    /*  
                     * SETTINGS
                     */
                    // el( InspectorControls, {},
                    //     el( PanelBody, { title: 'Contact Settings', initialOpen: true },
         
                    //         el( PanelRow, {},
                    //             el( TextControl,
                    //                 {
                    //                     label: 'Href',
                    //                     onChange: ( value ) => {
                    //                         props.setAttributes( { href: value } );
                    //                     },
                    //                     value: props.attributes.href
                    //                 }
                    //             ),
                    //         ),

                    //     ),
                    // ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { className: 'row' },
                        el('div', { className: 'col md:col--6 md:offset-3'},
                            el( 'h2', { className: 'font-size-display3' }, 'Tell us about your latest project' ),
                            el('div', { className: 'wp-block-buttons' },
                                el('div', { className: 'wp-block-button is-style-fill'},
                                    el('a', { className: 'wp-block-button__link has-white-background-color has-background', href: '/contact/' },
                                        el('i', { className: 'far fa-arrow-right fa-fw' })
                                    )
                                ),
                            ),
                        )
                    ),
                ))
        },
        save: function (props) {

            return (
                el( Fragment, {},
                    el('div', { className: 'row' },
                        el('div', { className: 'col md:col--6 md:offset-3'},
                            el( 'h2', { className: 'font-size-display3' }, 'Tell us about your latest project' ),
                            el('div', { className: 'wp-block-buttons' },
                                el('div', { className: 'wp-block-button is-style-fill'},
                                    el('a', { className: 'wp-block-button__link has-white-background-color has-background', href: '/contact/' },
                                        el('i', { className: 'far fa-arrow-right fa-fw' })
                                    )
                                ),
                            ),
                        )
                    ),
            ))
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);

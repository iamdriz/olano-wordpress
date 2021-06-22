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

    blocks.registerBlockType('olano/olano-service-links-block', {
        title: 'Service Links Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            case_study: {
                type: 'string',
                default: 'Case study'
            },
            case_study_href: {
                type: 'string',
                default: ''
            },
            next_service: {
                type: 'string',
                default: 'Next service'
            },
            next_service_href: {
                type: 'string',
                default: ''
            }
		},
        edit: function (props) {

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
                                        label: 'Case study',
                                        onChange: ( value ) => {
                                            props.setAttributes( { case_study: value } );
                                        },
                                        value: props.attributes.case_study
                                    }
                                ),
                            ),
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
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'Next service',
                                        onChange: ( value ) => {
                                            props.setAttributes( { next_service: value } );
                                        },
                                        value: props.attributes.next_service
                                    }
                                ),
                            ),
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'Next service href',
                                        onChange: ( value ) => {
                                            props.setAttributes( { next_service_href: value } );
                                        },
                                        value: props.attributes.next_service_href
                                    }
                                ),
                            ),

                        ),
                    ),
        
                    /*  
                    * BLOCK
                    */
                    el('div', { className: 'row align-items-center margin-top-8' },
                        el('div', { className: 'col md:col--3'},
                            el('div', { className: 'wp-block-buttons' },
                                el('div', { className: 'wp-block-button is-style-fill'},
                                    el('a', { className: 'wp-block-button__link has-yellow-background-color has-background', href: props.attributes.case_study_href },
                                        props.attributes.case_study
                                    )
                                ),
                            )
                        ),
                        el('div', { className: 'col md:col--4 md:text-align-right' },
                            el('a', { className: 'arrow-link', href: props.attributes.next_service_href},
                                props.attributes.next_service
                            )
                        )
                    )
                ))
        },
        save: function (props) {

            return el('div', { className: 'row align-items-center margin-top-8' },
                el('div', { className: 'col md:col--3'},
                    el('div', { className: 'wp-block-buttons' },
                        el('div', { className: 'wp-block-button is-style-fill'},
                            el('a', { className: 'wp-block-button__link has-yellow-background-color has-background', href: props.attributes.case_study_href },
                                props.attributes.case_study
                            )
                        ),
                    )
                ),
                el('div', { className: 'col md:col--4 md:text-align-right' },
                    el('a', { className: 'arrow-link', href: props.attributes.next_service_href},
                        props.attributes.next_service
                    )
                )
            )
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);

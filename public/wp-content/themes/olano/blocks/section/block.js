(function (blocks, element, blockEditor, editor, components) {
    var el = element.createElement;
    var InnerBlocks = blockEditor.InnerBlocks;

    const { RichText, InspectorControls, BlockControls } = editor;
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

    blocks.registerBlockType('olano/olano-section-block', {
        title: 'Section Block',
        description: 'Block-level sections to wrap content with coloured backgrounds.',
        icon: 'universal-access-alt',
        category: 'theme',
        styles: [
            {
                name: 'style1',
                label: 'Style 1',
                isDefault: true
            }, {
                name: 'style2',
                label: 'Style 2'
            }
        ],
        example: {},
        attributes: {
            section_id: {
                type: 'string',
            },
            section_class: {
                type: 'string',
            },
            section_pattern: {
                type: 'boolean',
                default: false
            },
            section_pattern_alternate: {
                type: 'boolean',
                default: false
            }
        },
        edit: function (props) {

            let pattern = props.attributes.section_pattern ? 'section--pattern' : '';
            if(props.attributes.section_pattern_alternate) pattern += ' section--pattern--alternate'

            return (
                el( Fragment, {},

                    /*  
                     * SETTINGS
                     */
                    el( InspectorControls, {},
                        el( PanelBody, { title: 'Section Settings', initialOpen: true },
         
                            el( PanelRow, {},
                                el( TextControl,
                                    {
                                        label: 'Section ID',
                                        onChange: ( value ) => {
                                            props.setAttributes( { section_id: value } );
                                        },
                                        value: props.attributes.section_id
                                    }
                                ),
                            ),

                            el(PanelRow, {},
                                el( SelectControl,
                                    {
                                        label: 'Section Color',
                                        options : [
                                            { label: 'Section White', value: 'section--white' },
                                            { label: 'Section Off White', value: 'section--off-white' },
                                            { label: 'Section Red', value: 'section--red' },
                                            { label: 'Section Blue', value: 'section--blue' },
                                            { label: 'Section Yellow', value: 'section--yellow' },
                                            { label: 'Section Green', value: 'section--green' },
                                        ],
                                        onChange: ( value ) => {
                                            props.setAttributes( { section_class: value } );
                                        },
                                        value: props.attributes.section_class
                                    }
                                )
                            ),

                            el(PanelRow, {},
                                el(ToggleControl, {
                                    label: 'Show Pattern?',
                                    onChange: (value) => {
                                        props.setAttributes( { section_pattern: value } );
                                    },
                                    checked: props.attributes.section_pattern
                                })
                            ),
                            el(PanelRow, {},
                                el(ToggleControl, {
                                    label: 'Alternate?',
                                    onChange: (value) => {
                                        props.setAttributes( { section_pattern_alternate: value } );
                                    },
                                    checked: props.attributes.section_pattern_alternate
                                })
                            )

                        ),
                    ),
        
                    /*  
                     * BLOCK
                     */
                    el(
                        'section', { className: 'section ' + props.attributes.section_class + ' ' + pattern + ' ' + props.className },
                        el('div', { className: 'container' },
                            el(InnerBlocks))
                    )
         
                ));
        },
        save: function (props) {
            let pattern = props.attributes.section_pattern ? 'section--pattern' : '';
            if(props.attributes.section_pattern_alternate) pattern += ' section--pattern--alternate'
            
            return el(
                'section', { className: 'section ' + props.attributes.section_class + ' ' + pattern + ' ' + props.className },
                el('div', { className: 'container' },
                    el(InnerBlocks.Content))
            );
        },
    });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.editor, window.wp.components);
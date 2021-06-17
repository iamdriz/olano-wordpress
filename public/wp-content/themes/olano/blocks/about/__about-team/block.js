(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var RichText = editor.RichText;
    var InnerBlocks = blockEditor.InnerBlocks;
    var MediaUpload = editor.MediaUpload;

    blocks.registerBlockType('olano/olano-about-team-block', {
        title: 'About Team Block',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            cards: {
                type: 'array',
                source: 'query',
                selector: '.staff-list-item',
                default: [],
                query: {
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
                        source: 'attribute',
                        attribute: 'data-id',
                        selector: 'img',
                    },
                    mediaURL: {
                        type: 'string',
                        source: 'attribute',
                        attribute: 'src',
                        selector: 'img',
                    },
                },
            },
        },
        edit: function(props) {

            function onAddCard() {
                cards = props.attributes.cards;
                cards.push({
                    name: 'Enter name.',
                    title: 'Enter title.'
                })
                props.setAttributes( {
					cards: cards
				});
            }

            function onChangeName(name) {
                console.log('name', name);
            }

            function onChangeTitle(title) {
                console.log('title', title);
            }

            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                    el('h2', { className: 'font-size-h4 border-top' }, 'The Olano team')
                ),
                el('div', { className: 'col md:col--9 md:offset-1'},
                    el('div', { className: 'staff-list' },
                        props.attributes.cards.map(item => {
                            return el('div', {
                                    className: 'staff-list-item'
                                },
                                el('div', { className: 'staff-list-item__content'},
                                    el( RichText, {
                                        tagName: 'h3',
                                        className: 'staff-list-item__name',
                                        onChange: onChangeName,
                                        value: item.name,
                                    } ),
                                    el( RichText, {
                                        tagName: 'p',
                                        className: 'staff-list-item__title',
                                        onChange: onChangeTitle,
                                        value: item.title,
                                    } )
                                ),
                                el('div', { className: 'staff-list-item__photo' },
                                    el('img', {
                                        src: item.mediaURL,
                                        'data-id': item.mediaID
                                    })
                                )
                            )
                        }),
                        el(components.Button, { className: 'button button-large', onClick: onAddCard }, 'Add Card')
                    )
                )
            )
        },
        save: function(props) {
            // if (props.attributes.images.length < 1 ) {
            //     return null;
            // }

            // return el('div', {
            //         className: 'slider'
            //     },
            //     props.attributes.images.map(item => {
            //         return el('div', {
            //                 className: 'slider-item'
            //             },
            //             el('img', {
            //                 src: item.mediaURL,
            //                 'data-id': item.mediaID
            //             })
            //         )
            //     })
            // );


            return el('div', { className: 'row' },
                el('div', { className: 'col md:col--2 md:text-align-right'},
                    el('h2', { className: 'font-size-h4 border-top' }, 'The Olano team')
                ),
                el('div', { className: 'col md:col--9 md:offset-1'},
                    el('div', { className: 'staff-list' },
                        props.attributes.cards.map(item => {
                            return el('div', {
                                    className: 'staff-list-item'
                                },
                                el('div', { className: 'staff-list-item__content'},
                                    el( RichText.Content, {
                                        tagName: 'h3',
                                        className: 'staff-list-item__name',
                                        value: item.name,
                                    } ),
                                    el( RichText.Content, {
                                        tagName: 'p',
                                        className: 'staff-list-item__title',
                                        value: item.title,
                                    } )
                                ),
                                el('div', { className: 'staff-list-item__photo' },
                                    el('img', {
                                        src: item.mediaURL,
                                        'data-id': item.mediaID
                                    })
                                )
                            )
                        }),
                    )
                )
            )

        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
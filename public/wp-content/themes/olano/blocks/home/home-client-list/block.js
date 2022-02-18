(function(blocks, editor, element, blockEditor, components) {
    var el = element.createElement;
    var MediaUpload = editor.MediaUpload;

    blocks.registerBlockType('olano/olano-home-client-list', {
        title: 'Home Client List',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
        attributes: {
            images: {
                type: 'array',
                source: 'query',
                selector: '.client-list-item',
                default: [],
                query: {
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
            function onSelectImages(items) {
                props.setAttributes({
                    images: items.map(item => {
                        return {
                            mediaID: parseInt(item.id, 10),
                            mediaURL: item.url
                        };
                    }),
                });
            };

            return el('div', { className: 'client-list' },
                    props.attributes.images.map(item => {
                        return el('div', {
                                className: 'client-list-item'
                            },
                            el('img', {
                                src: item.mediaURL,
                                'data-id': item.mediaID
                            })
                        )
                    }),
                    el(MediaUpload, {
                        onSelect: onSelectImages,
                        allowedTypes: 'image',
                        value: props.attributes.images.map(item => item.mediaID),
                        gallery: true,
                        multiple: true,
                        render: function(obj) {
                            return el(
                                components.Button, {
                                    className: props.attributes.images.length >= 1 ?
                                        'button button-large' :
                                        'button button-large',
                                    onClick: obj.open,
                                },
                                ! props.attributes.images.length >= 1
                                    ? 'Upload Images'
                                    : 'Edit Images'
                            );
                        },
                    }),
                )

        },
        save: function(props) {
            if (props.attributes.images.length < 1 ) {
                return null;
            }

            return el('div', {
                    className: 'client-list'
                },
                props.attributes.images.map(item => {
                    return el('div', {
                            className: 'client-list-item'
                        },
                        el('img', {
                            src: item.mediaURL,
                            'data-id': item.mediaID
                        })
                    )
                })
            );
        },
    });

})(window.wp.blocks, window.wp.editor, window.wp.element, window.wp.blockEditor, window.wp.components);
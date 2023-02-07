(function (blocks, editor, element, blockEditor, components) {
  var el = element.createElement;
  var InnerBlocks = blockEditor.InnerBlocks;
  var RichText = blockEditor.RichText;
  var MediaUpload = blockEditor.MediaUpload;
  var useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType("olano/olano-home-testimonials-list-item-block", {
    apiVersion: 2,
    parent: ["olano/olano-home-testimonials-list-item-block"],
    title: "Testimonials List Item Block",
    icon: "universal-access-alt",
    category: "layout",
    example: {},
    attributes: {
      quote: {
        type: "array",
        source: "children",
        selector: ".testimonials-list-item__quote",
        default: "Enter content.",
      },
      name: {
        type: "array",
        source: "children",
        selector: ".testimonials-list-item__name",
        default: "Enter name.",
      },
      title: {
        type: "array",
        source: "children",
        selector: ".testimonials-list-item__title",
        default: "Enter title.",
      },
      mediaID: {
        type: "number",
      },
      mediaURL: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
      },
    },
    edit: function (props) {
      function onChangeQuote(newQuote) {
        props.setAttributes({ quote: newQuote });
      }
      function onChangeName(newName) {
        props.setAttributes({ name: newName });
      }
      function onChangeTitle(newTitle) {
        props.setAttributes({ title: newTitle });
      }
      function onSelectImage(media) {
        return props.setAttributes({
          mediaURL: media.url,
          mediaID: media.id,
        });
      }

      const blockProps = useBlockProps({
        className: "testimonials-list-item row align-items-center",
      });

      return el(
        "div",
        { ...blockProps },
        el(
          "div",
          {
            className:
              "col md:col--3 testimonials-list-item__photo margin-bottom-4 md:margin-bottom-0",
          },
          el(MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: "image",
            value: props.attributes.mediaID,
            render: function (obj) {
              return el(
                components.Button,
                {
                  className: props.attributes.mediaID
                    ? "button button-large"
                    : "button button-large",
                  onClick: obj.open,
                },
                !props.attributes.mediaID ? "Upload Image" : "Edit Image"
              );
            },
          }),
          props.attributes.mediaID
            ? el("img", { src: props.attributes.mediaURL })
            : el("div")
        ),
        el(
          "div",
          { className: "col md:col--7 testimonials-list-item__content" },
          el(RichText, {
            tagName: "p",
            className: "testimonials-list-item__quote",
            value: props.attributes.quote,
            onChange: onChangeQuote,
          }),
          el(
            "div",
            { className: "testimonials-list-item__author" },
            el(RichText, {
              tagName: "p",
              className: "testimonials-list-item__name",
              value: props.attributes.name,
              onChange: onChangeName,
            }),
            el(RichText, {
              tagName: "p",
              className: "testimonials-list-item__title",
              value: props.attributes.title,
              onChange: onChangeTitle,
            })
          )
        )
      );
    },
    save: function (props) {
      return el(
        "div",
        {
          className: "testimonials-list-item row align-items-center",
        },
        el(
          "div",
          {
            className:
              "col md:col--3 testimonials-list-item__photo margin-bottom-4 md:margin-bottom-0",
          },
          props.attributes.mediaURL
            ? el("img", { src: props.attributes.mediaURL })
            : el("div")
        ),
        el(
          "div",
          { className: "col md:col--7 testimonials-list-item__content" },
          el(RichText.Content, {
            tagName: "p",
            className: "testimonials-list-item__quote",
            value: props.attributes.quote,
          }),
          el(
            "div",
            { className: "testimonials-list-item__author" },
            el(RichText.Content, {
              tagName: "p",
              className: "testimonials-list-item__name",
              value: props.attributes.name,
            }),
            el(RichText.Content, {
              tagName: "p",
              className: "testimonials-list-item__title",
              value: props.attributes.title,
            })
          )
        )
      );
    },
  });
})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.element,
  window.wp.blockEditor,
  window.wp.components
);

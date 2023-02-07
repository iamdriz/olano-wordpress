(function (blocks, editor, element, blockEditor, components) {
  var el = element.createElement;
  var RichText = blockEditor.RichText;

  blocks.registerBlockType("olano/olano-case-study-header-block", {
    title: "Case Study Header Block",
    icon: "universal-access-alt",
    category: "layout",
    example: {},
    attributes: {
      title: {
        type: "array",
        source: "children",
        selector: "h1",
        default: "Enter title.",
      },
      content: {
        type: "array",
        source: "children",
        selector: "p",
        default: "Enter content.",
      },
    },
    edit: function (props) {
      function onChangeTitle(newTitle) {
        props.setAttributes({ title: newTitle });
      }
      function onChangeContent(newContent) {
        props.setAttributes({ content: newContent });
      }

      return el(
        "div",
        { className: "row margin-bottom-8" },
        el(
          "div",
          { className: "col md:col--7 md:offset-3" },
          el(RichText, {
            tagName: "p",
            className: "border-top border-top--half margin-bottom-1",
            onChange: onChangeContent,
            value: props.attributes.content,
          }),
          el(RichText, {
            tagName: "h1",
            className: "font-size-display2",
            onChange: onChangeTitle,
            value: props.attributes.title,
          })
        )
      );
    },
    save: function (props) {
      return el(
        "div",
        { className: "row margin-bottom-8" },
        el(
          "div",
          { className: "col md:col--7 md:offset-3" },
          el(RichText.Content, {
            tagName: "p",
            className: "border-top border-top--half margin-bottom-1",
            value: props.attributes.content,
          }),
          el(RichText.Content, {
            tagName: "h1",
            className: "font-size-display2",
            value: props.attributes.title,
          })
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

(function (blocks, editor, element, blockEditor, components) {
  var el = element.createElement;
  var InnerBlocks = blockEditor.InnerBlocks;

  blocks.registerBlockType("olano/olano-case-study-content-block", {
    title: "Case Study Content Block",
    icon: "universal-access-alt",
    category: "layout",
    example: {},
    attributes: {},
    edit: function (props) {
      return el(
        "div",
        { className: "row margin-top-8" },
        el("div", { className: "col md:col--7 md:offset-3" }, el(InnerBlocks))
      );
    },
    save: function (props) {
      return el(
        "div",
        { className: "row margin-top-8" },
        el(
          "div",
          { className: "col md:col--7 md:offset-3" },
          el(InnerBlocks.Content)
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

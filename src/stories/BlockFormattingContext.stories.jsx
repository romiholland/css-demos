import "../index.css";

export function BlocksWithinBlocks() {
  return (
    <div>
      <div style={{ display: "block", border: "3px solid black" }}>
        Outer
        <div style={{ display: "block", border: "3px solid blue" }}>Inner</div>
      </div>
      <div style={{ display: "block", border: "3px solid red" }}>Outer 2</div>
    </div>
  );
}

export function WidthAutoVsWidth100Percent() {
  return (
    <div style={{ margin: "50px", border: "1px solid black" }}>
      Parent div has margin of 50px. Both children have margins of 50px
      <div
        style={{
          display: "block",
          border: "3px solid black",
          margin: "50px",
          width: "auto",
        }}
      >
        width: auto = Take up all remaining space in parent block
      </div>
      <div
        style={{
          display: "block",
          border: "3px solid red",
          margin: "50px",
          width: "100%",
        }}
      >
        width: 100% = Make width identical to parent width, then add margin (and
        border and padding if box-sizing: content-box)
      </div>
    </div>
  );
}

export function BoxSizingBorderBoxVsBoxSizingContentBox() {
  return (
    <div>
      Both children have padding of 50px, widths of 600px
      <div
        style={{
          display: "block",
          border: "3px solid black",
          padding: "50px",
          width: "600px",
          boxSizing: "border-box",
        }}
      >
        box-sizing: border-box = Total box size = width + margin (border and
        padding are rolled up into width)
      </div>
      <div
        style={{
          display: "block",
          border: "3px solid red",
          padding: "50px",
          width: "600px",
          boxSizing: "content-box",
        }}
      >
        box-sizing: content-box = Total box size = width + margin + border +
        padding
      </div>
    </div>
  );
}

export function HeightAndLineHeight() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <span style={{ border: "1px solid green", lineHeight: "40px" }}>
          line-height: 40px
        </span>
        height: auto of a block is equal to the sum of the heights of all its
        contained lines and the height of a contained line is equal to maximum
        height of its inline elements
        <span style={{ border: "1px solid red", margin: "20px" }}>
          Margin only affects x axis
        </span>
        <span style={{ border: "1px solid blue", padding: "20px" }}>
          Padding affects both axes, but does not change line-height
        </span>
        Some more text
        <span style={{ border: "1px solid orange", height: "100px" }}>
          Height has no effect on inline elements
        </span>
        <div style={{ border: "1px solid purple", height: "100%" }}>
          height: 100% does nothing when the parent has height: auto
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: "20px",
          height: "200px",
        }}
      >
        This block has height: 200px
        <div
          style={{ border: "1px solid blue", margin: "20px", height: "100%" }}
        >
          height: 100% will be 200px here (plus another 20px * 2 of margin)
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: "20px",
          height: "200px",
        }}
      >
        This block has height: 200px
        <div
          style={{
            border: "1px solid blue",
            margin: "20px",
            height: "stretch",
          }}
        >
          height: stretch is like height: 100% - margin height of element with
          height stretch (so 100% - 20px * 2). I don't get the point
        </div>
      </div>
    </div>
  );
}

export function VerticalAlign() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <span
          style={{
            border: "1px solid black",
            lineHeight: "40px",
          }}
        >
          line-height: 40px
        </span>
        text
        <span style={{ border: "1px solid red", verticalAlign: "baseline" }}>
          vertical-align: baseline (default)
        </span>
        text
        <span style={{ border: "1px solid green", verticalAlign: "sub" }}>
          vertical-align: sub
        </span>
        text
        <span style={{ border: "1px solid blue", verticalAlign: "super" }}>
          vertical-align: super
        </span>
        Next is vertical-align: text-top
        <span
          style={{
            border: "1px solid crimson",
            verticalAlign: "text-top",
            display: "inline-block",
            width: "50px",
          }}
        >
          {/*vertical-align: text-top*/}
        </span>
        Next is vertical-align: text-bottom
        <span
          style={{
            border: "1px solid purple",
            verticalAlign: "text-bottom",
            display: "inline-block",
            width: "50px",
          }}
        >
          {/*vertical-align: text-bottom*/}
        </span>
        text
        <span style={{ border: "1px solid orange", verticalAlign: "middle" }}>
          vertical-align: middle
        </span>
        text
        <span style={{ border: "1px solid teal", verticalAlign: "top" }}>
          vertical-align: top
        </span>
        text
        <span style={{ border: "1px solid yellow", verticalAlign: "bottom" }}>
          vertical-align: bottom
        </span>
        text
        <span style={{ border: "1px solid black", lineHeight: "40px" }}>
          line-height: 40px
        </span>
      </div>
      <div style={{ marginTop: "20px" }}>
        Note that vertical-align: text-top and vertical-align: text-bottom are
        the same as vertical-align: baseline for inline text elements so we use
        inline-block elements for our demonstrations.
      </div>
      <div style={{ marginTop: "20px" }}>
        Also note that vertical-align affects only inline elements (or in table
        contexts). It has no effect on block elements (or in flex or grid
        contexts).
      </div>
    </div>
  );
}

export function FloatAndClear() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <span style={{ border: "1px solid black", float: "right" }}>
          float: right
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <span
          style={{ border: "1px solid black", float: "left", height: "50px" }}
        >
          float: left. This has no clearfix
        </span>
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: "10px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <span
          style={{ border: "1px solid black", float: "left", height: "50px" }}
        >
          float: left. This has a clearfix
        </span>
        <div style={{ content: "", clear: "both", display: "table" }}></div>
      </div>
      <div style={{ marginTop: "20px" }}>
        Note that float should've probably been implemented as "display: float
        flow-root" or "display: float-block" instead of the float property. So
        the spans we use here basically have "display: inline flow-root"
        implicitly here.
      </div>
      <div style={{ marginTop: "20px" }}>
        There are another two values ("inline-start" and "inline-end") but those
        are only used when you are handling both left to right and right to left
        languages
      </div>
    </div>
  );
}

export function DisplayFlowRoot() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        <span
          style={{ border: "1px solid black", float: "left", height: "200px" }}
        >
          float: left
        </span>
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: "10px",
          display: "block flow-root",
        }}
      >
        display: block flow-root (which is what flow-root expands to)
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: "10px",
          display: "block flow",
        }}
      >
        display: block flow (which is what block expands to)
      </div>
      <div display={{ content: "", clear: "both", display: "table" }}>
        <div
          style={{
            border: "1px solid black",
            marginTop: "10px",
            display: "inline flow-root",
            clear: "both",
          }}
        >
          display: inline flow-root (which is what inline-block expands to)
        </div>
      </div>
    </div>
  );
}

export function MarginCollapsing() {
  return (
    <div>
      All these have margin: 20px. Notice that only vertical margins are
      collapsed and not horizontal ones. Also note that vertical margins are not
      collapsed when there is a border between the two margins
      <div style={{ border: "1px solid black", margin: "20px" }}>
        Block with Border
        <div style={{ border: "1px solid black", margin: "20px" }}>
          Inner Block with Border
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        Block without Border
        <div style={{ margin: "20px" }}>Inner Block without Border</div>
      </div>
      <div style={{ border: "1px solid black", margin: "20px" }}>
        Block with Border
      </div>
      <span style={{ border: "1px solid black", margin: "20px" }}>Inline</span>
      <span style={{ border: "1px solid black", margin: "20px" }}>Inline</span>
    </div>
  );
}

export function MarginAuto() {
  return (
    <div>
      margin: auto only affects the x axis. It basically means "suck up all
      available space.
      <span style={{ border: "1px solid black", margin: "auto" }}>
        margin: auto has no effect on inline elements
      </span>
      <div style={{ border: "1px solid black", margin: "auto" }}>
        margin: auto has no effect on block elements with a width of auto as
        that already sucks up all available space
      </div>
      <div
        style={{ border: "1px solid black", margin: "auto", width: "600px" }}
      >
        margin: auto centers block elements with fixed widths
      </div>
      <div
        style={{
          border: "1px solid black",
          marginLeft: "auto",
          width: "600px",
        }}
      >
        margin-left: auto pushes block elements with fixed widths to the right
      </div>
      <div
        style={{
          border: "1px solid black",
          marginRight: "auto",
          width: "600px",
        }}
      >
        margin-right: auto pushes block elements with fixed widths to the left
      </div>
    </div>
  );
}

export function MinContentMaxContentFitContentHeight() {
  return (
    <div>
      In a flow context, all three will be identical as there is no flexibility
      when it comes to automatically altering the heights of elements--there is
      exactly the one way described in height: auto. This is more useful for
      flexbox or grid
      <div style={{ height: "min-content", border: "1px solid black" }}>
        height: min-content makes the div as small as possible while still
        containing the content{" "}
        <span style={{ lineHeight: "40px", border: "1px solid black" }}>
          line-height: 40px
        </span>
      </div>
      <div style={{ height: "max-content", border: "1px solid black" }}>
        height: max-content gives the div as narrow as possible so the height
        will be as large as possible
        <span style={{ lineHeight: "40px", border: "1px solid black" }}>
          line-height: 40px
        </span>
      </div>
      <div style={{ height: "auto", border: "1px solid black" }}>
        height: auto makes the height equal to the sum of all the heights of its
        lines
        <span style={{ lineHeight: "40px", border: "1px solid black" }}>
          line-height: 40px
        </span>
      </div>
    </div>
  );
}

export function MinContentMaxContentFitContentWidth() {
  return (
    <div>
      <div style={{ width: "min-content", border: "1px solid black" }}>
        width: min-content makes the width as small as possible while not
        breaking up the content.
      </div>
      <div style={{ width: "max-content", border: "1px solid black" }}>
        width: max-content makes the width as wide as possible to fit the
        content. In a flow context, it fits everything on a single line
      </div>
      <div
        style={{ width: "stretch", border: "1px solid black", margin: "20px" }}
      >
        width: stretch seems basically the same as width: auto even with a
        margin
      </div>
      <div style={{ width: "fit-content", border: "1px solid black" }}>
        width: fit-content makes the width equal to exactly the width of its
        content while still wrapping if needed
      </div>
    </div>
  );
}

export function WordWrapOverflowWrapWordBreak() {
  return (
    <div>
      word-wrap (legacy name) and overflow-wrap are the same thing. They only
      apply to words that a are too long to fit on a single line. word-break
      seems to do very similar thing
      <div
        style={{
          overflowWrap: "normal",
          width: "150px",
          border: "1px solid black",
        }}
      >
        overflow-wrap: normal just lets it overflow the box.
        asfasdfasdfasdfasdfasdfa
      </div>
      <div
        style={{
          overflowWrap: "anywhere",
          width: "150px",
          border: "1px solid black",
        }}
      >
        overflow-wrap: anywhere just breaks when necessary.
        asfasdfasdfasdfasdfasdfa
      </div>
      <div
        style={{
          overflowWrap: "break-word",
          width: "150px",
          border: "1px solid black",
        }}
      >
        overflow-wrap: break-word breaks identically to anywhere.
        asfasdfasdfasdfasdfasdfa
      </div>
      The only difference can be seen with a width of min-content:
      <div
        style={{
          overflowWrap: "anywhere",
          width: "min-content",
          border: "1px solid black",
        }}
      >
        anywhere
      </div>
      <div
        style={{
          overflowWrap: "break-word",
          width: "min-content",
          border: "1px solid black",
        }}
      >
        break-word
      </div>
      word-break works very similarly to overflow-wrap
      <div
        style={{
          wordBreak: "normal",
          width: "150px",
          border: "1px solid black",
        }}
      >
        word-break: normal just lets it overflow the box like overflow-wrap:
        normal. asfasdfasdfasdfasdfasdfa
      </div>
      <div
        style={{
          wordBreak: "break-word",
          width: "150px",
          border: "1px solid black",
        }}
      >
        word-break: break-word works the same as overflow-wrap: break-word
        asfasdfasdfasdfasdfasdfa
      </div>
      <div
        style={{
          wordBreak: "break-all",
          width: "150px",
          border: "1px solid black",
        }}
      >
        word-break: break-all just puts breaks wherever they happen and breaks
        up words asfasdfasdfasdfasdfasdfa
      </div>
    </div>
  );
}

export function WhitespaceAndWhitespaceCollapsing() {
  return (
    <div>
      white-space handles how white-space and newline characters are
      collapsed/ignored See the handy table here for all the options:
      <a
        href={
          "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/white-space"
        }
        target={"_blank"}
      >
        {" "}
        here
      </a>
      You can also use values for white-space-collapse and text-wrap-mode for it
      <div
        style={{
          whiteSpace: "normal",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: normal    collapses multiple spaces into a single space
 


and treats newlines as a space`}
      </div>
      <div
        style={{
          whiteSpace: "pre",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: pre    (which stands for preformatted) does not collapse

spaces
and treats newlines as newlines.
It also does not wrap at all`}
      </div>
      <div
        style={{
          whiteSpace: "pre-wrap",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: pre-wrap    (which  stands  for  preformatted) also does not collapse

spaces
and treats newlines as newlines.
But it allows lines to wrap`}
      </div>
      <div
        style={{
          whiteSpace: "pre-line",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: pre-line    (which  stands  for  preformatted) collapses

spaces
But treats newlines as newlines
And allows lines to wrap.
`}
      </div>
      <div
        style={{
          whiteSpace: "nowrap",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: nowrap    makes everything go

on the same line
So it implicitly has no respect for newlines
And it also collapses spaces
`}
      </div>
      <div
        style={{
          whiteSpace: "preserve nowrap",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: preserve nowrap    makes everything go

on the same line
But preserves spaces and new lines
`}
      </div>
      <div
        style={{
          whiteSpace: "preserve nowrap",
          width: "150px",
          border: "1px solid black",
        }}
      >
        {`whitespace: preserve nowrap    makes everything go

on the same line
But preserves spaces and new lines
`}
      </div>
    </div>
  );
}

export function Overflow() {
  return (
    <div>
      overflow: visible is the default value. That content will overflow the
      container
      <div style={{ height: "200px", border: "1px solid blue" }}>
        height: 200px, overflow: visible (implicit)
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
      </div>
      <div
        style={{
          height: "200px",
          marginTop: "150px",
          border: "1px solid blue",
          overflow: "hidden",
        }}
      >
        margin-top: 150px, height: 200px, overflow: hidden
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
      </div>
      <div
        style={{
          height: "200px",
          marginTop: "10px",
          border: "1px solid blue",
          overflow: "auto",
        }}
      >
        margin-top: 10px, height: 200px, overflow: auto
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
      </div>
      <div
        style={{
          height: "200px",
          marginTop: "10px",
          border: "1px solid blue",
          overflow: "scroll",
        }}
      >
        margin-top: 10px, height: 200px, overflow: scroll
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
        <div
          style={{
            height: "100px",
            border: "1px solid green",
          }}
        >
          height: 100px
        </div>
      </div>
    </div>
  );
}

export default {
  title: "BlockFormattingContext",
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        type: "dynamic",
        language: "jsx",
        transform: async (source) => {
          const prettier = await import("prettier/standalone");
          const prettierPluginBabel = await import("prettier/plugins/babel");
          const prettierPluginEstree = await import("prettier/plugins/estree");

          return prettier.format(source, {
            parser: "babel",
            plugins: [prettierPluginBabel, prettierPluginEstree],
          });
        },
      },

      codePanel: true,
    },
  },
};

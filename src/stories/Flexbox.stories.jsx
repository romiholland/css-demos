export function RowContainerWidth() {
  return (
    <div>
      display: flex is the same as display: block flow so the width of auto for
      display:flex will be the same as a div and take up the whole width
      <div style={{ display: "flex", border: "1px solid black" }}>
        display: flex
      </div>
      And display: inline-flex will only take up the width of its content and
      stuff will flow around it
      <div style={{ display: "inline-flex", border: "1px solid black" }}>
        display: inline-flex
      </div>
    </div>
  );
}

export function RowItemWidth() {
  return (
    <div>
      <div>
        By default flex items will only take up the size of their content
        <div style={{ display: "flex", border: "1px solid black" }}>
          <div
            style={{
              border: "1px solid blue",
            }}
          >
            Child of display: flex (no flex-grow)
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        Flex-basis acts as the initial width of an item before growth or
        shrinkage is taken into account. The initial value auto means take the
        value from width. If width is also auto, then value set to content. If
        flex-basis is not auto, then width has no effect. content means set the
        width to the width of the children.
        <div style={{ display: "flex", border: "1px solid black" }}>
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid red",
              width: "100px",
              flexBasis: "200px",
            }}
          >
            width: 100px, flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "content",
            }}
          >
            flex-basis: content
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        Items grow in the proportion of flex grow.
        <div style={{ display: "flex", border: "1px solid black" }}>
          <div
            style={{
              border: "1px solid blue",
              flexGrow: 1,
            }}
          >
            flex-grow: 1
          </div>
          <div
            style={{
              border: "1px solid red",
              flexGrow: 1,
            }}
          >
            flex-grow: 1
          </div>
          <div
            style={{
              border: "1px solid green",
              flexGrow: 2,
            }}
          >
            flex-grow: 2
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        Items also shrink in proportion to flex-shrink (higher values means it
        shrinks more).
        <div style={{ display: "flex", border: "1px solid black" }}>
          <div
            style={{
              border: "1px solid blue",
              width: "50%",
              flexShrink: 1,
            }}
          >
            width: 50% flex-shrink: 1
          </div>
          <div
            style={{
              border: "1px solid red",
              width: "50%",
              flexShrink: 1,
            }}
          >
            width: 50% flex-shrink: 1
          </div>
          <div
            style={{
              border: "1px solid green",
              width: "50%",
              flexShrink: 2,
            }}
          >
            width: 50% flex-shrink: 2
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          Items are still subject to min-width and max-width
          <div style={{ display: "flex", border: "1px solid black" }}>
            <div
              style={{
                border: "1px solid blue",
                flexBasis: "100px",
                minWidth: "200px",
              }}
            >
              flex-basis: 100px, min-width: 200px
            </div>
            <div
              style={{
                border: "1px solid red",
                flexBasis: "300px",
                maxWidth: "200px",
              }}
            >
              flex-basis: 300px, max-width: 200px
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          Combining all these properties is dictated by the following formulas:
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`flexItemNInitialWidth = max(
  isPercentage(flexItemNBasis) ? 
    flexItemNBasis * containerWidth : 
    flexItemNBasis, 
  flexItemNOverflow === 'hidden' ?
    flexItemNContentWidth : 
    0
)`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`totalInitialFlexItemWidth = flexItem1InitialWidth + flexItem2InitialWidth + ...`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`remainingSpace = containerWidth - totalInitialFlexItemWidth`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`totalFlexGrow = flexItem1Grow + flexItem2Grow + ...`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`totalFlexShrink = flexItem1Shrink + flexItem2Shrink + ...`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`flexItemNAdjustment = remainingSpace > 0 ? 
  remainingSpace * (flexItemNGrow / totalFlexGrow) : 
  remainingSpace * (flexItemNShrink / totalFlexShrink)`}
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`flexItemNCalculatedWidth = max(flexItemNInitialWidth + flexItemNAdjustment, 0)`}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RowContainerAndItemHeight() {
  return (
    <div>
      <div>
        If not specified The height of flexbox row is equal to height of items
        (accounting for any potential wrapping). Basically it's the same as flow
        BFC line height, especially once you allow for wrapping. Change the
        width of the window below to observe wrapping behavior.
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            flexWrap: "wrap",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "500px" }}>
            width: 500px, height not defined
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        If an item has a set height property, then that's its height. Otherwise
        it depends on align-items property. If the align-items is stretch (which
        is what the default value "normal" maps to for display: flex), it will
        be the height of the tallest flex item in the row, otherwise it will be
        the height of its content
        <div>
          align-items: stretch
          <div
            style={{
              display: "flex",
              border: "1px solid black",
              alignItems: "stretch",
            }}
          >
            <div style={{ border: "1px solid blue", height: "100px" }}>
              height: 100px
            </div>
            <div style={{ border: "1px solid red", height: "50px" }}>
              height: 100px
            </div>
            <div style={{ border: "1px solid green" }}>height not defined</div>
            <div style={{ border: "1px solid purple", width: "50px" }}>
              width: 50px, height not defined
            </div>
          </div>
          align-items: center
          <div
            style={{
              display: "flex",
              border: "1px solid black",
              alignItems: "center",
            }}
          >
            <div style={{ border: "1px solid blue", height: "100px" }}>
              height: 100px
            </div>
            <div style={{ border: "1px solid red", height: "50px" }}>
              height: 50px
            </div>
            <div style={{ border: "1px solid green" }}>height not defined</div>
            <div style={{ border: "1px solid purple", width: "50px" }}>
              width: 50px, height not defined
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColumnContainerAndItemHeight() {
  return (
    <div>
      <div>
        The height of a flexbox with flex-direction: col will just be the height
        of its content (unless a height is explicitly specified). This again
        derives from the fact that display: flex is just short for display:
        block flex. Note that we could also use flex-basis instead of height for
        everything below.
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        Flex-grow has no effect unless an explicit height is given. Flex-shrink
        is the same
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ border: "1px solid blue", height: "100px", flexGrow: 1 }}
          >
            height: 100px, flexGrow: 1
          </div>
          <div style={{ border: "1px solid red", height: "50px", flexGrow: 1 }}>
            height: 50px, flexGrow: 1
          </div>
          <div style={{ border: "1px solid green", flexGrow: 1 }}>
            height not defined, flexGrow: 1
          </div>
        </div>
        height: 500px below
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            height: "500px",
          }}
        >
          <div
            style={{ border: "1px solid blue", height: "100px", flexGrow: 1 }}
          >
            height: 100px, flexGrow: 1
          </div>
          <div style={{ border: "1px solid red", height: "50px", flexGrow: 1 }}>
            height: 50px, flexGrow: 1
          </div>
          <div style={{ border: "1px solid green", flexGrow: 1 }}>
            height not defined, flexGrow: 1
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColumnContainerAndItemWidth() {
  return (
    <div>
      The width of a column is just the width of the block, again. So for the
      default auto, it will be the full width
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ border: "1px solid blue", height: "100px" }}>
          height: 100px
        </div>
        <div style={{ border: "1px solid red", height: "50px" }}>
          height: 50px
        </div>
        <div style={{ border: "1px solid green" }}>height not defined</div>
      </div>
      <div style={{ marginTop: "10px" }}>
        align-items has the same effect as before. The first
        <div>
          align-items: stretch
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            <div style={{ border: "1px solid blue", height: "100px" }}>
              height: 100px
            </div>
            <div style={{ border: "1px solid red", height: "50px" }}>
              height: 50px
            </div>
            <div style={{ border: "1px solid green" }}>height not defined</div>
          </div>
          align-items: center
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ border: "1px solid blue", height: "100px" }}>
              height: 100px
            </div>
            <div style={{ border: "1px solid red", height: "50px" }}>
              height: 50px
            </div>
            <div style={{ border: "1px solid green" }}>height not defined</div>
            <div style={{ border: "1px solid green", width: "100%" }}>
              width: 100%, height not defined
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JustifyContent() {
  return (
    <div>
      This one is pretty simple
      <div>
        justify-content: start or justify-content: flex-start (this is the
        implied default value that the default value of justify-content: normal
        maps to)
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        justify-content: end or justify-content: flex-end (they're identical for
        flexboxes)
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        justify-content: space-between
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        justify-content: space-around
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        justify-content: space-evenly
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        justify-content: center
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              border: "1px solid blue",
              flexBasis: "100px",
            }}
          >
            flex-basis: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              flexBasis: "200px",
            }}
          >
            flex-basis: 200px
          </div>
          <div
            style={{
              border: "1px solid green",
              flexBasis: "150px",
            }}
          >
            flex-basis: 150px
          </div>
        </div>
        Note that justify-self and justify-items don't do anything in flexbox
      </div>
    </div>
  );
}

export function AlignItems() {
  return (
    <div>
      This is also straightforward
      <div>
        align-items: stretch (The default value of align-items: normal maps to
        this)
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            alignItems: "stretch",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "50px" }}>
            width: 50px, height not defined
          </div>
        </div>
        align-items: center
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            alignItems: "center",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "50px" }}>
            width: 50px, height not defined
          </div>
        </div>
        align-items: start (align-items: flex-start is the same except in
        row-reverse contexts and the like)
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            alignItems: "start",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "50px" }}>
            width: 50px, height not defined
          </div>
        </div>
        align-items: end (align-items: flex-end is the same except in
        row-reverse contexts and the like)
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            alignItems: "end",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div style={{ border: "1px solid red", height: "50px" }}>
            height: 50px
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "50px" }}>
            width: 50px, height not defined
          </div>
        </div>
        align-self also works. The example below has align-items: center
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            alignItems: "center",
          }}
        >
          <div style={{ border: "1px solid blue", height: "100px" }}>
            height: 100px
          </div>
          <div
            style={{
              border: "1px solid red",
              height: "50px",
              alignSelf: "start",
            }}
          >
            height: 50px, align-self: start
          </div>
          <div style={{ border: "1px solid green" }}>height not defined</div>
          <div style={{ border: "1px solid purple", width: "50px" }}>
            width: 50px, height not defined
          </div>
        </div>
        TODO: Add align-items: baseline, first baseline, last baseline,
        anchor-center, self-start, self-end. Add align-content
      </div>
    </div>
  );
}

export function FlexboxWithOnlyText() {
  return (
    <div>
      Flexbox basically implicitly wraps groups of text in span. Below has
      justify-content: space-between.
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        This is unwrapped <span>This is wrapped in a span</span> This is
        unwrapped
      </div>
    </div>
  );
}

export default {
  title: "Flexbox",
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

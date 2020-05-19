export default function constructStyles(
  enableYScroll,
  enableXScroll,
  middleAlign,
  xAlign,
  yAlign
) {
  return {
    overflowX: enableXScroll ? "auto" : "hidden",
    overflowY: enableYScroll ? "auto" : "hidden",
    ...align(middleAlign, xAlign, yAlign),
  };
}

function align(middleAlign, xAlign, yAlign) {
  if (middleAlign) {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  }

  let styleObject = {
    display: "flex",
    justifyContent: flexAlignment[xAlign],
    alignItems: flexAlignment[yAlign],
  };

  return styleObject;
}

const flexAlignment = {
  top: "flex-start",
  bottom: "flex-end",
  middle: "center",
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

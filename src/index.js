import React from "react";
import classNames from "./ReactFixedAlign.module.scss";
import PropTypes from "prop-types";
import { constructStyles } from "./helpers";

function ReactFixedAlign({
  el: El = "div",
  className,
  children,
  enableXScroll = false,
  enableYScroll = false,
  middleAlign = false,
  yAlign = "top",
  xAlign = "left",
}) {
  return (
    <El
      className={`${classNames.wrapper} ${className}`}
      style={constructStyles(
        enableXScroll,
        enableYScroll,
        middleAlign,
        xAlign,
        yAlign
      )}
    >
      {children}
    </El>
  );
}

ReactFixedAlign.propTypes = {
  enableXScroll: PropTypes.bool,
  enableYScroll: PropTypes.bool,
  className: PropTypes.string,
  middleAlign: PropTypes.bool,
  yAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  xAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export default ReactFixedAlign;

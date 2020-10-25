import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

const TooltipWrapper = (props) => {
  const { tooltipText } = props;

  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipText}</Tooltip>}>
      {props.children}
    </OverlayTrigger>
  );
};

TooltipWrapper.prototype = {
  tooltipText: PropTypes.string,
};

export default TooltipWrapper;

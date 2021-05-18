import React, { useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useWindowScroll } from "react-use";
import { useWindowSize } from "react-use";

const Scroller = () => {
  const { x, y } = useWindowScroll();
  const { width, height } = useWindowSize();
  let scroll = false;

  if (y >= height / 3) {
    if (scroll === false) {
      scroll = true;
    }
  }
  return (
    <>
      <a href="#nav-bar">
        <div
          className="scroller"
          id="scroller"
          style={{ opacity: `${scroll ? 1 : 0}` }}
        >
          <ExpandLessIcon />
        </div>
      </a>
    </>
  );
};

export default Scroller;

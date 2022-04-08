import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import FooterComponent from "./Footer-component";


export default function ({ classes, children, open, setRef }) {
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
      ref={target => setRef(target)}
    >
      <Toolbar />
      <div style={{minHeight: '70vh'}}>
        {children}
      </div>

      <FooterComponent classes={classes} />
    </main>
  );
}

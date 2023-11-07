import React from "react";
import styles from "./imageProjectFigure.css";

export default function ProjectImageFigure ({ id, title, figureHeight, useThumbnail }) {

  return (
    <figure 
      className={styles.porject_figure}
      style={{ height: `${figureHeight}px` }}
    >
    </figure>
  );
}
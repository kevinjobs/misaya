import React from "react";
import "./style.less";

export type CardType =
  | "plain"
  | "with-header"

export interface CardProps {
  type: CardType;
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Card(props: CardProps) {
  const { type, title, children, style } = props;

  return (
    <div className={"component-card"} style={style}>
      {type == "with-header"
        &&
        <div className={"card-header"}>
          {title && <h3 className={"card-title"}>{title}</h3>}
        </div>
      }
      <div className={"card-container"}>
        {children}
      </div>
    </div>
  )
}
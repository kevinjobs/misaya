import React from "react";
import "./style.less";

export interface NavigatorItem {
  title: string;
  name: string;
  key?: string | number;
  link?: string;
  onClick?(item: NavigatorItem): void;
}

export interface NavigatorProps {
  items: NavigatorItem[]
}

export default function Navi(props: NavigatorProps) {
  const { items } = props;
  
  return (
    <div className={"component-navi"}>
      <div className={"container"}>
        {items.map((item, idx) => {
          const { title, name, key, link, onClick } = item;
          return (
            <div className={"navi-item"} key={key || name || idx}>
              {link ? (
                <a
                  href={link}
                  data-item-title={title}
                  data-item-name={name}
                  data-item-key={key}
                >
                  {title}
                </a>
              ) : (
                <span
                  data-item-title={title}
                  data-item-name={name}
                  data-item-key={key}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick && onClick(item);
                  }}
                >
                  {title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}
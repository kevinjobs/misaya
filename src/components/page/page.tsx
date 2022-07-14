import React from "react";
import "./style.less";

export type PageCategory = "tool" | "display" | "blog";

export interface PageProps {
  title: string;
  name: string;
  key: string | number;
  description: string;
  category: PageCategory;
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { title, name, key, description, category, children } = props;

  return (
    <div
      className={`component-page page-${name}`}
      data-page-key={key}
      data-page-cate={category}
    >
      <div className={"page-header"}>
        <div>
          <h1 className={"page-title"}>{title}</h1>
          <span className={"page-cate"}>{category}</span>
        </div>
        <span className={"page-desc"}>{description}</span>
      </div>
      <div className={"page-container"}>
        {children}
      </div>
    </div>
  );
}

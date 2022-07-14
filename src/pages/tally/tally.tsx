import React from "react";
import Page from "@components/page";
import Card from "@components/card";
import Trend from "./trend";
import Constituent from "./constituent";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "理财",
    value: 399,
  },
  {
    name: "存款",
    value: 899,
  },
  {
    name: "基金",
    value: 783,
  }
]

export default function PageTally() {
  return (
    <Page
      title={"Tally"}
      name={"tally"}
      key={"tally"}
      description={"a tool to record my cash"}
      category={"tool"}
    >
      <Card title={"财产构成"} type={"with-header"} style={{width: 500, height: 300}}>
        <Constituent data={data2} />
      </Card>
      <Card title={"累计分析"} type={"with-header"} style={{width: 1000, height: 400}}>
        <Trend data={data} />
      </Card>
    </Page>
  );
}

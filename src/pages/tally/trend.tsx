import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface TrendProps {
  data: any[];
}

export default function Trend(props: TrendProps) {
  const { data } = props;

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" name={"当月收入"} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" name={"期间增长"} />
      </LineChart>
    </ResponsiveContainer>
  );
}

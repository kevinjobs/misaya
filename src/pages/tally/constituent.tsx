import React from "react";
import {ResponsiveContainer, PieChart, Pie, Cell} from "recharts";

export interface ConstituentProps {
  data: any[]
}

export default function Constituent(props: ConstituentProps) {
  const { data } = props;

  const COLORS = [
    "#0088fe",
    "#00c49f",
    "#ffbb28",
    "#ff8042"
  ]

  const RADIAN = Math.PI / 180;

  const renderLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, name}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 16;

    return (
      <text x={x} y={y} fill={"white"} textAnchor={x > cx ? "start" : "end"} dominantBaseline={"central"}>
        <tspan>{ name }</tspan>
        <tspan dx={-30} dy={20}>{`${(percent * 100).toFixed(0)}%`}</tspan>
      </text>
    )
  }

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey={"value"}
          nameKey={"name"}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderLabel}
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
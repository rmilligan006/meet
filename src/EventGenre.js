import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const genres = [
        "React",
        "JavaScript",
        "Node",
        "jQuery",
        "AngularJS",
        "Angular",
      ];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data.filter((genre) => {
        return genre.value > 0;
      });
    };
    setData(() => getData());
  }, [events]);

  const COLORS = [
    "#3A3845",
    "#826F66",
    "#e186b7",
    "#f39099",
    "#f0a384",
    "#FF00C8",
  ];

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={data}
          cx={"50%"}
          cy={170}
          labelLine={false}
          outerRadius={55}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 60).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;

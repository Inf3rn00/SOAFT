import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Excellent", value: 40, fill: "#34D399" }, // green
  { name: "Very Good", value: 80, fill: "#3B82F6" }, // blue
  { name: "Good", value: 100, fill: "#8B5CF6" }, // purple
  { name: "Incomplete", value: 20, fill: "#93C5FD" }, // light blue
  { name: "Poor", value: 60, fill: "#F87171" }, // red
  { name: "Retake", value: 90, fill: "#FDE68A" }, // yellow
];

const TestPerformanceChart = () => {
    return (
        <div className="bg-white rounded-[16px] shadow-md p-5">
        <div style={{ width: "100%", height: '445px' }}>
            <h2 style={{ marginBottom: "10px" }} className="text-[22px] font-semibold">Test performance</h2>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" radius={[100, 100, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default TestPerformanceChart;

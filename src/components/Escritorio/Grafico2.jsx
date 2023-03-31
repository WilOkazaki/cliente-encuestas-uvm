import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    },
  },
};

const labels = ["Dato1", "Dato2", "Dato3", "Dato4"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: "rgba(26, 55, 221, 0.5)",
    },
  ],
};

export function Grafico2() {
  return <Bar options={options} data={data}/>;
}

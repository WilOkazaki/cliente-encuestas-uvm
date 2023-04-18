import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

// mustra los resultados de una encuesta en un grafico utilizando chart.js
export function Grafico({ datos }) {
  const { nocturno } = useContext(GlobalContext);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const random_rgba = () => {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    const rgba = `rgba(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}, 0.6)`;
    return rgba;
  };
  let labels = [];
  let backgroundColor = [];
  let data = [];

  datos.forEach(dato => {
    labels.push(dato.opcion);  
    data.push(dato.numero);
    backgroundColor.push(random_rgba());
  });

  const dataResultado = {
    labels,
    datasets: [
      {
        label: "",
        data,
        backgroundColor,
        borderWidth: 1,
        
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 18
                },
                color: nocturno ? "#fff" : "#000"
            }
        }
    }
}
  return <Pie data={dataResultado} options={options} className="w-100 h-100" />;
}

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export type ChartDataSetItem = {
    name: string,
    elo: number,

}

type ChartProps = {
    items: ChartDataSetItem[]
}
export const RanksChart: React.FC<ChartProps>  = ({items}) => {

    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Val rank Leaderboard',
            },
        },
    };


    const dataSorted = items.sort((a, b) =>  (b.elo - a.elo))
    const labels = dataSorted.map(item => item.name)
    const data = {
        labels,
        datasets: [
            {
                label: 'Elo',
                data: dataSorted.map(item => item.elo),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ]
    };

    return (
      <div className={"max-h-screen max-w-screen"}>
          <Bar
            options={options}
            data={data}
            className={"h-screen w-screen"}
          />;
      </div>
    )
}

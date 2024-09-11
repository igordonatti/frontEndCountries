'use client'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

interface PopulationCount {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationCounts: PopulationCount[]; // Manter o tipo original conforme sua interface
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ populationCounts }: PopulationChartProps) => {
  const generateChartData = () => {
    const years = populationCounts.map((data) => data.year);
    const populations = populationCounts.map((data) => data.value);

    return {
      labels: years,
      datasets: [
        {
          label: 'Population long the years',
          data: populations,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
      ],
    };
  };

  const chartData = generateChartData();

  return (
    <div className="bg-white w-full md:w-2/3 lg:w-1/2 p-4">
      <Line data={chartData} />
    </div>
  );
};

export default PopulationChart;
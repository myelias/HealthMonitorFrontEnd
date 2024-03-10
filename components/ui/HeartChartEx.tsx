"use client"
import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler

} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler
)

// Gradient Fill


export default function HeartChartEx() {


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'HeartRate',
                    data: [67, 71, 68, 70, 73, 72, 71],
                    /*backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],*/
                    backgroundColor: ({chart: {ctx}}) => {
                        const bg = ctx.createLinearGradient(0, 150, 0, 600); 
                        bg.addColorStop(0, '#27B6E01A'); 
                        bg.addColorStop(1, '#27B6E09A');
                        // More config for your gradient
                        return bg;
                      },
                    fill: true,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.2
                }
            ]
        })
        setChartOptions({
            plugins:{
                
                legend:{
                    position: 'bottom',
                },
                title:{
                    display: true,
                    text: 'Display Chart'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
  return (
        <Line data={chartData} options={chartOptions}/>
  )
}

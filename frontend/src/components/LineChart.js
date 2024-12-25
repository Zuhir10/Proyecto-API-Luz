import Chart from 'chart.js/auto'; 

export const LineChart = (labels, data) => {
    const canvas = document.createElement('canvas');
    canvas.id = 'lineChart'; 
    canvas.height = 600;
    canvas.width = 1800;
    canvas.style.margin = "60px";

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Precio de la Luz (€)',
                data: data,
                borderColor: 'rgba(204, 102, 0, 1)',
                backgroundColor: 'rgba(255, 165, 0, 0.7)',
                tension: 0.1,
                fill: true,
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Tiempo',
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Precio (€)',
                    },
                    beginAtZero: true,
                }
            }
        }
    });
    return canvas; 
};

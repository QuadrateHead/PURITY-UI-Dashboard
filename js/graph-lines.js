const ctx = document.getElementById('salesChart').getContext('2d');
//?Mot Enough Perfect for final//
// Create Green Gradient (Mobile App)
function getGradient(ctx, chartArea, color) {
    const chartHeight = chartArea.bottom - chartArea.top;
    // Create gradient: (x0, y0, x1, y1)
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    
    // Bottom (Transparent)
    gradient.addColorStop(0, 'rgba(' + color + ', 0)'); 
    // Top (Semi-transparent)
    gradient.addColorStop(1, 'rgba(' + color + ', 0.4)'); 
    
    return gradient;
}

const verticalLinePlugin = {
    id: 'verticalLine',
    afterDatasetsDraw(chart) {
        if (chart.tooltip?._active?.length) {
            const activePoint = chart.tooltip._active[0];
            const ctx = chart.ctx;
            const x = activePoint.element.x;
            const topY = chart.scales.y.top;
            const bottomY = chart.scales.y.bottom;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#cbd5e0'; // Color matching your ticks
            ctx.setLineDash([4, 3]);    // Making it dotted to match your style
            ctx.stroke();
            ctx.restore();
        }
    }
};
const monthMarkerPlugin = {
    id: 'monthMarker',
    afterDatasetsDraw(chart) {
        // Only draw if the user is hovering over a point
        if (chart.tooltip?._active?.length) {
            const activePoint = chart.tooltip._active[0];
            const {ctx, chartArea, scales} = chart;
            
            // Get the X coordinate of the hovered month
            const x = activePoint.element.x;
            const bottomY = chartArea.bottom;
            
            // Get the month text (Jan, Feb, etc.)
            const text = chart.data.labels[activePoint.index];
            
            ctx.save();
            
            // Box Styling
            ctx.font = 'bold 12px Arial';
            const textWidth = ctx.measureText(text).width;
            const paddingH = 12; // Horizontal padding
            const paddingV = 6;  // Vertical padding
            const boxWidth = textWidth + (paddingH * 2);
            const boxHeight = 14 + (paddingV * 2);
            const borderRadius = 6;

            // Draw the Dark Box (using #2d3748 from your image)
            ctx.fillStyle = '#2d3748';
            ctx.beginPath();
            // Positioned slightly below the chart grid (bottomY + 5)
            ctx.roundRect(x - boxWidth / 2, bottomY + 5, boxWidth, boxHeight, borderRadius);
            ctx.fill();

            // Draw the Triangle/Pointer on top of the box
            ctx.beginPath();
            ctx.moveTo(x - 5, bottomY + 5);
            ctx.lineTo(x + 5, bottomY + 5);
            ctx.lineTo(x, bottomY);
            ctx.fill();

            // Draw the Month Text (White)
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center', monthMarkerPlugin;
            ctx.textBaseline = 'middle';
            ctx.fillText(text, x, bottomY + 5 + (boxHeight / 2));

            ctx.restore();
        }
    }
};
const salesChart = new Chart(ctx, {
    type: 'line',
    plugins: [verticalLinePlugin, monthMarkerPlugin], // Register the plugin here
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Websites', // Black line
                data: [500, 240, 160, 280, 220, 260, 200, 180, 120, 170, 180, 140],
                borderColor: '#2d3748',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null; // Wait for initial render
                    return getGradient(ctx, chartArea, '45, 55, 72'); // Dark Gray RGB
                },
                fill: true,
                tension: 0.4,
                borderWidth: 4, 
                // --------------------
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#2d3748',  // White fill
                pointBorderColor: '#fff',   // Black outline
                pointBorderWidth: 3,
                pointHoverBorderWidth: 2,
            },
            {
                label: 'Mobile App', // Green line
                data: [180, 220, 200, 340, 360, 480, 350, 300, 360, 220, 400, 430],
                borderColor: '#4fd1c5',
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) return null;
                    return getGradient(ctx, chartArea, '79, 209, 197'); // Teal RGB
                },
                fill: true,
                tension: 0.4,
                borderWidth: 4, 
                // --------------------
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4FD1C5',  // White fill
                pointBorderColor: '#fff',   // Black outline
                pointBorderWidth: 3,
                pointHoverBorderWidth: 2,
            }
            
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (e, elements) => {
        // Check if the user clicked on a data point or column
        if (elements.length > 0) {
            const index = elements[0].index; // The index of the month (0 for Jan, 1 for Feb...)
            const month = salesChart.data.labels[index];
            const mobileData = salesChart.data.datasets[0].data[index];
            const webData = salesChart.data.datasets[1].data[index];

            // For now, let's log it. You can replace this with a UI update.
            console.log(`Month: ${month} | Mobile: ${mobileData} | Web: ${webData}`);
            
            // Example: Updating a text element in your 'soc__info' div
            // document.querySelector('.soc__title').innerText = `${month} Sales Data`;
            }
        },

        interaction: {
            mode: 'index',
            intersect: false,
        },
        // --- THIS PART REMOVES THE DEFAULT LEGENDS ---
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#2d3748', // Dark background from your image
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                padding: 12,
                cornerRadius: 8,
                displayColors: true, // Shows the small colored circles
                usePointStyle: true,
                callbacks: {
                    label: function(context) {
                        return ` ${context.dataset.label}: ${context.parsed.y}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 500,
                ticks: { 
                    stepSize: 100, 
                    color: '#cbd5e0',
                    padding: 5
                },
                // V4 border control
                border: {
                    display: false, // Removes the solid vertical line
                    dash: [5, 5]    // This ensures the axis line itself is dashed if it shows
                },
                grid: { 
                    display: true,
                    color: '#E2E8F0',
                    lineWidth: 1,    // 1 is better for dashes; 2 often looks solid
                    drawTicks: false,
                    borderDash: [5, 5] // The actual "- - - -" lines
                }
            },
            x: {
                ticks: { color: '#cbd5e0', padding: 5 },
                border: {
                    display: false // Removes the solid horizontal line
                },
                grid: { 
                    display: false,
                    color: '#E2E8F0',
                    lineWidth: 1,
                    drawTicks: false,
                    borderDash: [5, 5]
                }
            }
            
        }
    }
});
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 800;
    
    // Update the padding values
    salesChart.options.scales.y.ticks.padding = isMobile ? 10 : 24.23;
    salesChart.options.scales.x.ticks.padding = isMobile ? 10 : 24.23;
    
    // Tell Chart.js to re-draw with the new settings
    salesChart.update();
});
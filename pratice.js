// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Cost Summary Chart
    const costSummaryCtx = document.getElementById('costSummaryChart').getContext('2d');
    new Chart(costSummaryCtx, {
        type: 'bar',
        data: {
            labels: ['Price per Unit', 'Total Revenue', 'Gross Profit', 'Net Profit'],
            datasets: [{
                label: '₹1,500',
                data: [1500, 300000, 187000, 162000],
                backgroundColor: '#3498db'
            }, {
                label: '₹2,000',
                data: [2000, 400000, 287000, 262000],
                backgroundColor: '#e74c3c'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Margins Chart
    const marginsCtx = document.getElementById('marginsChart').getContext('2d');
    new Chart(marginsCtx, {
        type: 'bar',
        data: {
            labels: ['Gross Margin', 'Net Margin'],
            datasets: [{
                label: 'Margins (%)',
                data: [62.33, 54],
                backgroundColor: ['#2ecc71', '#9b59b6']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
const allastats = ['Movement', 'Toughness', 'Save', 'Wounds', 'Leadership', 'Objective control']

function Mall(ctx, data) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: allastats,
      datasets: [{
        label: 'Stat',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      animation: false,
      responsive: true,
      plugins: {
        legend: {
          display: false 
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      },
      layout: {
        padding: {
          top: 20
        }
      }
    },
    plugins: [{
      id: 'nummer',
      afterDatasetsDraw(chart) {
        const { ctx, data, scales: { x, y } } = chart;

        data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex);

          meta.data.forEach((bar, index) => {
            const value = dataset.data[index];

            const suffixes = ['"', '', '+', '', '+', ''];
            const formattedValue = `${value}${suffixes[index]}`;

            ctx.save();
            ctx.font = '12px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(formattedValue, bar.x, bar.y - 5);
            ctx.restore();
          });
        });
      }
    }]
  });
}

Chart.defaults.borderColor = 'rgba (0, 0, 0, 1)';
Chart.defaults.backgroundColor = 'rgba (0, 0, 0, 1)';

const MD1 = document.getElementById('DG1');
const data1 = [5, 5, 3, 4, 6, 1]; 

const MD2 = document.getElementById('DG2');
const data2 = [4, 6, 2, 5, 7, 2]; 


Mall(MD1, data1);
Mall(MD2, data2);

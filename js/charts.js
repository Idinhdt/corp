const allastats = ['M', 'T', 'SV', 'W', 'LD', 'OC']

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
            color: 'black',
            font : {
              size: 15,
              family: 'F3'
            }
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
Chart.defaults.backgroundColor = 'rgba(0, 0, 0, 0.4)';

const chartMappings = {
  553461: [5, 5, 3, 4, 6, 1],
  553561: [5, 5, 3, 5, 6, 1],
  462661: [4, 6, 2, 6, 6, 1],
  71121063: [7, 11, 2, 10, 6, 3],
  111021063: [11, 10, 2, 10, 6, 3],
  553451: [5, 5, 3, 4, 5, 1],
  462561: [4, 6, 2, 5, 6, 1],
  101221656: [10, 12, 2, 16, 5, 6],
  562661: [5, 6, 2, 6, 6, 1],
  553261: [5, 5, 3, 2, 6, 1],
  12931062: [12, 9, 3, 10, 6, 2],
  X1031260: [0, 10, 3, 12, 6, 0],
  462361: [4, 6, 2, 3, 6, 1],
  854471: [8, 5, 4, 4, 7, 1],
  636171: [6, 3, 6, 1, 7, 1],
  81031465: [8, 10, 3, 14, 6, 5],
  692863: [6, 9, 2, 8, 6, 3],
  101221665: [10, 12, 2, 16, 6, 5],
  101031164: [10, 10, 3, 11, 6, 4],
  10931063: [10, 9, 3, 10, 6, 3],
  101021264: [10, 10, 2, 12, 6, 4],
  447181: [4, 4, 7, 1, 8, 1],
  696772: [6, 9, 6, 7, 7, 2],
  71252065: [7, 12, 5, 20, 6, 5],
  61031072: [6, 10, 3, 10, 7, 2],
  537480: [5, 3, 7, 4, 8, 0],
  557272: [5, 5, 7, 2, 7, 2],
  1086572: [10, 8, 6, 5, 7, 2],
  557571: [5, 5, 7, 5, 7, 1],
  71252265: [7, 12, 5, 22, 6, 1],
  557561: [5, 5, 7, 5, 6, 1],
  556872: [5, 5, 6, 8, 7, 2],
  643561: [6, 4, 3, 5, 6, 1],
  1043661: [10, 4, 3, 6, 6, 1],
  1243661: [12, 4, 3, 6, 6, 1],
  643461: [6, 4, 3, 4, 6, 1],
  141121656: [14, 11, 2, 16, 5, 6],
  71021063: [7, 10, 2, 10, 6, 3],
  11921063: [11, 9, 2, 10, 6, 3],
  552561: [5, 5, 2, 5, 6, 1],
  1045471: [10, 4, 5, 4, 7, 1],
  543262: [5, 4, 3, 2, 6, 2],
  646172: [6, 4, 6, 1, 7, 2],
  101041364: [10, 10, 4, 13, 6, 4],
  552361: [5, 5, 2, 3, 6, 1],
  81031263: [8, 10, 3, 12, 6, 3],
  20931260: [20, 9, 3, 12, 6, 0],
  101031263: [10, 10, 5, 12, 6, 3],
  101121163: [10, 11, 2, 11, 6, 3],
  1045272: [10, 4, 5, 2, 7, 2],
  638181: [6, 3, 8, 1, 8, 1],
  1287973: [12, 8, 7, 9, 7, 3],
  636371: [6, 3, 6, 3, 7, 1],
  947671: [9, 4, 7, 6, 7, 1],
  1276973: [12, 7, 6, 9, 7, 1],
  947371: [9, 4, 7, 3, 7, 1],
  1246471: [12, 4, 6, 4, 7, 1],
  121062065: [12, 10, 6, 20, 6, 5],
  121061865: [12, 10, 6, 18, 6, 5],
  637172: [6, 3, 7, 1, 7, 2],
  1446371: [14, 4, 6, 3, 7, 1],
  1246682: [12, 4, 6, 6, 8, 2],
  637571: [6, 3, 7, 5, 7, 1],
};


Object.entries(chartMappings).forEach(([id, data]) => {
  
  const containers = document.getElementsByClassName(id); 

  Array.from(containers).forEach((container) => {
    Mall(container, data); 
  });
});
const ctx1 = document.getElementById('myChart');

new Chart(ctx1, {
 type: 'bar',
 data: {
   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   datasets: [{
     label: '# of Votes',
     data: [12, 19, 3, 5, 2, 3],
     borderWidth: 1
   }]
 }                      
});

const ctx2 = document.getElementById('myCart');

new Chart(ctx2, {
 type: 'bar',
 data: {
   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   datasets: [{
     label: '# of Votes',
     data: [12, 9, 3, 5, 2, 3],
     borderWidth: 1
   }]
 }                      
});
async function loadChart() {
  const coinId = document.getElementById('coin_id').value;
  const response = await fetch(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`);
  const data = await response.json();

  const labels = data.data.map(entry => new Date(entry.time).toLocaleDateString());
  const prices = data.data.map(entry => parseFloat(entry.priceUsd));

  const ctx = document.getElementById('priceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `${coinId.toUpperCase()} Price`,
        data: prices,
        borderColor: '#0ff',
        borderWidth: 2
      }]
    },
    options: { scales: { y: { beginAtZero: false } } }
  });
}

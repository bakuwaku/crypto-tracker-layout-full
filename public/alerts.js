document.getElementById('alert-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const coin_id = document.getElementById('coin_id').value;
  const target_price = parseFloat(document.getElementById('target_price').value);
  document.getElementById('status').textContent = `Alert set for ${coin_id} at $${target_price}`;
});

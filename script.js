document.getElementById("dreamVehicleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const model = document.getElementById("model").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const year = document.getElementById("year").value.trim();

  // Validação: Certifique-se de que os campos obrigatórios estão preenchidos
  if (!name || !email || !phone || !model || !brand || !year) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const tableBody = document.getElementById("vehicleList");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td><span>${name}</span></td>
    <td><span>${email}</span></td>
    <td><span>${phone}</span></td>
    <td><span>${model}</span></td>
    <td><span>${brand}</span></td>
    <td><span>${year}</span></td>
    <td><button class="delete" aria-label="Excluir linha">Excluir</button></td>
  `;

  // Adicionar event listener ao botão "Excluir" para remover a linha
  newRow.querySelector(".delete").addEventListener("click", function () {
    newRow.remove(); // Remove a linha inteira
  });

  tableBody.appendChild(newRow);
  e.target.reset(); // Limpa o formulário
});

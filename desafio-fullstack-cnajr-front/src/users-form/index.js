import { addUser } from '../services/api.js'
import { usersTable } from '../users-table/index.js'

const errorSpan = document.getElementById('error-container');

document.getElementById("users-form").addEventListener("submit", async function(event) {
  event.preventDefault()

  const name = document.getElementById("exampleInputName1").value;
  const age = parseInt(document.getElementById("exampleInputAge1").value);
  const email = document.getElementById("exampleInputEmail1").value;

  let valid = true;

  if (!name) {
      valid = false;
      errorSpan.innerHTML += `<span class="error-span">O campo 'Nome' é obrigatório.</span>`;
  }
  if (age < 0 || age > 120 || !age) {
      valid = false;
      errorSpan.innerHTML += `<span class="error-span">A Idade deve ser entre 0 e 120.</span>`;
  }
  if (!email || !validateEmail(email)) {
      valid = false;
      errorSpan.innerHTML += `<span class="error-span">O email é inválido.</span>`;
  };

  if (valid) {
    errorSpan.innerHTML = '';
    
    await addUser({
      user: {
        name,
        age,
        email
      }
    })

    usersTable();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
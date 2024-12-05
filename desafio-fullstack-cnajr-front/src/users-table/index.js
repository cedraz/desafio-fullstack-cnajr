import { listUsers } from "../services/api.js";

const usersTableTbody = document.getElementById('users-table-tbody');

function addRow({ user }) {
  const row = document.createElement("tr");

  const cells = `
    <th scope="col">${user.name}</th>
    <th scope="col">${user.age}</th>
    <th scope="col">${user.email}</th>
  `

  row.innerHTML = cells;

  usersTableTbody.appendChild(row);
}

export async function usersTable() {
  const users = await listUsers();

  usersTableTbody.innerHTML = '';
  users.forEach(user => addRow({user}));
}

usersTable();
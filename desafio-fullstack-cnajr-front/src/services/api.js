import { config } from "../config/config.js"

const API_URL = config.API_URL;

export async function listUsers() {
  const response = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const data = await response.json();

  return data;
}

export async function addUser({ user }) {
  const response = await fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  })

  const data = await response.json();

  console.log(data)

  return data;
}


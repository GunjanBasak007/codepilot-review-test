const users = [
  {
    id: 1,
    name: "Gunjan",
    password: "supersecret123"
  }
];

export function getUser(id) {
  return users.find(user => user.id == id);
}

console.log(getUser("1"));
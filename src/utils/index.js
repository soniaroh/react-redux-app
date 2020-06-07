export const filterUsers = (users, searchedTerm) => {
  return users.filter(user => user.name.toLowerCase().includes(searchedTerm.toLowerCase()))
}

let current_users: string[] = ['john', 'jane', 'alex', 'emma', 'chris'];
let new_users: string[] = ['emma', 'mike', 'alexander', 'sarah', 'john'];

for (let i = 0; i < new_users.length; i++) {
  let lowercase_new_user = new_users[i].toLowerCase(); // Convert new username to lowercase

  if (current_users.indexOf(lowercase_new_user)) {
    console.log(`Username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Username '${new_users[i]}' is available.`);
  }
}

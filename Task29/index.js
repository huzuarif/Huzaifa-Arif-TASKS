var current_users = ['john', 'jane', 'alex', 'emma', 'chris'];
var new_users = ['emma', 'mike', 'alexander', 'sarah', 'john'];
for (var i = 0; i < new_users.length; i++) {
    //   let lowercase_new_user = new_users[i].toLowerCase(); // Convert new username to lowercase
    if (current_users = new_users) {
        console.log("Username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_users[i], "' is available."));
    }
}

//Assign a random avatar picture to a new user
Accounts.onCreateUser(function (options, user) {
    var randomAvatar = Math.floor(Math.random() * (8)) + 1;
    console.log("Assigning random Avatar " + randomAvatar);
    var avatar= "ava"+randomAvatar+".png";
    user.profile = {avatar: avatar};
    return user;
});
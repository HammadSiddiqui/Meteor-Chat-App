Template.chat_message.helpers({
    avatar: function(someId) {
        var someUser = Meteor.users.findOne(someId);
        console.log(someUser.profile);
    }
})
Template.chat_message.helpers({
    avatar: function(someId) {
        var someUser = Meteor.users.findOne(someId);
        if (!!someUser.profile.avatar) {
            return someUser.profile.avatar;
        }
        
    },
    myMessage: function(someId) {
        if (someId == Meteor.userId()) {
            return "my-message";
        }
    }
})
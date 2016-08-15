Meteor.methods({
    insertChat: function (myId, otherUserId) {
        if(Meteor.user()) {
            var chatId = Chats.insert({user1Id:myId, user2Id:otherUserId});
            return chatId;
        }
        else {
            return false;
        }

    },
    updateChat : function (id, chat) {
        if(Meteor.userId()) {
            return Chats.update(id, chat);
        }
        else {
            return false;
        }

    }
});
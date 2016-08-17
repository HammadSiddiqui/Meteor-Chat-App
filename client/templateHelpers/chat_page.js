
Template.chat_page.helpers({
    messages:function(){

        var chat = Chats.findOne({_id:Session.get("chatId")});
        return chat.messages;
    },
    other_user:function(){
        var userIds = Chats.findOne({_id:Session.get("chatId")}, {user1Id:1,user2Id:1});

        var user1Id = userIds.user1Id;
        var user2Id = userIds.user2Id;

        var username1 = Meteor.users.findOne({_id:user1Id}, {username:1});
        var username2 = Meteor.users.findOne({_id:user2Id}, {username:1});

        if(userIds.user1Id == Meteor.userId()){

            return username2.username;
        }
        else{
            return username1.username;
        }

    }

});
Template.chat_page.events({
    // this event fires when the user sends a message on the chat page
    'submit .js-send-chat':function(event){
        // stop the form from triggering a page reload
        event.preventDefault();
        // see if we can find a chat object in the database
        // to which we'll add the message
        var chat = Chats.findOne({_id:Session.get("chatId")});

        if (chat){// ok - we have a chat to use
            var msgs = chat.messages; // pull the messages property
            if (!msgs){// no messages yet, create a new array
                msgs = [];
            }
            // is a good idea to insert data straight from the form
            // (i.e. the user) into the database?? certainly not.
            // push adds the message to the end of the array
            if(event.target.chat.value != '') {
                //Avoid empty chat messages to push
                msgs.push({text: event.target.chat.value, by: Meteor.userId()});
            }
            // reset the form
            event.target.chat.value = "";
            // put the messages array onto the chat object
            chat.messages = msgs;
            // update the chat object in the database.
            //Chats.update(chat._id, chat);
            Meteor.call("updateChat", chat._id, chat);
        }
    }
});
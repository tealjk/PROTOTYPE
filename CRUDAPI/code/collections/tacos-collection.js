
Tacos = new Meteor.Collection('tacos');

// To handle security, Meteor gives you access to Allow and Deny rules on the client. It gives a handful of operations to listen for,
// the three big ones being: insert, update, and delete. Here we just deny ALL client-side inserts (this would "break" the example in add-taco.js where I show doing Tacos.insert() directly on the client).
Tacos.allow({
    insert: function(){
        // This translates to "Should I allow client-side inserts?" and us saying "False, or no, don't do that!"
        return true;
    },
    update: function(){
        return true;
    },
    remove : function(){
        return true;
    }
});



Tacos.deny({
    insert: function(){
        // Deny inserts on the client by default.
        return false;
    },
    update: function(){
        // Deny updates on the client by default.
        return false;
    },
    remove: function(){
        // Deny removes on the client by default.
        return false;
    }
});

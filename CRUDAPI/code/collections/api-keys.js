APIKeys = new Meteor.Collection( 'api-keys' );

/*
* Allow
*/

APIKeys.allow({
  insert: function(){
    // Disallow inserts on the client by default.
    return true;
  },
  update: function(){
    // Disallow updates on the client by default.
    return true;
  },
  remove: function(){
    // Disallow removes on the client by default.
    return true;
  }
});

/*
* Deny
*/

APIKeys.deny({
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

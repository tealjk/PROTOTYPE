/*
 Meteor allows you to store functions on the server for handling things like data.
 This is the server-side component to the Meteor.call() example in add-taco.js.
 */


Meteor.methods({

    initApiKey: function( userId ) {

        check( userId, Match.OneOf( Meteor.userId(), String ) );
        /*
         can delete this var newkey to show data less secure
         */
        var newKey = Random.hexString( 32 );



        try {
            var key = APIKeys.insert({
                "owner": userId,
                "key": newKey
            });


            return key;

        } catch( exception ) {
            return exception;
        }
    }
});



    /*

    // Define our method. Note, we're passing an argument for the tacoToInsert value we passed to our Meteor.call() method.
    'addTaco': function(tacoName){
        // Here we do our insert again.
        Tacos.insert({
            taco: tacoName
        }, function(error){
            if (error) {
                // We can toss an error to the user if something fudges up.
                return error.reason;
            }
        });
    }
});

*/



Router.route( '/api/v1/student', function() {

    this.response.setHeader( 'Access-Control-Allow-Origin', '*' );
    // a pre-flight check.
    // request (GET, POST, PUT, or DELETE).
    if ( this.request.method === "OPTIONS" ) {
        this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
        this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
        this.response.end( 'Set OPTIONS.' );
    } else {

        // HTTP method.



        API.handleRequest( this, 'student', this.request.method );






    }



}, { where: 'server' } );

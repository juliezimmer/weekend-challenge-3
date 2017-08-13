var express = require ('express');
var router = express.Router();
var pool = require('../modules.pool');

router.get('/', function(req,res) {
    console.log("routerget was hit");
    //connect the get request on the server to the DB
    pool.connect(function(errorConnectingToDatabase, client, done){
        //checking for valid connection to DB
        if(errorConnectingToDatabase) {
            console.log("There was an error connecting to the DB:", errorConnectingToDatabase);
            //error status code is returned to console
            res.sendStatus(500);
        } else { //connection to DB was made so query may commence
            //query the DB for any tasks to load on the DOM
            client.query('SELECT * FROM tasks;' , function(errorMakingQuery, result){
                done();
                //checking that valid query was made
                if(errorMakingQuery) {
                    console.log("There was an error with the query:", errorMakingQuery);
                    // send the status code to the console
                    res.sendStatus(500);
                } else{ //the query was successful
                    //send the query results to the server(?) 
                    res.send(result.rows);
                }
            });
        }
    });
});
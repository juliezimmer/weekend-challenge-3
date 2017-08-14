var express = require ('express');
var router = express.Router();
var pool = require('../modules/pool');

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
                    console.log(result.rows);
                }
            });
        }
    });
});

router.post('/', function(req,res){
    console.log("post route has been hit");
    //establish connection between server and database
    pool.connect(function (errorConnectingToDatabase, client, done){
        if (errorConnectingToDatabase) {
            console.log("there has been an error connecting to the DB:", errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO tasks (task, completed, notes) VALUES ($1, $2, $3);',
            //establishes array that is used to populate the DOM
            [req.body.task, req.body.status, req.body.notes],
            function (errorMakingQuery, results) {
                done();
            if (errorMakingQuery) {
                console.log("There has been an error with the query:", errorMakingQuery);
                res.sendStatus(500);
            } else {
                res.sendStatus(200); 
            }
        });
    } 
});

});

module.exports = router;
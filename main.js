var request = require("request");
var sha256 = require("sha256");
//var https = require("https");

var urlJobs = "https://truveris.github.io/jobs/";

var options = {
    url: urlJobs,
    port: 80,
    method: 'GET'
  };


  request(options, function (error, response, body) 
  {

      console.log(body);

      console.log("\n SHA256: ",sha256(body+"adupadhy@ncsu.edu"));

  });

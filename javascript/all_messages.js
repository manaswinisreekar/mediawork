//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    all_messages.js

    MediaWiki API Demos
    Demo of `Allmessages` module: Get the Dutch translations of some messages

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    meta: "allmessages",
    ammessages: "august|mainpage|edit|rollback-success",
    amlang: "nl",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});

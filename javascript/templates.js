//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    templates.js

    MediaWiki API Demos
    Demo of `Templates` module: Get a list of templates used on a page

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    titles: "Albert Einstein",
    prop: "templates",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});

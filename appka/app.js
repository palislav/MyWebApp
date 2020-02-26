var stuff = require('./stuff');
var events = require('events');
var util = require('util');
var fs = require('fs');
var http = require('http');
var master = require('express');

var server = http.createServer(function(request, response){
    console.log('request: ' + request.url);
    if( request.url === '/home' || request.url === '/' ){
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if ( request.url === '/contact' ){
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    } else if ( request.url === '/api/dementor' ){
        var ludia = [{name: 'fero', age: 55}, {name:'Juraj', age: 27}];
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(ludia));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(3000, '127.0.0.1');
console.log('pocuvam na 3000');

/*

var server = http.createServer(function(request, response){
    console.log('request: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');

    myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('pocuvam na 3000');

var server = http.createServer(function(request, response){
    console.log('request: ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});

    var myObj = {
        name: 'Rex',
        job: 'EOT Technik',
        age: 35
    };

    response.end(JSON.stringify(myObj));

var Osoba = function(name){
    this.name = name;
};

util.inherits(Osoba, events.EventEmitter);

var james = new Osoba('james');

var joro = new Osoba('joro');

var exkrement = new Osoba('exkrement');

var people = [james, joro, exkrement];

people.forEach(function(osoba){
    osoba.on('hovori', function(mssg){
        console.log(osoba.name + ' povedal: ' + mssg);
    });
});

james.emit('hovori', 'ahojte');
joro.emit('hovori', 'pojebte sa');

fs.mkdir('stuff',function(err){
    fs.readFile('readme.txt', 'utf8', function(err, data){
       fs.writeFile('./stuff/writeme.txt', data, function(err){
       });
    });    
});

fs.unlink('./stuff/writeme.txt',function(){
    fs.rmdir('stuff', function(){
    });
});

*/
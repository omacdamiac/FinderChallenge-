/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https//codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){

    var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");
        xobj.open("GET", url, true);

        xobj.onreadystatechange = function(responseText){
            if(xobj.readyState == 4 && xobj.status == "200"){
                var content = JSON.parse(xobj.responseText);
                callback.call(this, content);
            }
        };
        xobj.send(null);
};

//filters
var listFilter = function(elemento, clase){
    var container = clase;
    container.innerHTML += `<li><a href='/'>Todos</a></li>`;
for (var m in elemento){
    if (elemento.hasOwnProperty(m)) {
        container.innerHTML +=`<li><a href='?${container}'='elemento[m].id'>${elemento[m].label}</a></li>`;
    }

}

}

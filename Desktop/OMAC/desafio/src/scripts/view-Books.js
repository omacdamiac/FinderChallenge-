function viewBooks(){



//Book list
    const listar = arr =>
         arr.map(item => `<div class='pure-u-1-3 ${item.id}'>
                   <h5>${item.title}</h5>
                   <h3>${item.title}</h3>
                   <p>${item.teaser}</p></div>`

        ).join("");
    

loadJSON(JSON_FILE,function(response) {
    var actual_JSON = response;
    var book = actual_JSON.data

var mostrar = document.querySelector(".book")
mostrar.innerHTML = listar(book);
 })



        //console.log(actual_JSON.data[1].title);
};



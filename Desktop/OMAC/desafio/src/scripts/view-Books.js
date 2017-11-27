function viewBooks(){

    loadJSON(JSON_FILE,function(response) {
    var actual_JSON = response;
    var data = actual_JSON.data;
	var entities = actual_JSON.entities;

    //Muestra de menú

    (function(){


    var categorias = entities.categories[0];
    var lenguaje = entities.lang[0];
    var publicacion = data[1].date_pub;
    var presentacion = entities.edition[0];

    var cat = document.querySelector(".cat")
    var lang = document.querySelector(".lang")
    var publi = document.querySelector(".publi")
    var prese = document.querySelector(".prese")



    publi.innerHTML = `<li><a href="/">Todos</a></li>
    <li><a href="#">Hoy</a></li>
    <li><a href="#">Hace una semana</a></li>
    <li><a href="#">Hace un mes</a></li>
    <li><a href="#">Hace un año</a></li>`;


    //Enviamos parametros
    listFilter(categorias, cat);
    listFilter(lenguaje, lang);
    //listFilter(publicacion, publi);
    listFilter(presentacion, prese);
 })()
    //Muestra de libros
    var book = document.querySelector(".book")
    var itemsBooks = 6; //número de libros
    	book.innerHTML="";

    data.forEach( function(vb,index){
    	if(index < itemsBooks){
    		book.innerHTML += `<div class='pure-u-1-3 ${vb.id}'>
                   <image src='${vb.image}'>
                   <h3>${vb.title}</h3>
                <p>${vb.teaser}</p></div>`
    	}
    	})

////////////

    //Paginación
    book.innerHTML += `<div class="pure-u-1 pagination"><a href="#">anterior</a> | 
    					<a href="#">siguiente</a>`
    
})
};
//solo afecta content, dejamos libre filter
const backSearch = function(){
	loadJSON(JSON_FILE,function(response) {
    var actual_JSON = response;
    var data = actual_JSON.data;
	var entities = actual_JSON.entities;

    //Muestra de menú


    //Muestra de libros
    var book = document.querySelector(".book")
    var itemsBooks = 6; //número de libros
    	book.innerHTML="";

    data.forEach( function(vb,index){
    	if(index < itemsBooks){
    		book.innerHTML += `<div class='pure-u-1-3 ${vb.id}'>
                   <image src='${vb.image}'>
                   <h3>${vb.title}</h3>
                <p>${vb.teaser}</p></div>`
    	}
    	})

////////////

    //Paginación
    book.innerHTML += `<div class="pure-u-1 pagination"><a href="#">anterior</a> | 
    					<a href="#">siguiente</a>`
    
})
}



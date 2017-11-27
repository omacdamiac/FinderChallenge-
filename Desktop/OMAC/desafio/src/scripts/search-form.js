function searchForm(){

  loadJSON(JSON_FILE, function(response) {
    var actual_JSON = response;
    var data = actual_JSON.data;
    var listSearch = [];
    data.forEach(function(item, index){
      listSearch.push(item.title)

    })
    new Awesomplete(document.querySelector("#txtSearch"),{ list: listSearch, minChars: 2 });


////////////
self.searching = function(){
    var actual_JSON = response;
    var data = actual_JSON.data;
   var book = document.querySelector('.book');

   var valueTxt = document.getElementById('txtSearch').value;
   valueTxt = valueTxt.toLowerCase().trim();
   book.innerHTML = '';
   data.forEach(function(item, index){
     var title = item.title.toLowerCase().trim();
     var a = title.indexOf(valueTxt);
     if (!a){
       book.innerHTML += `<div class='pure-u-1-3 ${item.id}'>
                   <image src='${item.image}'>
                   <h3>${item.title}</h3>
                <p>${item.teaser}</p></div>`;
     }
   })
   if (book.innerHTML == '') {
      book.innerHTML = '<h1>Sin resultados.</h1> <button type="button" id="refresh" class="pure-button buttonBack">Volver</button>'
   } else {
     book.innerHTML += '<button type="button" id="refresh" class="pure-button buttonBack">Volver</button>'
   }
 }
  });

	
}

 document.addEventListener('click', function(e){
   if(e.target && e.target.id == 'refresh'){
     backSearch();
   }
   if(e.target && e.target.id == 'btnSave'){
     e.preventDefault;
     var valueTxt = document.getElementById('txtSearch').value;
     if (valueTxt.length >= 3){
       var searchs = document.querySelector('.guar');
       searchs.innerHTML +=`<span class='search-list'>
         <li><a href='/#/${valueTxt}'>${valueTxt}</a></li>
         <span class='search-option'>
          <li><a class='edit' href='/#/?edit=${valueTxt}'>Editar</a> | <a class='delete' href='/#/?del=${valueTxt}'>Eliminar</a></li>
        </span>
       </span>`;
     } else {
       alert('Debes realizar una busqueda para poder guardar.')
     }
   }
   if(e.target && e.target.className == 'delete'){
     var el = e.target, i = 3;
     while(i-- && (el = el.parentNode));
     el.remove();
   }
});




	document.querySelector("#txtSearch").addEventListener("input", function(){
	function stateBtnSearch(){
	var val = input.value.length;
	var button = document.getElementById("btnSearch");
	var estate;
	(val >= 3)? estate = false : estate = true;
	button.disabled = estate;
	} });

 document.querySelector("form").addEventListener('submit', function(e){
	e.preventDefault();
	searching();
 });
 window.addEventListener("awesomplete-selectcomplete", function(e){
   document.getElementById('btnSearch').disabled = false;
 }, false);


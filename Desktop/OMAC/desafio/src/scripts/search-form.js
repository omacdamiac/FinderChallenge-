function searchForm(){


 const titles = arr =>
         arr.map(item => item.title

        ).join(", ");
    

loadJSON(JSON_FILE,function(response) {
    var actual_JSON = response;
    var book = actual_JSON.data;
    var otro = titles(book);


var search = document.getElementById("txtSearch");

new Awesomplete(search,{
	list: otro



});

});

}


let searching = function(){
	
}
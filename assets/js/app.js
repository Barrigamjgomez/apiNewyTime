const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
1et searchedFortext;

form.addEventListener('submit',function(e){ //al formulario le agregamos un evento
	e.preventDefaul();
	responseContainer.innerHTML ='';
	searchedFortext = searchField.value;
	getNews();
});

/*for(var i=1; i<=10;i++){ 
    $('#card').append($('<img>').attr('id',i).attr('data-toggle', "modal").attr('data-target', '#exampleModal').attr('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))   
}*/

    $('img').on('click', function(event) {
        var id =$(this).attr('id');
    $.get("https://anapioficeandfire.com/api/houses/" + id, function(res) {
        console.log(res);
        var nombre = res.name;
        var palabra = res.words;
        /*var titulo = res.titles;*/
        console.log(nombre);
        console.log(palabra);

        for(var i = 0; i < res.titles.length; i++) {
        var titulo= titulo + res.titles[i];
    }
    console.log(titulo);

    $('.modal-body').append("<h4> Nombre: </h4>" + "<p>"  +  nombre + "</p>");
    $('.modal-body').append("<h4> Palabras: </h4>"+"<p>" + palabra+ "</p>");
    $('.modal-body').append("<h4> Titulos: </h4>"+"<p>" + titulo + "</p>");

    });
    //event.stopPropagation();
});

$('.close').on('click', function(event) {
    $('.modal-body').empty();

});






/*for(var i=1; i<=24;i++){ 
    $('#card').append($('<img>').attr('id',i).attr('data-toggle', "modal").attr('data-target', '#exampleModal').attr('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))   
}*/

    $('img').on('click', function(event) {
        var id =$(this).attr('id');
    $.get("https://anapioficeandfire.com/api/houses/378" + id + "/", function(res) {
        console.log(res);
        var nombre = res.name;
        var palabra = res.words;
        var titulo = res.titles;
        console.log(nombre);

        /*for(var i = 0; i < res.types.length; i++) {
        var tipo= res.types[i].type.name;
    }*/

    $('.modal-body').append("<h4> Nombre: </h4>" + "<p>"  +  nombre + "</p>");
    $('.modal-body').append("<h4> Altura: </h4>"+"<p>" + palabra+ "</p>");
    $('.modal-body').append("<h4> Peso: </h4>"+"<p>" + titulo + "</p>");

    });
    //event.stopPropagation();
});

$('.close').on('click', function(event) {
    $('.modal-body').empty();

});





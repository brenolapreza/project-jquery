// O append irá basicamente concatenar o p
$('.btn').mouseenter(function(e){
    e.preventDefault();
    $('p').append(' AE CARALHO')
})
$('.btn').mouseleave(function(e){
    e.preventDefault();
    $('p').text('Como assim')
})

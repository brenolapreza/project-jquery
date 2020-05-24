/*$('.btn').click(function(){
    $('.sumir').toggleClass('aparecer')
})*/

$('.btn').click(function(){
    $('.sumir').toggleClass('aparecer')
    var condicao = $('.sumir').hasClass('aparecer')
    if(condicao){
        $(this).text('Fechar modal')
    }
    else{
        $(this).text('Abrir modal')
    }
})
$('.input').on('submit', function(e){
    e.preventDefault()
    let title = $('input').eq(0).val()
    let rating = $('input').eq(1).val()
    let li = $(`<li>MOVIE: ${title} //RATING: ${rating}</li>`).appendTo('ul');
    $("<button id='remove'>X</button>").appendTo(li)
    $('button').on('click', function(){
        console.log(this)
        $(this).parent().remove()
    })
})

$('input').eq(1).on('change', function(){
    let value = $('input').eq(1).val()
$('label').eq(1).text(`Rating: ${value}`)
})
$(document).ready(function(){console.log("Let’s get ready to party with jQuery")
})


$("article img") .addClass("image-center")

$('p').last().remove()

$("[id~='title']").css("font-size", (Math.random()*100))

$('ol').append("<li>IM NEW</li>")

$("aside").empty().append("<p>Sorry this list was stupid</p>")

$('input').on('change', function(){
    let red = $('input').eq(0).val()
    let blue = $('input').eq(1).val()
    let green = $('input').eq(2).val()
   $('body').css("background-color", `rgb(${red}, ${blue}, ${green})`)

})

$('img').on('click', function(){
    $(this).remove()
})
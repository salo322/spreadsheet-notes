let curDate = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});
document.getElementById("date-brwcwbxs").innerHTML = curDate;

$('.button-morqscjc').click(function(){
    let val = $('.new-note-slmxyicv-1').val();
    let val2 = $('.new-note-slmxyicv-2').val();
   if(val.length > 1){
    $('.ul-list-items-jgdguwgdjq').append("<li class='li-html-gufidfifug'>"
    + `<div class=curDate-vvugi>${curDate}</div>`
     +`<div class='val-hgfhgdufg'><div class="margin-svjsj">${val}</div></div>`
       +"<div class='img-flex-ddtg'><img src='./images/copy.png' class='copy'>"
    + " <img src='./images/delete.png' class='cancel-btn'></div>"+
    `<div class='hide-div-yuuugu'><div class="second-val-vdfjb">${val2}</div><img src=''></div>`+
    "</li>");
    
    $('.new-note-slmxyicv-1').val("").focus();
    $('.new-note-slmxyicv-2').val("").focus();
    $('.cancel-btn').click(function(){
        $(this).parent().parent('li').fadeOut();
      })
      $('.second-val-vdfjb').css('display', 'none')
    $('.val-hgfhgdufg').click(function(){
        console.log('note works');
        $('.curDate-vvugi').css('display', 'none');
        $('.val-hgfhgdufg').css('display', 'none');
        $('.img-flex-ddtg').css('display', 'none');
        $('.second-val-vdfjb').css('display', 'block');

    })
   }
  
});

  
/* $('.ul-list-items-jgdguwgdjq').append( `<div class='hide-div-yuuugu'><div class="second-val-vdfjb">${val2}</div></div>`) */
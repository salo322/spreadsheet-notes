let allDate = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});
document.getElementById("date-brwcwbxs").innerHTML = allDate;


let button = document.querySelector('.button-morqscjc');
button.addEventListener('click',function(){
    let itemValue = document.querySelector('.new-note-slmxyicv-1').value;
    let ulVal = document.querySelector('.ul-list-items-jgdguwgdjq');
    
    let html = `
    <div class="flex-knanaiifj">
    <li> ${allDate}</li>
    <li>${itemValue}</li>
    </div>
    `
    ulVal.innerHTML+= html;
    
})

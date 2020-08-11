document.querySelector('#authorize_button').addEventListener('click',function(){
chrome.runtime.sendMessage({cmd: 'doAuthorize'}, function (signedIn) {
    if(signedIn){
        document.querySelector('.g-sign-in-container-1').style.display = 'none';
        document.querySelector('.google-sign-in-div-1').style.display = 'block';
        document.querySelector('#signout_button').onclick = signOutClick;
    }else{
        document.querySelector('.google-sign-in-div-2').style.display = 'block';
        document.querySelector('.google-sign-in-div-1').style.display = 'none';  
        document.querySelector('#authorize_button').onclick = signInClick;
    }
           
    });
   
})

chrome.storage.local.get(['getToken'], function(result) {
    console.log(result.getToken);
    if(result.getToken){
        document.querySelector('.g-sign-in-container-1').style.display = 'none';
        document.querySelector('.google-sign-in-div-1').style.display = 'block';
        document.querySelector('#signout_button').onclick = signOutClick;
    }else{
        document.querySelector('.g-sign-in-container-1').style.display = 'block';
        document.querySelector('.google-sign-in-div-1').style.display = 'none';  
        document.querySelector('#authorize_button').onclick = signInClick;
    }
  });

function signOutClick(event){
    chrome.runtime.sendMessage({cmd: 'signOut'}, function (token) {
         console.log('works');
     document.querySelector('.g-sign-in-container-1').style.display = 'block';
     document.querySelector('.google-sign-in-div-1').style.display = 'none';  
        
});
}

function signInClick(event){
   chrome.runtime.sendMessage({cmd: 'doAuthorize'}, function (resp) {
        console.log(resp);
    });
}




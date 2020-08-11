const API_KEY = "AIzaSyDc6uklXnZfPT2dwKInOpNznAdFGWnYNUQ";
const CLIENT_ID = "707683913606-vehdtsceu12bj2tgp6599j0ha7fq3q0d.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
const SPREADSHEET_ID = '1cHztpNp0LulgzutQA5KF675EROuq0ExKyDARPyXztTg';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';
const SPREADSHEET_TAB_NAME = 'Sheet1';


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.cmd){
    case "doAuthorize":doAuthorize(sendResponse);break;
  case "getAuthorize":getAuthorize(sendResponse);break;
  case "signOut":signOut(sendResponse);break;
  }
  return true;
});


function doAuthorize(sendResponse){
	chrome.identity.getAuthToken(
		{'interactive': true},
		function(token){
      console.log('this is the token: ', token);
      chrome.storage.local.set({getToken: token}, function() {

        sendResponse(token)
      });
      gapi.client.init({
        // Don't pass client nor scope as these will init auth2, which we don't want
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
      }).then(function () {
        console.log('gapi initialized')
        chrome.identity.getAuthToken({interactive: true}, function(token) {
          gapi.auth.setToken({
            'access_token': token,
          });
    
          gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SPREADSHEET_TAB_NAME,
          }).then(function(response) {
            var range = response.result;
            console.log(range)
          });


        })
        
      }, function(error) {
        console.log('error', error)
      });
		});
}

function signOut(sendResponse){
  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
      let url = 'https://accounts.google.com/o/oauth2/revoke?token=' + token;
      window.fetch(url);
      chrome.identity.removeCachedAuthToken({token: token}, function (){  
    console.log("signed out")
    chrome.storage.local.remove(["getToken"],function(){
      var error = chrome.runtime.lastError;
         if (error) {
             console.error(error);
         }
     })
          });
})
sendResponse();
}





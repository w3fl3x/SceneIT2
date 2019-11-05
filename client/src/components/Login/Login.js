import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './Login.css';
class Login extends Component {
  
  
  componentDidMount(){
    (function() {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    })();    
}

//Triggering login for google
googleLogin = () => {
    let response = null;
    window.gapi.auth.signIn({
        callback: function(authResponse) {
            this.googleSignInCallback( authResponse )
        }.bind( this ),
        clientid: "716076722671-f0hcpl5nivs848o9blga7jnntja8sq63.apps.googleusercontent.com", //Google client Id
        cookiepolicy: "single_host_origin",
        requestvisibleactions: "http://schema.org/AddAction",
        scope: "https://www.googleapis.com/auth/plus.login email"
    });
}

googleSignInCallback = (e) => {
    console.log( e )
    if (e["status"]["signed_in"]) {
        window.gapi.client.load("plus", "v1", function() {
            if (e["access_token"]) {
                this.getUserGoogleProfile( e["access_token"] )
            } else if (e["error"]) {
                console.log('Import error', 'Error occured while importing data')
            }
        }.bind(this));
    } else {
        console.log('Oops... Error occured while importing data')
    }
}

getUserGoogleProfile = accesstoken => {
    var e = window.gapi.client.plus.people.get({
        userId: "me"
    });
    e.execute(function(e) {
        if (e.error) {
            console.log(e.message);
            console.log('Import error - Error occured while importing data')
            return
        
        } else if (e.id) {
            //Profile data
            alert("Successfull login from google : "+ e.displayName )
            console.log( e );
            return;
        }
    }.bind(this));
}

 render() {
   return(
     <div className="btn-group" role="group">
       <button id="btnGroupDrop1" type="button" className="btn btn-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <i className="fas fa-sign-in-alt"></i>
       </button>
       <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
       <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"
       data-redirect='https://sceneit2-h.herokuapp.com/'></div>
       </div>
     </div>
   )
 }
};
export default Login;
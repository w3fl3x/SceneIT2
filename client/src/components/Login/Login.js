import React, { Component } from "react";
import './Login.css';
<<<<<<< Updated upstream

=======
import { GoogleLogin, GoogleLogout } from 'react-google-login';
>>>>>>> Stashed changes
class Login extends Component {
  
    state={
        isSignedIn: false
<<<<<<< Updated upstream
    }
  
=======
      }

>>>>>>> Stashed changes
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
logoutSuccess = () => {
    this.setState({isSignedIn: false})
    console.log(this.state)
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
<<<<<<< Updated upstream
    this.setState((state) => {
        return{isSignedIn: true}
    })
=======
    this.setState({isSignedIn: true})
    console.log(this.state, 'After Signed In!')
>>>>>>> Stashed changes
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

responseGoogle = (response) => {
    console.log(response) //client information 
    this.setState({isSignedIn: true})
}

 render() {
     console.log(this.state)
   return(
     <div className="btn-group" role="group">
       <button id="btnGroupDrop1" type="button" className="btn btn-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
         <i className="fas fa-sign-in-alt"></i>
       </button>
       <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        { !this.state.isSignedIn
            ?  <GoogleLogin 
                clientId="716076722671-f0hcpl5nivs848o9blga7jnntja8sq63.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={ this.responseGoogle }
                />
            : <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={ this.logoutSuccess}
                />

        }
       {/* <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" onClick= { this.googleLogin }
       data-redirect='https://sceneit2-h.herokuapp.com/'></div> */}
       </div>
     </div>
   )
 }
};
export default Login;
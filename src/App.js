import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi(); // variable to communicate btwn our react app and spotify


function App() {

    const [{user, token}, dispatch] = useDataLayerValue(); //dispatch is like a gun to get and change value from DataLayer


    //useEffect is used to run code based on a given condition
    useEffect(()=> {

        const hash = getTokenFromUrl(); //method in spotify.js
        window.location.hash = ""; //clearing the access_token from url
        const _token = hash.access_token; //we declare _ (underscore) before variable, when it is just temporarily used

        if(_token){
            dispatch({
                type: 'SET_TOKEN',
                token:_token
            })




            spotify.setAccessToken(_token); //telling spotify app that this is the token for all the services we will use

            spotify.getMe().then(user => {

                dispatch({
                    type: 'SET_USER',
                    user:user
                });
            });
        }

      //  console.log('I have a token : ',token );

        // Now we don't want to show the access token to be displayed to the user, so we will clear it from displaying to user.
    },[]);
//if we want to run above useEffect code just once, use [], otherwise type the name of the component [name] and it will run whenever
// name variable changes itself.

  //  console.log("user is : >>>", user); //accessing the user from dataLayer.
  //  console.log("token is: >>>", token);

  return (
    <div className="app">
        {
            //We check if we have a token, load the player component, otherwise show Login. We will use ternary operator
            token ? (
                <Player spotify={spotify}/>
            ) : (
                <Login />
            )
        }

    </div>
  );
}

export default App;

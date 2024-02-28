import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import {gapi} from 'gapi-script';
const clientId="772998483703-9ctf7at003dbknh5cka1p4vc5g42lioo.apps.googleusercontent.com";
function App() {
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId:clientId,
          scope:""
        })
      };
      gapi.load('client:auth2',start);
    });
  
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;

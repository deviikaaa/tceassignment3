import {GoogleLogout} from 'react-google-login';
const clientId="772998483703-9ctf7at003dbknh5cka1p4vc5g42lioo.apps.googleusercontent.com";
function Logout(){
    const onSuccess=()=>{
        console.log("Log out successful!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
export default Logout;
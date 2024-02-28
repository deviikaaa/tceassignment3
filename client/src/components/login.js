import {GoogleLogin} from 'react-google-login';
const clientId="772998483703-9ctf7at003dbknh5cka1p4vc5g42lioo.apps.googleusercontent.com";
function Login(){
    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}
export default Login;

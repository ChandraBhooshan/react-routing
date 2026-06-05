import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Work.css";


function Work() {
  const navigate = useNavigate();

  // function handleLogout() {
  //   googleLogout();
  // }
  return (
    <div className="work-page">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/home");
        }}
        onError={() => console.log("Login failed")}
        auto_select={true}
      />
    </div>
  );
}

export default Work;

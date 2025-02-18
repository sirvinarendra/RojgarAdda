import App from "./App";
import CompanyModule from "./company/CompanyModule";
import UserModule from "./user/Usermodule";

function Mainmodule() {
  if (localStorage.getItem("userid") === null) {
    return <App></App>;
  } else {
    if (localStorage.getItem("usertype") === "USER") {
      return <UserModule />;
    } else {
      return <CompanyModule />;
    }
  }
  
}
export default Mainmodule;

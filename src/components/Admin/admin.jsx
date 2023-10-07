import "./admin.scss";
import Navbar from "../navbar/Navbar";

function Admin() {
  return (
    <>
      <div className="containerAdmin">
        <img src="./images/icon.png" width="300px" alt="logo hunger road" />
        <h1 className="text-center">Admin area</h1>
        <form className="text-center">
          <div className="adminInput">
            <input
              type="text"
              id="adminUserName"
              placeholder="Username..."
              className="btn border-black rounded"
            />
          </div>
          <div className="adminInput">
            <input
              type="password"
              id="adminPassowrd"
              placeholder="Password..."
              className="btn border-black rounded"
            />
          </div>
          <div className="adminLoginBtn">
            <input type="submit" value="Login" className="btn" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Admin;

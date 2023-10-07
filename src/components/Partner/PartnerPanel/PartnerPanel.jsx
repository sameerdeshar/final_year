import React from "react";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
import './partnerpanel.sass'

function PartnerPanel(){
      return(
            <div className="PartnerPanelContainer">
                  <Navbar />
                  <div className="headingPartnerPanel">
                        <h1>
                        Partner Panel
                        </h1>

                  <div className="bodyPartnerPanel">
                  <form>
                        <div className="filedPanel">
                              <input type="email" placeholder="Email..." id="email" required />
                        </div>
                        <div className="filedPanel">
                              <input type="password" placeholder="Password..." id="password" required />
                        </div>
                        <input type="submit" value="Login" className="loginPartnerPanel" />
                        <div className="forgotPasswordPartner">
                        <Link to="/login">Forgot  password?</Link>
                        </div>
                  </form>
                  </div>
                  </div>
            </div>
      )
}

export default PartnerPanel
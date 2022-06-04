import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../Style/Header.css";

class Header extends Component {
    render() {
        return (
            <div id="head">
                <table style={{width:"100%"}}>
                    <tr>
                        <center>
                            <td>
                                <h2>
                                <Link to="/" className="link" >Home</Link>
                                |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                <Link to="/menu_makanan" className="link" >Makanan</Link>
                                |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                <Link to="/menu_minuman" className="link" >Minuman</Link>
                                |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                <Link to="/kontak" className="link" >Kontak</Link>
                                |
                                </h2>
                            </td>
                        </center>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Header;
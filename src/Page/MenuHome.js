import React, {Component} from "react";
import Header from "../Page/Header";
import "../Style/Header.css";

class MenuHome extends Component {
    render() {
        return(
            <div>
                <Header />
                <h1>Selamat Datang Di Halaman Utama Masakan Nusantara</h1>
                <br></br>
                <div className="image_header">
                    <br></br>
                </div>
            </div>
        );
    }
}

export default MenuHome;
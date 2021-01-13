
import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import "./Main.scss";

function Main() {
    const [CheckDataMenu, setCheckDataMenu] = useState(false);

    const handleMenu = () => {
        setCheckDataMenu(!CheckDataMenu);
    };

    return (
        <div className="main-wrapper">
            <Header handleMenu={handleMenu} />
            <div className="sroll-main-view">
                <div className="main-view-wrapper">
                    <h3> </h3>
                    {CheckDataMenu ? <Menu /> : <div></div>}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Main;
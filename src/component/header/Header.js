import React from "react";
import "./Header.scss";

function Header() {

    return (
        <div className="header">

            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="IMG"
            />

            <div className="header__search">
                <input type="text" className="header__searchInput" />
            </div>

            <div className="header__nav">

                <div onClick className="header__option">
                    <span className="header__optionLineOne">
                    </span>
                    <span className="header__optionLineTwo">
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <span className="header__optionLineTwo header__basketCount"></span>
                </div>
            </div>
        </div>
    );
}
export default Header;
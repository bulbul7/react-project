import React from "react";
import {Outlet} from "react-router-dom"
import LeftMenu from "./LeftMenu";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return(
        <div id="wrapper">
            {/*Left Menu*/}
            <LeftMenu />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/*Header*/}
                    <Header />
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>

                {/*/ Footer*/}
                <Footer />
                {/*/End  Footer*/}

            </div>

        </div>
    );
}
export default Layout;
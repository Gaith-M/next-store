import { ReactElement } from "react";
import Navbar from "./navigation/navbar";

const Layout = (props : any): ReactElement => {

    return (
        <>
            <Navbar/>

            {props.children}

            <footer>
                <h4>footer</h4>
            </footer>
        </>
    )
}

export default Layout;

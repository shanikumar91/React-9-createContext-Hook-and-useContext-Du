import { useContext } from "react";
import myContext from "../context/myContext";

export default function Navbar(){
    const {theme} = useContext(myContext);
    return(
        <nav style={{backgroundColor:theme == "light" ? "lightblue" : "black", 
        color : theme == "light" ? "black" : "white", padding: "15px",fontSize:"18px", margin: "5px",
        borderRadius:"5px" }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </div>
        </nav>
    );
}
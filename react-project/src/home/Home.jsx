import { useContext } from "react";
import myContext from "../context/myContext.js";

export default function Home(){
    const{theme, setTheme} = useContext(myContext);
    const handleClick = ()=>{
        setTheme(theme=="light" ? "dark" : "light");
    }
    return(
            <div className="cont p-3 text-white rounded-2 m-1"
                 style={{backgroundColor: theme=="light" ? "skyblue" : "black"}}>
                    <h4>Current Theme : {theme}</h4>
                    <button className="btn btn-primary" onClick={handleClick}>Change Theme</button>
            </div>
        );
}
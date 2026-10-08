import { useState } from "react"
import myContext from "./myContext.js";
export default function ContextMain({children}){
    const[theme, setTheme]=useState("light");
    // const[count, setCount] = useState(0);

    const defaultTheme = {theme, setTheme}
    return(
        <myContext.Provider value={defaultTheme}>{children}</myContext.Provider>
    );
}
import React from "react";
import classes from "./MySelect.module.css";


const MySelect = function({defaultValue, options, bod, ...props}) {

    return (
        <select {...props} className={classes.mySelect}>
          {options.map(option =>
            <option 
            key={option.name} 
            value={option.value}
            
            >
                {option.name}
            </option>)}
        </select>
            
    )

}

export default MySelect
import React from "react";
import classes from "./MySelect.module.css";


const MyTaskSelect = function({defaultValue, options, bod, ...props}) {

    return (
        <select {...props} className={classes.mySelect} onClick={()=>console.log(bod)}>
          {options.map((option) => 
            {bod === option.name
              ?  <option 
                key={option.name} 
                value={option.value}
                selected
                >
                    {option.name}
                </option>

                :    <option 
                    key={option.name} 
                    value={option.value}
                    >
                        {option.name}
                    </option>
            }
           )}
            
        </select>
            
    )

}

export default MyTaskSelect
import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import { useState } from "react/cjs/react.development";
import { format, formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { Select } from "@mui/material";


const TaskCreate = function({crTask, visible, tasks}) {
    
  const [selectChoice, setSelectChoice] = useState('High')
  const [inputText, setInputText] = useState('')
  
  const hui = document.querySelector('.hui')
  
    const addNewTask = function() {
        const newTask = {
            name: inputText,
            body: selectChoice,
            id: Date.now()
        }
        crTask(newTask)
        setInputText(' ')
        setSelectChoice('High')
    }

    return (
        <div className={visible
            ? "create__form"
            : "create__form hidd"
          }
        >
          <div className="create__form_sel">
         
            <Input
                // style = {{maxWidth: '500px', width: '100%'}}
                value={inputText}
                onChange={e => setInputText(e.target.value)}/>
            <MySelect
              value={selectChoice}
              onChange={e => setSelectChoice(e.target.value)}
              defaultValue="Priorety" 
              options = {[
                    {value: 'High', name: 'High'},
                    {value: 'Medium', name: 'Medium'},
                    {value: 'Low', name: 'Low'},
                ]}
                />
                
          </div>
          <div className="buttons__block">
            <Button
              style = {{margin: '5px'}}
              onClick={addNewTask}>Create task</Button>  
            </div>
          
        </div>
    )
}

export default TaskCreate;
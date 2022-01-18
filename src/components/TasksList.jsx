import { format } from "date-fns";
import formatDistance from "date-fns/formatDistance";
import { ru } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import TaskCreate from "./TaskCreate";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";
import MyTaskSelect from "./UI/MySelect/MyTaskSelect";



const TasksList = function({task, deleteT, change}) {
    
    const [choice, setChoice] = useState(false)
    const [date, setDate] = useState('')

    
    

    function activeTask() {

        setChoice(!choice)
    }

    function deleteTask() {
        
        deleteT(task.id)
    }

    function changeDate(e) {
        let distDate = formatDistance(new Date(e.target.value), new Date(),  {addSuffix: true})
        setDate(distDate)
        
    }
    return(
        <div className={choice
            ? "task__body active"
           
            : "task__body"
        }>
        
        
        
              <div>
                  <div className="task__h">
                      <span>{task.name}</span>
                  </div>
                  
                  <hr />
                  <div className="buttons__block">
                    <MySelect 
                        value={task.body}
                        onChange={e =>  change(e.target.value, task.id)}
                        style={{marginTop: '6px'}}
                        defaultValue="Priorety" 
                        options = {[
                            {value: 'High', name: 'High'},
                            {value: 'Medium', name: 'Medium'},
                            {value: 'Low', name: 'Low'},
                        ]}
                        >
                      {task.body}</MySelect>
                      <span class="datepicker-toggle">
                        <span class="datepicker-toggle-button"></span>
                        <input type="datetime-local" value={date} onChange={changeDate} class="datepicker-input"/>
                        </span>
                        <div className="date__text">{date}</div>
                  </div>
                  
              </div>
              <div className="task__options">
                  <div className="task" onClick={activeTask}></div>
                  <div className="delete__task"
                    onClick={deleteTask}> 
                    </div>
              </div>
              
          </div>
    )
}

export default TasksList;
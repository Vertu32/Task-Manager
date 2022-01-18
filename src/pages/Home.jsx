import React, { useContext, useEffect, useState } from "react";
import MyButton from "../components/UI/MyButton/MyButton";
import MyInput from "../components/UI/MyInput/MyInput";
import TasksList from "../components/TasksList";
import '../style/App.css'
import MySelect from "../components/UI/MySelect/MySelect";
import TaskCreate from "../components/TaskCreate";
import { useFetching } from "../components/hooks/fetching";
import PostService from "../components/API/PostService";
import { AuthContext } from "../components/context";

const Home = function() { 

  const [tasksArr, setTaskArr] = useState([])

  const [inputVisib, setInputVisib] = useState(false)
  
  const [weather, setWeather] = useState([])
  
  const {isAuth, setIsAuth} = useContext(AuthContext)

  

  const changeTask = function(taskSel, changeTaskId) {
    setTaskArr(tasksArr.map(task =>  task.id == changeTaskId
        ? {...task, body: taskSel}
        : task
    
    ))
    
  }

  const logout = function() {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  const createInput = function() {
    setInputVisib(!inputVisib)
  }
  const createTask = function(newTask) {
    setInputVisib(!inputVisib)
    setTaskArr([...tasksArr, newTask])
  }

  const deleteTask = function(taskId) {
    setTaskArr(tasksArr.filter(task => taskId !== task.id))
  }

  
  const [fetchWeather, isPostLoading, fetchError] = useFetching(async () => {
     const weath = await PostService.getAll();
    setWeather(weath.data.main)
  }) 

  useEffect(() => {
    fetchWeather();
  }, [])
  

  

  console.log(weather)


  return (
    <div className="App">
      <div className='wrapper'>
    
        <div className="header_block">
          <h1 className="header__text ">TaskManager</h1>
          <button className="logout" onClick={logout}>
            <img src="https://img.icons8.com/windows/35/000000/exit.png"/>
          </button>
        </div>

      <div className="tasks__body">
        {tasksArr.length > 0
        ? tasksArr.map(task => 
          <TasksList 
            key={task.id}
            task={task}
            deleteT={deleteTask}
            change={changeTask}
            />
        )
        : <div className="welcome__block">Create your Tasks</div>
        }
        
          <div>
            <button
            onClick={createInput} 
            className={inputVisib
              ? "create__task hidd"
              : "create__task"
            }>
              <div className="plus"></div>
            </button>
          </div>

         <TaskCreate
          crTask={createTask}
          visible={inputVisib}
          tasks={tasksArr}
         />
         
          
        </div >
        
          
            {isPostLoading
              ? <div>Loading...</div>
              :  fetchError
                ? <div>error</div>
                :<div className="weather__block"> 
                    <h2 className="weather__head">The weather in Moscow</h2>
                    <div>Temperature  {Math.floor(weather.temp-273.15)}℃</div> 
                    <div>Pressure  {Math.floor(weather.pressure)}</div>
                    <div>Sea-level  {Math.floor(weather.sea_level)}</div>  
                </div>  
            }
       
        
      </div>
      
    </div>
  );
}

export default Home;
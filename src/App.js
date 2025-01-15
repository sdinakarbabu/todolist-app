import { Component, useState } from 'react';
import './App.css';


function App() {

  var datafetch = JSON.parse(localStorage.getItem("todolist")) // Accessing Local Data Previous
  const [todos,setTodos] = useState((datafetch == null)?[]:datafetch);
  const addTask = ()=>{
    var searchInputEle = document.getElementById("searchInput").value;
    var fetchdate = new Date();
    var Data = {
      "taskName":searchInputEle,
      "time": fetchdate.toLocaleTimeString(),
      "date":fetchdate.toLocaleDateString()
    }
    setTodos([...todos , Data]) // setting new data
    document.getElementById("searchInput").value = ''; // Input Clearing
  }
  localStorage.setItem("todolist",JSON.stringify(todos)); // Storing data

  return (
    <main>
      <header className="headerContainer">
        <h1 className="appHeading">TodoList</h1>
      </header>
      <section className="searchColumn">
        <div className="searchContainer">
          <input type="text" placeholder="Enter Task" id="searchInput" className="searchInput" /><br/>
          <button type="button" className="btn" onClick={addTask}>Create</button>
        </div>
        <button className='resetBtn' onClick={()=>{localStorage.removeItem("todolist"); window.location.reload()}}>Reset</button>
      </section>
      <ul className='displayListContainer'>
        <li className='eachListBlock'>
          <p className='task'>Task Name</p>
          <p className='task'>Date</p>
          <p className='task'>Time</p>
          <p className='task'>Delete/Edit</p>
        </li>
        {
            (datafetch == '')?<li className='eachListBlock' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><p className='task' style={{color:'#fff',fontWeight:'bold',fontSize:'28px',paddingLeft:'8em'}}>No Data</p> </li> : todos.map((each)=>{
              return <li className='eachListBlock'>
                <p className='task'>{each.taskName}</p>
                <p className='task'>{each.time}</p>
                <p className='task'>{each.date}</p>
                <p className='task BtnBlock'>
                  <button className='task-btn' onClick={()=>{
                    var getData = todos.filter((eachs)=>{
                      var itemName = eachs.taskName;
                      return itemName !== each.taskName;
                    })
                    setTodos(getData)
                  }}>Delete</button>
                  <button className='task-btn' onClick={()=>{
                    var UpdatedTask = prompt();
                    var getDataFiltered=[]
                    todos.forEach(element => {
                      if(each.taskName === element.taskName){
                        element.taskName = UpdatedTask;
                        var updateDate = new Date();
                        element.time = updateDate.toLocaleTimeString();
                        element.date = updateDate.toLocaleDateString();
                        getDataFiltered.push(element)
                      }
                      else{
                        getDataFiltered.push(element)
                      }
                    });
                    setTodos(getDataFiltered)
                  }}>Edit</button>
                </p>
              </li>
            })
        }
      </ul>
    </main>
  );
}

export default App;



// class App extends Component {
//   constructor() {
//     super();
//     const datafetch = JSON.parse(localStorage.getItem("todolist")) // Accessing Local Data Previous
//     // const [todos,setTodos] = useState((datafetch == null)?[]:datafetch); 
//     this.state = {todos: (datafetch == null)?[]:datafetch,datafetch:datafetch};
//   }
//    addTask = ()=>{
//     const {todos} = this.state
//     var searchInputEle = document.getElementById("searchInput").value;
//     var fetchdate = new Date();
//     var Data = {
//       "taskName":searchInputEle,
//       "time": fetchdate.toLocaleTimeString(),
//       "date":fetchdate.toLocaleDateString()
//     }
//     this.setState((prev)=>({todos: [...prev.todos , Data]})) // setting new data
//     document.getElementById("searchInput").value = ''; // Input Clearing
//   }
//   render(){
//     const {todos,datafetch} = this.state
//     // const datafetch = JSON.parse(localStorage.getItem("todolist")) // Accessing Local Data Previous
//     // const [todos,setTodos] = useState((datafetch == null)?[]:datafetch); 
//     localStorage.setItem("todolist",JSON.stringify(this.todos)); // Storing data
//     return (
//       <main>
//         <header className="headerContainer">
//           <h1 className="appHeading">TodoList</h1>
//         </header>
//         <section className="searchColumn">
//           <div className="searchContainer">
//             <input type="text" placeholder="Enter Task" id="searchInput" className="searchInput" /><br/>
//             <button type="button" className="btn" onClick={this.addTask}>Create</button>
//           </div>
//           <button onClick={()=>{localStorage.removeItem("todolist")}}>Reset</button>
//         </section>
//         <ul className='displayListContainer'>
//           <li className='eachListBlock'>
//             <p className='task'>Task Name</p>
//             <p className='task'>Date</p>
//             <p className='task'>Time</p>
//           </li>
//           {
//               (datafetch == null)?<li>No Data </li> : todos.map((each)=>{
//                 return <li className='eachListBlock'>
//                   <p className='task'>{each.taskName}</p>
//                   <p className='task'>{each.time}</p>
//                   <p className='task'>{each.date}</p>
//                 </li>
//               })
//           }
//         </ul>
//       </main>
//     );
//   }
// }
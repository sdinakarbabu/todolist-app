import './App.css';

function App() {
  const addTask = ()=>{
    var searchInputEle = document.getElementById("searchInput").value;
    var fetchdate = new Date();
    var Data = {
      taskName:searchInputEle,
      time: fetchdate.toLocaleTimeString(),
      date:fetchdate.toLocaleDateString()
    }
    console.log(Data)
  }
  return (
    <main>
      <header className="headerContainer">
        <h1 className="appHeading">TodoList</h1>
      </header>
      <section>
        <input type="text" placeholder="Enter Task" id="searchInput" />
        <button type="button" className="btn" onClick={addTask}>Create</button>
      </section>
    </main>
  );
}

export default App;

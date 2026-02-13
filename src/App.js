// import  PeopleList  from './PeopleList';
// import './App.css';
// import Gallery from './Gallery';
// import Profile from './Profile';  
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header>
        {/* <p>
          My first React App
        </p>
       <button onClick={handleClick}>Click Me!</button>
       {/* Reading Props in event handlers */}
       {/* <p style={{fontSize: "15px", color: "green", fontWeight: "bold"}}>Reading Props in event handlers</p>
       <Toolbar></Toolbar>   */}
       {/* Passing Props to Components */}
       {/* <Profile size="40px" type="square"></Profile>
       <Profile size="100px" type="circle"></Profile>
       <Gallery></Gallery> */}
       {/* Feb 13 */}
       {/* Counter without state management */}
       <Counter gap={50}></Counter>
       
      </header>
    </div>
  );
}

// function handleClick() {
//   alert("Button clicked!");
// }

//Reading Props in event handlers
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export  function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}


export default App;

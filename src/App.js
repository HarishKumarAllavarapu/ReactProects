import logo from "./logo.svg";
import "./App.css";
// import { Todo } from "./ProjectFolders/Todo/Todo";
import { MonstersHome } from "./ProjectFolders/MonsterRolodex/components/MonstersHome.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React Application
      </header>

      {/* Todo Project Starts Here */}
      {/* <Todo /> */}
      {/* Todo Project Ends Here  */}
      {/* Monsters Rolodex Project Starts Here */}
      <MonstersHome />
      {/* Monsters Rolodex Project Starts Here  */}
    </div>
  );
}

export default App;

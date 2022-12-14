// import logo from './logo.svg';
import './App.css';
import Composition from './component/2-4.Props/Composition';
import Extraction from './component/2-4.Props/Extraction/Extraction';
import ClassComponent from './component/2-5.State/ClassComponent';

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <ClassComponent />
    </div>
  );
}

export default App;

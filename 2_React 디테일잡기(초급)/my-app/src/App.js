// import logo from './logo.svg';
import './App.css';
// import Composition from './component/2-4.Props/Composition';
// import Extraction from './component/2-4.Props/Extraction/Extraction';
// import ClassComponent from './component/2-5.State/ClassComponent';
// import FunctionalComponent from './component/2-5.State/FunctionalComponent';
// import ClassComponent2 from './component/2-6.LifeCycle/ClassComponent';
// import Event from './component/2-7.Event/Event';
// import Condition from './component/2-8.ConditionalRendering/Condition';
// import List from './component/2-9.List/List';
import ControlledComponent from './component/2-10.Form/ControlledComponent';
import UncontrolledComponent from './component/2-10.Form/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      {/* <Composition />
      <Extraction />
      <ClassComponent />
      <FunctionalComponent /> */}
      {/* <ClassComponent2 /> */}
      {/* <Event /> */}
      {/* <Condition /> */}
      {/* // <List /> */}
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
}

export default App;

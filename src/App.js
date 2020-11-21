import logo from './logo.svg';
import './App.css';
import DemoFunctionComponents from './Components/DemoFunctionComponents';
import DemoReactClassComponent from './Components/DemoReactClassComponent';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import Header from './Components/BaiTapLayout/Header';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;

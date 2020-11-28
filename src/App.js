import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponents from "./Components/DemoFunctionComponents";
import DemoReactClassComponent from "./Components/DemoReactClassComponent";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import Header from "./Components/BaiTapLayout/Header";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import DemoState from "./Components/DemoState/DemoState";
import BaiTapChonXe from "./Components/DemoState/BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./Components/DemoState/RenderWithMap/RenderWithMap";
import BaiTapThucHanhLayout from "./Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        {/* <BaiTapLayout /> */}
        {/* <DataBinding /> */}
        {/* <HandleEvent /> */}
        {/* <DemoState /> */}
        {/* <BaiTapChonXe /> */}
        {/* <RenderWithMap/> */}
        {/* ====== BaiTapThucHanhLayout ===== */}
        <BaiTapThucHanhLayout/>
      </div>
    </div>
  );
}

export default App;

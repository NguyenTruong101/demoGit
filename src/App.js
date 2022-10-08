
import './App.css';
import React, { Component } from 'react';
// import demoState from "./Components/demoState.js"
// import Component1 from "./Components/Component1.js"; 
// import Component2 from "./Components/Component2.js"; 
// import MyListComponent from "./Components/MyListComponent.js";
// import ArrowFunction from "./Components/ArrowFunction.js";
// import BT3_10 from "./Components/BT3_10.js";
// import BT3_10_1 from "./Components/BT3_10(1).js";
import Inlinecss from "./Components/Inlinecss.js";
// import BT5_10 from "./Components/BT5_10.js";
// import DemoModuleCSS from "./Components/DemoCSSModule.js"
// import DemoReactTable from "./Components/DemoReactTable.js"





class App extends React.Component{
    constructor(){
      super();
    }
    render(){
      return(
        // <Component1/>
        // <Component2/>
        // <demoState/>
        // <MyListComponent name='DuyTruong' address='Ha Noi' age='20' sex='Male' />
        // <ArrowFunction/>
        // <BT3_10/>
        // <BT3_10_1/>
        <Inlinecss/>
        // <BT5_10/>
        // <DemoModuleCSS/>
        // <DemoReactTable/>


      );
    }
}

export default App;

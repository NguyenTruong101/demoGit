import React,{ Components } from "react";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Hello broo'
        }
    }
    handleEvent = () => {
        console.log(this.props);
        alert(this.state.data);
    }
    render(){
        return(
            <div className="App">
                <h2>Minh hoa React Constructor</h2>
                <input type="text" value={this.state.data}></input>
                <button onClick={this.handleEvent}>SHOW</button>
            </div>

        );
    }
}

export default App;
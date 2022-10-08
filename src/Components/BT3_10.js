import React,{ Components } from "react";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: 'DuyTruong',
            age: '21',
            address: 'Ha Noi',
            img:'https://images.ctfassets.net/j7pfe8y48ry3/2iC1rrxQbaoiyAIq44wiYw/7fc815b43cc5c7e5bff11e8326e937a7/aeba0be3d6c9037a0f1355f5c69de6b7c1ab87d4.jpg?w=576' ,
        }
    }
    handleEvent = () => {
        console.log(this.props);
        alert('HOHOHOHOH');
    }
    render(){
        return(
            <div className="App">
                <h2>Welcome to my Page</h2>
                <input type='text' value={this.state.name}></input>
                <input type='text' value={this.state.age}></input>
                <input type='text' value={this.state.address}></input>
                <img src={this.state.img} width='300px' ></img>
                <button onClick={this.handleEvent}>HOHOHOHOH</button>

            </div>

        );
    }

}

export default App;
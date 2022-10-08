import React, { Component } from 'react';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                    {
                        "name":"Tom hum phomai"
                    },
                    {
                        "name":"Hai san"
                    },
                    {
                        "name":"Lau cua"
                    }
            ]
        }
    }
    render() {
        return (
            <div>
                <SeaFoodName />
                <ul>
                    {this.state.data.map((item) => <List data={item} />)}
                </ul>
            </div>

        );
    }
}

class SeaFoodName extends React.Component {
    render() {
        return (
            <div>
                <h1><font color="orange"> Ten mon ngon </font></h1>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <ul>
                <li><font color="limegreen">{this.props.data.name}</font></li>
            </ul>
        );
    }
}


export default App;

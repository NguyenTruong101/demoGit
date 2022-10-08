import React, {Components} from "react";
class App extends React.Component{
    constructor(props){
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }
    updateSubmit(event){
        alert('Minh hoa uncontrolled form');
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.updateSubmit}>
                <h3>Minh hoa uncontrolled form</h3>
                <label>Ho ten : 
                    <input type='text' ref={this.input}></input>
                </label> <br />
                <labe> Luong: 
                    <input type='text' ref={this.input}></input>
                </labe> <br/>
                <label>Dia chi:
                    <input type='text' ref={this.input}></input>
                </label> <br/>
                <input type='submit' value='Đăng Ký'></input>
            </form>

        );
    }
}
export default App;
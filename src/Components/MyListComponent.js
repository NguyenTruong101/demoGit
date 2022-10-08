import React, { Component } from 'react';
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Name : {this.props.name} </h2>
                <h2>Address : {this.props.address} </h2>
                <h2>Age : {this.props.age} </h2>
                <h2>Sex : {this.props.sex} </h2>
                <p>
                    <h3>
                        Props: Là những thành phần read-only, không thể thay đổi được trong Component.
                        Props thường được dùng để truyền dữ liệu giữa các component.
                    </h3>
                </p>
            </div>

        );
    }
}

export default App;
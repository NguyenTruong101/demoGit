import React, { Component } from 'react';
class App extends React.Component {
    render(){
        return(
            <div>
                <TB/>
            </div>
        );
    }

}

class TB extends React.Component {
    render() {
        return (
            <div>
                <table border="1">
                    <tr>
                        <th colspan="3">THÔNG TIN SINH VIÊN</th>
                    </tr>
                    <tr>
                        <td>Trần Anh Đức</td>
                        <td>03/08/1993</td>
                        <td>Nam</td>
                    </tr>
                    <tr>
                        <td>Kiều Thị Thu Hằng</td>
                        <td>04/09/1991</td>
                        <td>Nữ</td>
                    </tr>
                    <tr>
                        <td>Vương Thị Lê Na</td>
                        <td>06/10/1991</td>
                        <td>Nữ</td>
                    </tr>
                </table>
            </div>
        );
    }

}
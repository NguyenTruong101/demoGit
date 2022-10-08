import React, { Component } from 'react';
class App extends React.Component{
    constructor(){
        super();
        this.state = {displayBio: false};
        console.log('Component this -> ',this);
        this.toogleBio = this.toogleBio.bind(this);
    }
    toogleBio(){
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div>
                <h2> Welcome to  Duy Truong </h2>
                {
                    this.state.displayBio ? (
                        <div>
                            <p><h5>Ngày 26/9, lãnh đạo Cục An toàn lao động, Bộ LĐ-TBXH cho biết, trên cơ sở đồng tình từ nhiều bộ ngành, Cục đã báo cáo tổng hợp góp ý thời gian nghỉ Tết Âm lịch 2023 lên Bộ LĐ-TBXH để trình Chính phủ xem xét, quyết định.</h5>
                                <img src="https://icdn.dantri.com.vn/thumb_w/680/2022/09/06/hoadaohuunghi-crop-1662449757794.jpeg" width="300px" height="300pc"></img>
                            </p>
                            <button onClick={this.toogleBio}>Show less</button>

                        </div>

                    ) : (
                        <div>
                            <button onClick={this.toogleBio}>Show more</button>
                        </div>
                    )
                }
            </div>   
        );
    }
}
export default App;
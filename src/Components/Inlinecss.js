import React,{Components} from "react";
import '../include/style.css'
class App1 extends React.Component{
    render(){
        // const mystyle = {
        //     color:"orange",
        //     backgoundColor:"black",
        //     padding:"10px",
        //     fontFamily:"Arial",
        //     border:"3px solid black",
        //     textAlign:"center"
        // }
        return(
            <div className="duytruong">
                {/* <h2 style={{color:"white", backgroundColor:"green", textDecoration:"underline",textAlign:"center"}}>Welcome to my page</h2>
                <div style={{color:"red", backgoundColor:"red",textAlign:"center", textTransform:"udivpercase"}}> Sáng ngày 5/10, hầm chui Lê Văn Lương (Thanh Xuân, Hà Nội) chính thức được thông xe. Công trình được kỳ vọng sẽ giải quyết tình trạng ùn tắc tại khu vực đường Lê Văn Lương - Tố Hữu - Vành đai 3</div>

                <h3 style={mystyle}>Hello my friend!!!!</h3> */}

                <p className="body"> Barcelona tuyên bố sẽ thực hiện các hành động pháp lý để khiếu nại bàn thắng của Pedri bị từ chối bởi trọng tài trong trận thua Inter Milan 0-1 thuộc vòng bảng Champions League rạng sáng 5/10.</p>
                <img src="https://th.bing.com/th/id/OIP.Q_V3B5a-Cq1ARz8X6wLTyQHaEI?w=298&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"></img>
                
            </div>

        );

    }
}
export default App1;
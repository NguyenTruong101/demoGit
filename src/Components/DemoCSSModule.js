import React,{Components} from "react";
import styles from "../include/mystyle.module.css";
class demo extends React.Component{
    render(){
        return(
            <div>
                <h1 className={styles.L1}>Bất ngờ với mức lương của Erling Haaland ở Man City</h1>
                <p className={styles.L2}>Theo tiết lộ độc quyền của tờ Dailymail, Erling Haaland đang nhận mức lương cực khủng tại Man City, lên tới gần 900.000 bảng mỗi tuần.</p>
                <p className={styles.L3}>Siêu sao người Na Uy, người đang làm điên đảo cả Premier League kể từ khi gia nhập Man City từ Borussia Dortmund với mức giá 51 triệu bảng, đang nhận được số tiền cực khủng hàng tuần và biến anh trở thành cầu thủ được trả lương cao nhất Premier League.</p>
            </div>

        );
    }
}
export default demo;
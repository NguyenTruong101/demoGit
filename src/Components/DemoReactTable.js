import React,{Components} from "react";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

class DemoTable extends React.Component{
    render(){

        const data= [{
            name:"Nguyen Duy Truong",
            age: 22
            },{
                name:"Mai Ngoc",
                age: 18
            },{
                name:"Cao Ha",
                age:19
            }]
        const columns = [{
            header:"Name",
            accessor:"name"
            },{
            header:"Age",
            accessor:"age"    
            }]

        return(
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={2}
                    pageSizeOptions ={[2,4,6]}
                
                />
            </div>
        );

        
    }
}
export default DemoTable;
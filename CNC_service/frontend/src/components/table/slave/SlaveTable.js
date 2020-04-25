import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"
import "../slave/css/SlaveTable.css"


class SlaveTable extends Component {
    onClickChange(cell, row, rowIndex){
        if(buttonName == "status 1"){
            buttonName = "status 2";
        } else{
            buttonName = "status 1";
        }
    }

    changeButton(cell, row, enumObject, rowIndex) {
      return (
         <button 
            type="button" 
            onClick={() => 
            this.onClickChange(cell, row, rowIndex)}
         >
         {this.props.data[rowIndex]['status']}
         </button>
      )
   }

  
   render() {
     return (
      <BootstrapTable data={this.props.data}>
       <TableHeaderColumn dataField='number' isKey className="num">
          Номер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='date_request' className="date">
          Дата
        </TableHeaderColumn>
        <TableHeaderColumn dataField='boss_repair' className="boss">
          Начальник
        </TableHeaderColumn>
        <TableHeaderColumn dataField='comment' className="text">
          Текст
        </TableHeaderColumn>
        <TableHeaderColumn dataField='CNC' className="CNC">
          Станок
        </TableHeaderColumn>
        <TableHeaderColumn dataField='status' className="status">
          Статус
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.changeButton.bind(this)}
          className="button"
        />
     </BootstrapTable>
    )
   }
  }
  

  export default SlaveTable;
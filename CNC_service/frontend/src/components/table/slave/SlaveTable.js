import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"


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
       <TableHeaderColumn dataField='number' isKey>
          Номер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='date_request'>
          Дата
        </TableHeaderColumn>
        <TableHeaderColumn dataField='boss_repair'>
          Начальник
        </TableHeaderColumn>
        <TableHeaderColumn dataField='comment'>
          Текст
        </TableHeaderColumn>
        <TableHeaderColumn dataField='CNC'>
          Станок
        </TableHeaderColumn>
        <TableHeaderColumn dataField='status'>
          Статус
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.changeButton.bind(this)}
        />
     </BootstrapTable>
    )
   }
  }
  

  export default SlaveTable;
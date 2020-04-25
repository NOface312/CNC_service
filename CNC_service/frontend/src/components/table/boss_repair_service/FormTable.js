import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"
import "../css/Table.css"


class SlaveTable extends Component {
    onClickChange(cell, row, rowIndex){
        alert("Делать будешь ты")
    }

    changeButton(cell, row, enumObject, rowIndex) {
      return (
         <button 
            type="button" 
            onClick={() => 
            this.onClickChange(cell, row, rowIndex)}
         >
         Назначить
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
        <TableHeaderColumn dataField='boss_area'>
          Начальник
        </TableHeaderColumn>
        <TableHeaderColumn dataField='comment'>
          Текст
        </TableHeaderColumn>
        <TableHeaderColumn dataField='CNC'>
          Станок
        </TableHeaderColumn>        
        <TableHeaderColumn dataField='type_request'>
          Тип запроса
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
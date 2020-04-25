import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"
import "../css/Table.css"


class FormTable extends Component {
    onClickChange(cell, row, rowIndex){
        alert("Делать будешь ты")
    }

    onClickDelete(cell, row, rowIndex){
        alert("АААА")
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

   deleteButton(cell, row, enumObject, rowIndex) {
    return (
       <button 
          type="button" 
          onClick={() => 
          this.onClickDelete(cell, row, rowIndex)}
       >
       Назначить
       </button>
    )
 }

  
   render() {
     return (
      <BootstrapTable data={this.props.data} className="table">
       <TableHeaderColumn dataField='number' isKey className="head">
          Номер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='boss_repair' className="head">
          Босс ремонтер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='worker' className="head">
          Рабочий
        </TableHeaderColumn>
        <TableHeaderColumn dataField='status' className="head">
          Статус
        </TableHeaderColumn>
        <TableHeaderColumn dataField='comment' className="head">
          Текст
        </TableHeaderColumn>        
        <TableHeaderColumn dataField='date_request' className="head">
          Дата
        </TableHeaderColumn>
        <TableHeaderColumn dataField='cnc' className="head">
          Станок
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.changeButton.bind(this)}
          className="head"
        />
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.deleteButton.bind(this)}
          className="head"
        />
     </BootstrapTable>
    )
   }
  }
  

  export default FormTable;
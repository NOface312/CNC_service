import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"
import "../css/Table.css"


class CNCTable extends Component {
    onClickChange(cell, row, rowIndex){
     console.log('change Product #', rowIndex);
    }
    onClickDelete(cell, row, rowIndex){
        console.log('delete Product #', rowIndex);
    }

    changeButton(cell, row, enumObject, rowIndex) {
      return (
         <button 
            type="button" 
            onClick={() => 
            this.onClickChange(cell, row, rowIndex)}
         >
         Изменить
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
       Удалить
       </button>
    )
 }
  
   render() {
     return (
      <BootstrapTable data={this.props.data} className="table">
       <TableHeaderColumn dataField='pk' isKey className="head">
          Номер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='name' className="head">
          Имя
        </TableHeaderColumn>
        <TableHeaderColumn dataField='area' className="head">
          Участок
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
  

export default CNCTable;
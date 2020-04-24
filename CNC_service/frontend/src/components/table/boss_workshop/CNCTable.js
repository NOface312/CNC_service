import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"


class WorkshopTable extends Component {
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
      <BootstrapTable data={this.props.data}>
       <TableHeaderColumn dataField='name' isKey>
          Имя
        </TableHeaderColumn>
        <TableHeaderColumn dataField='area'>
          Участок
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.changeButton.bind(this)}
        />
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.deleteButton.bind(this)}
        />
     </BootstrapTable>
    )
   }
  }
  

  export default WorkshopTable;
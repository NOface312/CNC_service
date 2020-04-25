import React, { Component } from "react";
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import "../../../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css"
import "../css/Table.css"
import Create_CNC_Modal from "../../../helpers/modals/cnc_manager/create_cnc_modal"


class SlaveTable extends Component {
    onClickChange(cell, row, rowIndex){
        return (
          <Create_CNC_Modal />
        )
    }

    changeButton(cell, row, enumObject, rowIndex) {
      return (
         <button 
            type="button" 
            onClick={() => 
            this.onClickChange(cell, row, rowIndex)}
            className="button"
         >
         {this.props.data[rowIndex]['status']}
         </button>
      )
   }

  
   render() {
     return (
      <BootstrapTable data={this.props.data} className="table">
       <TableHeaderColumn dataField='number' isKey className="head">
          Номер
        </TableHeaderColumn>
        <TableHeaderColumn dataField='date_request' className="head">
          Дата
        </TableHeaderColumn>
        <TableHeaderColumn dataField='boss_repair' className="head">
          Начальник
        </TableHeaderColumn>
        <TableHeaderColumn dataField='comment' className="head">
          Текст
        </TableHeaderColumn>
        <TableHeaderColumn dataField='CNC' className="head">
          Станок
        </TableHeaderColumn>
        <TableHeaderColumn dataField='status' className="head">
          Статус
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='button'
          dataFormat={this.changeButton.bind(this)}
          className="head"
        />
     </BootstrapTable>
    )
   }
  }
  

  export default SlaveTable;
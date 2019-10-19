import React, {Component} from 'react';
import "./TableTemplate.scss";

class TableTemplate extends Component{
    render(){
        const {tableColumnHeader, tableDetails} = this.props
        return(
            <table className={'custom-table custom-table--blue'}>
      <thead className="custom-table__head">
        <tr className="custom-table__row custom-table__row--head">
          {tableColumnHeader && tableColumnHeader.map((column) => (
            <th key={column.key} className={`custom-table__cell custom-table__cell--th ${column.headerClass}`}>{column.header}</th>
                        ))}
        </tr>
      </thead>
      <tbody className="custom-table__body">
        {tableDetails && tableDetails.length ? tableDetails.map((row, index) => (
          row && <tr key={index} className={'custom-table__row custom-table__row--body'}>
            {tableColumnHeader.map((col) => (
              <td key={col.key} className="custom-table__cell custom-table__cell--td">{(row[col.key] !== null && row[col.key] !== undefined) ? row[col.key] : '-'}</td>
                ))}
          </tr>
                    )) : <tr><td className="no_result" colSpan={tableColumnHeader && tableColumnHeader.length + 1}>No Results</td></tr>}
      </tbody>
    </table>
        )
    }
}

export default TableTemplate;
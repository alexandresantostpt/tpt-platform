import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'

import TableHeaderColumn from '../column/TableHeaderColumn'

const StyledTableHeaderRow = styled.tr`
    border-bottom: ${borders.default};
    box-shadow: 0 5px 6px 1px rgba(214, 214, 214, 0.35);
`

const TableHeaderRow = ({ columns }) => (
    <StyledTableHeaderRow>
        {columns.map(column => (
            <TableHeaderColumn column={column} key={column}>
                {column}
            </TableHeaderColumn>
        ))}
    </StyledTableHeaderRow>
)

TableHeaderRow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableHeaderRow

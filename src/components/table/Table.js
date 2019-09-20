import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import TableBody from './body/TableBody'
import TableHeader from './header/TableHeader'

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Table = ({ columns, data, onDelete, onEdit, onRowClick, onUnarchive }) => (
    <StyledTable>
        <TableHeader columns={columns} />
        <TableBody
            columns={columns}
            data={data}
            onDelete={onDelete}
            onEdit={onEdit}
            onRowClick={onRowClick}
            onUnarchive={onUnarchive}
        />
    </StyledTable>
)

Table.defaultProps = {
    onDelete: null,
    onEdit: null,
    onRowClick: null,
    onUnarchive: null
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onRowClick: PropTypes.func,
    onUnarchive: PropTypes.func
}

export default Table

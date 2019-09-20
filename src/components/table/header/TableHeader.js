import PropTypes from 'prop-types'
import React from 'react'

import TableHeaderRow from './row/TableHeaderRow'

const TableHeader = ({ columns }) => (
    <thead>
        <TableHeaderRow columns={columns} />
    </thead>
)

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableHeader

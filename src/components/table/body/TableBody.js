import { events } from '@constants/events'

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'

import TableBodyRow from './row/TableBodyRow'

const TableBody = ({ columns, data, onDelete, onEdit, onRowClick, onUnarchive }) => {
    const [sortedData, updateSortedData] = useState([])
    const ASC = 'ASC',
        DESC = 'DESC'
    let order = ASC

    useEffect(() => {
        PubSub.subscribe(events.SORT_TABLE, sortData)
        updateSortedData(data)
    }, [data])

    const sortData = (msg, column) => {
        if (order === ASC) {
            updateSortedData(data.$sortBy(column))
            order = DESC
        } else {
            updateSortedData(data.$sortBy(`-${column}`))
            order = ASC
        }
    }

    return (
        <tbody>
            {sortedData.map((item, index) => (
                <TableBodyRow
                    columns={columns}
                    item={item}
                    key={index}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onRowClick={onRowClick}
                    onUnarchive={onUnarchive}
                />
            ))}
        </tbody>
    )
}

TableBody.defaultProps = {
    onDelete: null,
    onEdit: null,
    onRowClick: null,
    onUnarchive: null
}

TableBody.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onRowClick: PropTypes.func,
    onUnarchive: PropTypes.func
}

export default TableBody

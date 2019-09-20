import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { StyledIcon } from '@components/icon/Icon'

import { borders } from '@helpers/borders'

import TableBodyColumn from '../column/TableBodyColumn'
import Actions from '@components/actions/Actions'

const StyledTableBodyRow = styled.tr`
    border-bottom: ${borders.default};
    border-top: ${borders.default};
    box-shadow: 0 5px 6px 1px rgba(214, 214, 214, 0.35);

    &:hover {
        background: #f2f3f4;
        box-shadow: inset 0 5px 6px 1px rgba(214, 214, 214, 0.35), 0 5px 6px 1px rgba(214, 214, 214, 0.35);
        cursor: pointer;
        ${StyledIcon} {
            display: block;
        }
    }
`

const TableBodyRow = ({ columns, item, onDelete, onEdit, onRowClick, onUnarchive }) => {
    const [showActions, updateShowActions] = useState(false)
    const haveAction = columns.find(function(element) {
        return element === 'actions'
    })

    return (
        <StyledTableBodyRow onMouseEnter={() => updateShowActions(true)} onMouseLeave={() => updateShowActions(false)}>
            {columns.map((column, index) => (
                <TableBodyColumn key={index} onClick={() => onRowClick && onRowClick(item)}>
                    {item[column]}
                </TableBodyColumn>
            ))}
            {haveAction ? (
                <Actions item={item} onDelete={onDelete} onEdit={onEdit} onUnarchive={onUnarchive} showActions={showActions} />
            ) : null}
        </StyledTableBodyRow>
    )
}

TableBodyRow.defaultProps = {
    onDelete: null,
    onEdit: null,
    onRowClick: null,
    onUnarchive: null
}

TableBodyRow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onRowClick: PropTypes.func,
    onUnarchive: PropTypes.func
}

export default TableBodyRow

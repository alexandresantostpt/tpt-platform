import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTableBodyColumn = styled.td`
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem;
`

const TableBodyColumn = ({ children, ...props }) => <StyledTableBodyColumn {...props}>{children}</StyledTableBodyColumn>

TableBodyColumn.defaultProps = {
    children: null
}

TableBodyColumn.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string])
}

export default TableBodyColumn

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { StyledHeader } from '@components/collapse/CollapseDivider'
import Table from '@/components/table/Table'

const Content = styled.div`
    margin-top: 2rem;
`

const StyledTables = styled.div`
    ${StyledHeader} {
        padding: 2rem 1rem;
    }
`

const LibraryList = ({ canDelete, list: data, onDelete, onEdit, onRowClick }) => (
    <Content>
        <StyledTables>
            <Table
                columns={['name', 'destiny', 'type', 'lastAccess', 'actions']}
                data={data}
                onDelete={canDelete ? onDelete : null}
                onEdit={onEdit}
                onRowClick={onRowClick}
            />
        </StyledTables>
    </Content>
)

LibraryList.defaultProps = {
    canDelete: false
}

LibraryList.propTypes = {
    canDelete: PropTypes.bool,
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired
}

export default LibraryList

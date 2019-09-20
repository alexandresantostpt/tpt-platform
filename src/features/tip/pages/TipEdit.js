import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'

import SearchBar from '../components/search/SearchBar'
import TipCard from '../components/tipCard/TipCard'

const StyledTipEdit = styled.div`
    display: flex;
    flex-direction: column;
`

const TipEdit = props => {
    const {
        match,
        categories,
        requestDelLibraryAction,
        requestFilterAction,
        requestGetCategoryAction,
        requestGetSingleAction,
        tip
    } = props
    const {
        params: { tipId }
    } = match

    useEffect(() => {
        requestGetCategoryAction()
        if (tipId) {
            requestGetSingleAction({ id: tipId })
        }
    }, [])

    const handleTipClick = ({ id: libraryId }) =>
        requestDelLibraryAction({
            data: { libraryId, tipId }
        })

    const handleFilter = data => requestFilterAction(data)

    return (
        <StyledTipEdit>
            <SearchBar categories={categories} onFilter={handleFilter} />
            {tip && tip.libraries && tip.libraries.map(item => <TipCard key={item.id} onRemove={handleTipClick} tip={item} />)}
        </StyledTipEdit>
    )
}
TipEdit.defaultProps = {
    categories: [],
    tip: null
}

TipEdit.propTypes = {
    categories: PropTypes.array,
    match: PropTypes.object.isRequired,
    requestDelLibraryAction: PropTypes.func.isRequired,
    requestFilterAction: PropTypes.func.isRequired,
    requestGetCategoryAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    tip: PropTypes.object
}

export default withRouter(TipEdit)

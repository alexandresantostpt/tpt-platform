import { librariesServices } from '@constants/services'

import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'

import { i18n } from '@i18n'

import { colors } from '@helpers/colors'
import { getQueryParams, navigateTo } from '@utils/browser'

import Button from '@components/button/Button'
import SearchBar from '../components/search/SearchBar'
import TipCard from '../components/tipCard/TipCard'

const StyledTipList = styled.div`
    display: flex;
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
`

const TipList = props => {
    const {
        match,
        categories,
        list,
        requestFilterAction,
        requestGetCategoryAction,
        requestSaveDataAction,
        requestSearchLibraryAction
    } = props
    const {
        params: { id }
    } = match
    const { city, cityId, dateId, scriptDate, scriptId, tipId } = getQueryParams()
    const previousPath = `/travel/${id}/script`

    let nextPath = `tip?form=true&city=${city}&cityId=${cityId}`
    nextPath += `&dateId=${dateId}&scriptId=${scriptId}&scriptDate=${scriptDate}&tipId=${tipId}`

    useEffect(() => {
        requestGetCategoryAction()
        requestSearchLibraryAction({ cityId, nextPath, type: librariesServices.TIP })
    }, [])

    const handleNewTipClick = () => navigateTo(nextPath)

    const handleTipClick = ({ id: libraryId }) =>
        requestSaveDataAction({
            data: { dateId, libraryId, scriptId, tipId: tipId && tipId !== 'undefined' ? tipId : undefined },
            redirectTo: previousPath
        })

    const handleFilter = data => requestFilterAction(data)

    return (
        <StyledTipList>
            <SearchBar categories={categories} onFilter={handleFilter} />
            {list.map(item => (
                <TipCard key={item.id} onSelect={handleTipClick} tip={item} />
            ))}
            <ButtonWrapper>
                <Button color={colors.purple} disabled={false} onClick={handleNewTipClick} text={i18n.t('buttons.newTip')} />
            </ButtonWrapper>
        </StyledTipList>
    )
}
TipList.defaultProps = {
    categories: []
}

TipList.propTypes = {
    categories: PropTypes.array,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
    requestFilterAction: PropTypes.func.isRequired,
    requestGetCategoryAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchLibraryAction: PropTypes.func.isRequired
}

export default withRouter(TipList)

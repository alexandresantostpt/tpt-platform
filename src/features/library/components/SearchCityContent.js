import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { i18n } from '@i18n'
import Button from '@/components/button/Button'

const Content = styled.div`
    margin-top: 7rem;
    padding: 0 1rem;
`

const Description = styled.div`
    padding: 2rem 0;
`

const TextTitle = styled.div`
    color: ${colors.link};
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.2;
`

const TextInfo = styled.div`
    color: ${colors.link};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    width: 20.75rem;
`

const SearchDestinyForm = ({ onClick }) => (
    <Content>
        <Description>
            <TextTitle>{i18n.t('titles.explore')}!</TextTitle>
            <TextInfo>{i18n.t('info.navigateByTipsOrServices')}</TextInfo>
        </Description>
        <Button color={colors.lightBlueGray} onClick={onClick} text={i18n.t('buttons.add')} />
    </Content>
)

SearchDestinyForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default SearchDestinyForm

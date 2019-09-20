import { connect } from 'react-redux'

import React from 'react'

import { requestUpdatePasswordAction } from '@features/login/actions'

import GlobalStyle from '@components/globalStyle/GlobalStyle'
import Toasts from '@components/toast/Toasts'

import RedefinePassword from '../pages/RedefinePassword'

import { getUserSelector } from '@features/login/selectors'

const RedefinePasswordContainer = props => (
    <>
        <GlobalStyle />
        <Toasts />
        <RedefinePassword {...props} />
    </>
)

const mapStateToProps = state => ({
    user: getUserSelector(state)
})

const mapDispatchToProps = {
    requestUpdatePasswordAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RedefinePasswordContainer)

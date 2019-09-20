import React from 'react'

import GlobalStyle from '@components/globalStyle/GlobalStyle'
import Toasts from '@components/toast/Toasts'

import Feedback from '../pages/Feedback'

const FeedbackContainer = () => (
    <>
        <GlobalStyle />
        <Toasts />
        <Feedback />
    </>
)

export default FeedbackContainer

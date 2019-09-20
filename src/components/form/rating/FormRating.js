import React from 'react'

import MichelinRating from './michelin/MichelinRating'

const FormRating = props => {
    switch (props.rateType) {
        case 'michelin':
            return <MichelinRating {...props} />
        default:
            return null
    }
}

export default FormRating

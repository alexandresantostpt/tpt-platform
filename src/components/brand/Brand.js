import { config } from '@config'

import { events } from '@/constants/events'

import PubSub from 'pubsub-js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getBrand } from '@utils/auth'

const StyledBrand = styled.span`
    display: inline-block;
    height: 3rem;
    ${({ image }) => {
        if (image) {
            return `
                background: url(${config.api.url}/agency/download/${image}) no-repeat center;
                background-size: contain;
            `
        }
    }};
    width: 10rem;
`

const Brand = () => {
    const [image, updateImage] = useState(getBrand())

    useEffect(() => {
        PubSub.subscribe(events.CHANGE_BRAND, (_, newImage) => updateImage(newImage))
    }, [])

    return <StyledBrand image={image} />
}

export default Brand

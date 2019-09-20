import PropTypes from 'prop-types'
import React from 'react'
import styled from '@react-pdf/styled-components'

import { services } from '@constants/services'

import aerial from '@img/services/aerial.png'
import car_rental from '@img/services/car_rental.png'
import cruise from '@img/services/cruise.png'
import hotel from '@img/services/hotel.png'
import restaurant from '@img/services/restaurant.png'
import tip from '@img/services/tip.png'
import tour from '@img/services/tour.png'
import train from '@img/services/train.png'
import transfer from '@img/services/transfer.png'

const Image = styled.Image`
    height: 40pt;
    width: 40pt;
`
const selectLogo = type => {
    switch (type) {
        case services.AERIAL:
            return aerial
        case services.CAR_RENTAL:
            return car_rental
        case services.CRUISE:
            return cruise
        case services.HOTEL:
            return hotel
        case services.RESTAURANT:
            return restaurant
        case services.TIP:
            return tip
        case services.TOUR:
            return tour
        case services.TRAIN:
            return train
        case services.TRANSFER:
            return transfer
        default:
            return
    }
}

const ServiceLogo = ({ type }) => <Image src={selectLogo(type)} />

ServiceLogo.propTypes = {
    type: PropTypes.string.isRequired
}

export default ServiceLogo

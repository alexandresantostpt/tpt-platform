import React from 'react'

import { services } from '@constants/services'

import Icon from '@components/icon/Icon'

// eslint-disable-next-line complexity
const getIcon = (service, index) => {
    let iconName = null

    switch (service) {
        case services.AERIAL:
            iconName = 'plane-alt'
            break
        case services.CAR_RENTAL:
            iconName = 'car'
            break
        case services.CRUISE:
            iconName = 'ship'
            break
        case services.HOTEL:
            iconName = 'hotel'
            break
        case services.PROGRAMMING:
            iconName = 'programming'
            break
        case services.RESTAURANT:
            iconName = 'restaurant'
            break
        case services.TIP:
            iconName = 'heart'
            break
        case services.TOUR:
            iconName = 'tour'
            break
        case services.TRAIN:
            iconName = 'train'
            break
        case services.TRANSFER:
            iconName = 'transport'
            break
        default:
            iconName = null
    }

    return <Icon fontSize="2rem" icon={iconName} key={index} />
}

const iconSelector = serviceList => serviceList.map((service, index) => getIcon(service, index))

export { iconSelector }

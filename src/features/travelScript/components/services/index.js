import { services as globalServices } from '@constants/services'

import Aerial from './Aerial'
import CarRental from './CarRental'
import Cruise from './Cruise'
import Hotel from './Hotel'
import Restaurant from './Restaurant'
import Tip from './Tip'
import Tour from './Tour'
import Train from './Train'
import Transfer from './Transfer'

const services = {
    [globalServices.AERIAL]: Aerial,
    [globalServices.CAR_RENTAL]: CarRental,
    [globalServices.CRUISE]: Cruise,
    [globalServices.HOTEL]: Hotel,
    [globalServices.RESTAURANT]: Restaurant,
    [globalServices.TIP]: Tip,
    [globalServices.TOUR]: Tour,
    [globalServices.TRAIN]: Train,
    [globalServices.TRANSFER]: Transfer
}

export { services }

const librariesServices = {
    AERIAL: 'LIBRARY_AERIAL',
    CAR_RENTAL: 'LIBRARY_CAR_RENTAL',
    CRUISE: 'LIBRARY_CRUISE',
    HOTEL: 'LIBRARY_HOTEL',
    PROGRAMMING: 'LIBRARY_PROGRAMMING',
    RESTAURANT: 'LIBRARY_RESTAURANT',
    TIP: 'LIBRARY_TIP',
    TOUR: 'LIBRARY_TOUR',
    TRAIN: 'LIBRARY_TRAIN',
    TRANSFER: 'LIBRARY_TRANSFER'
}

const services = {
    AERIAL: 'AERIAL',
    CAR_RENTAL: 'CAR_RENTAL',
    CRUISE: 'CRUISE',
    HOTEL: 'HOTEL',
    PROGRAMMING: 'PROGRAMMING',
    RESTAURANT: 'RESTAURANT',
    TIP: 'TIP',
    TOUR: 'TOUR',
    TRAIN: 'TRAIN',
    TRANSFER: 'TRANSFER'
}

const servicesColors = {
    AERIAL: '#81b7e1',
    CAR_RENTAL: '#81e1ab',
    CRUISE: '#b0dd68',
    HOTEL: '#ab81e1',
    RESTAURANT: '#dd68b0',
    TIP: '#de626a',
    TOUR: '#6876dd',
    TRAIN: '#cf68dd',
    TRANSFER: '#ddcf68'
}

const serviceRoutes = [
    { text: 'Aéreo', value: '/travel/:id/script/aerial' },
    { text: 'Locação de Carro', value: '/travel/:id/script/car-rental' },
    { text: 'Cruzeiro', value: '/travel/:id/script/cruise' },
    { text: 'Hotel', value: '/travel/:id/script/hotel' },
    { text: 'Programação', value: '/travel/:id/script/programming' },
    { text: 'Restaurante', value: '/travel/:id/script/restaurant' },
    { text: 'Dicas', value: '/travel/:id/script/tips' },
    { text: 'Passeio', value: '/travel/:id/script/tour' },
    { text: 'Trem', value: '/travel/:id/script/train' },
    { text: 'Transfer', value: '/travel/:id/script/transfer' }
]

export { librariesServices, services, servicesColors, serviceRoutes }

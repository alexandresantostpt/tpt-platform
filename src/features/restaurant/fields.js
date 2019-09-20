import { cuisineTypes } from '@/constants/cuisineTypes'

const restaurantFormFields = [
    { component: 'input', id: 'title', label: 'title', maxLength: 120, name: 'library.name', required: true, type: 'text' },
    {
        component: 'input',
        id: 'description',
        label: 'description',
        name: 'library.description',
        padding: true,
        required: true,
        type: 'textarea'
    },
    {
        component: 'input',
        id: 'operationHourStart',
        label: 'operationHourStart',
        name: 'library.operationHourStart',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'operationHourEnd',
        label: 'operationHourEnd',
        name: 'library.operationHourEnd',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'workDays',
        label: 'workDays',
        maxLength: 60,
        name: 'library.workDays',
        padding: true,
        required: true,
        type: 'operationDays'
    },
    { component: 'input', id: 'address', label: 'address', maxLength: 255, name: 'library.address', required: true, type: 'text' },
    {
        component: 'input',
        id: 'phoneNumber',
        label: 'restaurantPhone',
        maxLength: 30,
        name: 'library.phoneNumber',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'site',
        label: 'restaurantWebsite',
        maxLength: 255,
        name: 'library.site',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'facebookLink',
        label: 'facebookLink',
        maxLength: 255,
        name: 'library.facebookLink',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'instagramLink',
        label: 'instagramLink',
        maxLength: 255,
        name: 'library.instagramLink',
        padding: true,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'cuisine',
        label: 'cuisine',
        name: 'library.cuisine',
        options: cuisineTypes,
        padding: true,
        required: true,
        type: 'select'
    },
    {
        component: 'input',
        id: 'michelinStars',
        label: 'michelinStars',
        max: 3,
        min: 1,
        name: 'library.michelinStars',
        rateType: 'michelin',
        required: false,
        type: 'rating'
    },
    {
        component: 'input',
        id: 'prizes',
        label: 'prizes',
        maxLength: 255,
        name: 'library.prizes',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'dressCode',
        label: 'dressCode',
        maxLength: 120,
        name: 'library.dressCode',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'acceptsReservation',
        label: 'acceptsReservation',
        name: 'library.acceptsReservation',
        options: ['yes', 'no'],
        required: false,
        type: 'radio'
    },
    {
        component: 'input',
        id: 'requiredReservation',
        label: 'requiredReservation',
        name: 'library.requiredReservation',
        options: ['yes', 'no'],
        required: false,
        type: 'radio'
    },
    {
        component: 'input',
        id: 'suitableForChildren',
        label: 'suitableForChildren',
        name: 'library.suitableForChildren',
        options: ['yes', 'no'],
        padding: true,
        required: false,
        type: 'radio'
    },
    { component: 'input', id: 'reserveDate', label: 'reservationDate', name: 'reserveDate', required: true, type: 'date' },
    { component: 'input', id: 'reserveHour', label: 'reservationTime', name: 'reserveHour', required: true, type: 'time' },
    { component: 'input', id: 'peopleCount', label: 'amountOfPeople', min: 1, name: 'peopleCount', required: true, type: 'number' },
    {
        component: 'input',
        id: 'reserveNumber',
        label: 'reserveCode',
        name: 'reserveNumber',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'reserveClientName',
        label: 'reserveClientName',
        maxLength: 120,
        name: 'reserveClientName',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'clients',
        label: 'selectCustomers',
        name: 'clients',
        padding: true,
        required: true,
        type: 'clients'
    },
    {
        component: 'input',
        id: 'confirmedBy',
        label: 'reservationConfirmedBy',
        maxLength: 120,
        name: 'confirmedBy',
        required: true,
        type: 'text'
    }
]

export { restaurantFormFields }

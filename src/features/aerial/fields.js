import { i18n } from '@i18n'

const aerialFormFields = index => [
    {
        component: 'input',
        id: `journeys[${index}].companyName`,
        label: 'company',
        maxLength: 120,
        name: `journeys[${index}].companyName`,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: `journeys[${index}].flightNumber`,
        label: 'flightNumber',
        maxLength: 15,
        min: 0,
        name: `journeys[${index}].flightNumber`,
        pattern: /^(([\dA-Z]{1,3})([\n])([\d]{1,6}))$/,
        patternExample: 'XXX\n12345',
        placeholder: `JJ\n${i18n.t('placeholders.flightNumber')}`,
        required: true,
        type: 'textarea'
    },
    {
        component: 'input',
        id: `journeys[${index}].cityExit`,
        label: 'cityExit',
        name: `journeys[${index}].cityExit`,
        required: true,
        type: 'city'
    },
    {
        component: 'input',
        id: `journeys[${index}].airportExit`,
        label: 'airportExit',
        maxLength: 60,
        name: `journeys[${index}].airportExit`,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: `journeys[${index}].dateExit`,
        label: 'dateExit',
        name: `journeys[${index}].dateExit`,
        required: true,
        type: 'date'
    },
    {
        component: 'input',
        id: `journeys[${index}].hourExit`,
        label: 'hourExit',
        name: `journeys[${index}].hourExit`,
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: `journeys[${index}].cityDestiny`,
        label: 'cityDestiny',
        maxLength: 120,
        name: `journeys[${index}].cityDestiny`,
        required: true,
        type: 'city'
    },
    {
        component: 'input',
        id: `journeys[${index}].airportDestiny`,
        label: 'airportDestiny',
        maxLength: 60,
        name: `journeys[${index}].airportDestiny`,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: `journeys[${index}].dateArrival`,
        label: 'dateArrival',
        name: `journeys[${index}].dateArrival`,
        required: true,
        type: 'date'
    },
    {
        component: 'input',
        id: `journeys[${index}].hourArrival`,
        label: 'hourArrival',
        name: `journeys[${index}].hourArrival`,
        padding: true,
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: `journeys[${index}].passenger`,
        label: 'passenger',
        name: `journeys[${index}].passenger`,
        required: true,
        type: 'clients'
    }
]

export { aerialFormFields }

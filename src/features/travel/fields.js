const travelFormFields = [
    {
        component: 'input',
        id: 'travelDates',
        label: 'travelDates',
        name: 'travelDates',
        required: true,
        type: 'rangeDate'
    },
    {
        component: 'input',
        id: 'citiesDestiny',
        label: 'citiesDestinyToString',
        maxLength: 120,
        name: 'citiesDestiny',
        required: true,
        type: 'tag'
    }
]

export default travelFormFields

const staticTravelFormFields = [
    {
        component: 'input',
        id: 'citiesDestiny',
        label: 'citiesDestinyToString',
        maxLength: 120,
        name: 'citiesDestiny',
        padding: true,
        required: false,
        type: 'tag'
    },
    {
        component: 'input',
        id: 'travelDates',
        label: 'travelDates',
        name: 'travelDates',
        padding: true,
        required: false,
        type: 'rangeDate'
    }
]

export default staticTravelFormFields

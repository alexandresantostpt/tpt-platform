const clientFormFields = (name, index) => [
    {
        component: 'input',
        id: `${name}.passengerName`,
        label: 'passengerName',
        labelCount: index + 1,
        maxLength: 60,
        name: `${name}.passengerName`,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: `${name}.platform`,
        label: 'platform',
        maxLength: 30,
        name: `${name}.platform`,
        required: false,
        type: 'text'
    },
    { component: 'input', id: `${name}.wagon`, label: 'wagon', maxLength: 30, name: `${name}.wagon`, required: false, type: 'text' },
    { component: 'input', id: `${name}.seat`, label: 'seat', maxLength: 30, name: `${name}.seat`, required: false, type: 'text' }
]

export default clientFormFields

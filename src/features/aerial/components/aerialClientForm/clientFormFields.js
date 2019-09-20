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
        id: `${name}.seat`,
        label: 'seat',
        maxLength: 15,
        name: `${name}.seat`,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: `${name}.reserveCode`,
        label: 'reserveCode',
        maxLength: 15,
        name: `${name}.reserveCode`,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: `${name}.ticket`,
        label: 'eticket',
        min: 0,
        name: `${name}.ticket`,
        required: false,
        type: 'number'
    },
    {
        component: 'input',
        id: `${name}.session`,
        label: 'class',
        maxLength: 15,
        name: `${name}.session`,
        required: false,
        type: 'text'
    }
]

export default clientFormFields

const cruiseFormFields = [
    { component: 'input', id: 'cruiseName', label: 'cruiseName', maxLength: 120, name: 'library.name', required: true, type: 'text' },
    { component: 'input', id: 'shipName', label: 'shipName', maxLength: 120, name: 'shipName', required: true, type: 'text' },
    {
        component: 'input',
        id: 'phoneNumber',
        label: 'phoneNumber',
        maxLength: 30,
        name: 'library.phoneNumber',
        required: false,
        type: 'text'
    },
    { component: 'input', id: 'site', label: 'site', maxLength: 255, name: 'library.site', required: false, type: 'text' },
    { component: 'input', id: 'cabinType', label: 'cabinType', maxLength: 30, name: 'cabinType', required: true, type: 'text' },
    { component: 'input', id: 'category', label: 'category', maxLength: 30, name: 'category', required: false, type: 'text' },
    { component: 'input', id: 'cabinNumber', label: 'cabinNumber', name: 'cabinNumber', required: false, type: 'text' },
    {
        component: 'input',
        id: 'reserveNumber',
        label: 'reserveCode',
        maxLength: 15,
        name: 'reserveNumber',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'boardingPoint',
        label: 'boardingPort',
        maxLength: 255,
        name: 'boarding.point',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'boardingDate', label: 'boardingDate', name: 'boarding.date', required: true, type: 'date' },
    {
        component: 'input',
        id: 'boardingHour',
        label: 'boardingHour',
        name: 'boarding.hour',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'landingPoint',
        label: 'landingPort',
        maxLength: 255,
        name: 'landing.point',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'landingDate', label: 'landingDate', name: 'landing.date', required: true, type: 'date' },
    { component: 'input', id: 'landingHour', label: 'landingHour', name: 'landing.hour', padding: true, required: true, type: 'time' },
    {
        component: 'input',
        id: 'passengers',
        label: 'passengers',
        name: 'passengers',
        padding: true,
        required: true,
        type: 'clients'
    },
    {
        component: 'input',
        id: 'observation',
        label: 'observation',
        maxLength: 255,
        name: 'observation',
        padding: false,
        required: false,
        type: 'text'
    }
]

export { cruiseFormFields }

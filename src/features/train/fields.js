const trainFormFields = [
    { component: 'input', id: 'companyName', label: 'company', maxLength: 120, name: 'library.name', required: true, type: 'text' },
    { component: 'input', id: 'cityFrom', label: 'cityFrom', maxLength: 120, name: 'cityFrom', required: true, type: 'text' },
    { component: 'input', id: 'stationFrom', label: 'stationFrom', maxLength: 60, name: 'stationFrom', required: true, type: 'text' },
    { component: 'input', id: 'dateFrom', label: 'dateFrom', name: 'dateFrom', required: true, type: 'date' },
    { component: 'input', id: 'hourFrom', label: 'hourFrom', name: 'hourFrom', required: true, type: 'time' },
    {
        component: 'input',
        id: 'cityDestiny',
        label: 'cityDestiny',
        maxLength: 120,
        name: 'cityDestiny',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'stationDestiny',
        label: 'stationDestiny',
        maxLength: 60,
        name: 'stationDestiny',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'hourEstimatedArrival',
        label: 'hourEstimatedArrival',
        name: 'hourEstimatedArrival',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'passengers',
        label: 'passengers',
        name: 'passengers',
        required: true,
        type: 'clients'
    }
]

export { trainFormFields }

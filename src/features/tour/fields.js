const tourFormFields = [
    {
        component: 'input',
        fieldsToChange: [
            { field: 'library.describe', name: 'describe' },
            { field: 'library.duration', name: 'duration' },
            { field: 'library.language', name: 'language' },
            { field: 'library.tourType', name: 'tourType' },
            { field: 'library._id', name: '_id' }
        ],
        id: 'title',
        label: 'tourTitle',
        maxLength: 120,
        name: 'library.name',
        required: true,
        type: 'suggest'
    },
    {
        component: 'input',
        id: 'describe',
        label: 'tourDescription',
        name: 'library.describe',
        required: true,
        type: 'textarea'
    },
    { component: 'input', id: 'outDate', label: 'outDate', name: 'outDate', required: true, type: 'date' },
    { component: 'input', id: 'outHour', label: 'outHour', name: 'outHour', required: true, type: 'time' },
    { component: 'input', id: 'address', label: 'address', maxLength: 255, name: 'address', required: false, type: 'text' },
    {
        component: 'input',
        id: 'phoneNumber',
        label: 'phoneNumber',
        maxLength: 30,
        name: 'library.phoneNumber',
        required: false,
        type: 'text'
    },
    { component: 'input', id: 'site', label: 'site', maxLength: 255, name: 'site', padding: true, required: false, type: 'text' },
    {
        component: 'input',
        id: 'duration',
        label: 'tourDuration',
        maxLength: 15,
        name: 'library.duration',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'peopleCount', label: 'peopleCount', min: 1, name: 'peopleCount', required: true, type: 'number' },
    {
        component: 'input',
        id: 'localOperator',
        label: 'localOperator',
        maxLength: 120,
        name: 'localOperator',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'transferType',
        label: 'transportType',
        maxLength: 30,
        name: 'transferType',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'language',
        label: 'language',
        maxLength: 30,
        name: 'library.language',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'tourType',
        label: 'tourType',
        name: 'library.tourType',
        options: ['Privativo', 'Regular'],
        padding: true,
        required: true,
        type: 'radio'
    },
    {
        component: 'input',
        id: 'guideOrDriver',
        label: 'guideOrDriver',
        name: 'guideOrDriver',
        options: ['Guia', 'Motorista'],
        padding: true,
        required: true,
        type: 'radio'
    },
    {
        component: 'input',
        id: 'includedMeals',
        label: 'includedMeals',
        name: 'library.includedMeals',
        options: ['breakfast', 'lunch', 'dinner'],
        padding: true,
        required: true,
        type: 'check'
    },
    {
        component: 'input',
        id: 'passengers',
        label: 'selectPassengers',
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
        padding: true,
        required: false,
        type: 'text'
    }
]

export { tourFormFields }

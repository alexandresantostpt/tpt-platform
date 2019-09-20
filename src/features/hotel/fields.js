const hotelFormFields = [
    {
        component: 'input',
        fieldsToChange: [
            { field: 'library.address', name: 'address' },
            { field: 'library.differences', name: 'differences' },
            { field: 'library.image', name: 'image' },
            { field: 'library.includedMeals', name: 'includedMeals' },
            { field: 'library._id', name: '_id' }
        ],
        id: 'name',
        label: 'hotelName',
        maxLength: 120,
        name: 'library.name',
        required: true,
        type: 'suggest'
    },
    { component: 'input', id: 'address', label: 'address', maxLength: 255, name: 'library.address', required: true, type: 'text' },
    { component: 'input', id: 'checkInDate', label: 'checkInDate', name: 'checkInDate', required: true, type: 'date' },
    { component: 'input', id: 'checkInHour', label: 'checkInTime', name: 'checkInHour', required: true, type: 'time' },
    {
        component: 'input',
        id: 'checkOutDate',
        label: 'checkOutDate',
        name: 'checkOutDate',
        required: true,
        type: 'date',
        validation: 'endDate'
    },
    {
        component: 'input',
        id: 'checkOutHour',
        label: 'checkOutTime',
        name: 'checkOutHour',
        required: true,
        type: 'time',
        validation: 'checkOutHour'
    },
    { component: 'input', id: 'guestCount', label: 'amountOfGuests', min: 1, name: 'guestCount', required: true, type: 'number' },
    {
        component: 'input',
        id: 'reserveCode',
        label: 'reserveCode',
        maxLength: 15,
        name: 'reserveCode',
        padding: false,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'roomType',
        label: 'typeOfRoom',
        maxLength: 120,
        name: 'roomType',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'includedMeals',
        label: 'mealsIncluded',
        name: 'library.includedMeals',
        options: ['breakfast', 'lunch', 'dinner'],
        padding: true,
        required: true,
        type: 'check'
    },
    {
        component: 'input',
        id: 'differences',
        label: 'differentials',
        maxLength: 255,
        name: 'library.differences',
        padding: true,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'passengers',
        label: 'selectPassengers',
        name: 'passengers',
        padding: true,
        required: true,
        type: 'clients'
    }
]

export { hotelFormFields }

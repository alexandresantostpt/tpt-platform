const tipFormFields = [
    { component: 'input', id: 'category', label: 'category', maxLength: 60, name: 'library.category', required: true, type: 'text' },
    {
        component: 'input',
        id: 'subCategory',
        label: 'subCategory',
        maxLength: 60,
        name: 'library.subCategory',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'title', label: 'title', maxLength: 120, name: 'library.name', required: true, type: 'text' },
    {
        component: 'input',
        id: 'describe',
        label: 'describe',
        maxLength: 255,
        name: 'library.describe',
        padding: true,
        required: true,
        type: 'textarea'
    },
    { component: 'input', id: 'workStart', label: 'workStart', name: 'library.workStart', required: true, type: 'time' },
    { component: 'input', id: 'workEnd', label: 'workEnd', name: 'library.workEnd', required: true, type: 'time' },
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
    { component: 'input', id: 'address', label: 'address', maxlength: 255, name: 'library.address', required: false, type: 'text' },
    { component: 'input', id: 'site', label: 'site', name: 'library.site', required: false, type: 'text' },
    {
        component: 'input',
        id: 'phone',
        label: 'phone',
        maxLength: 30,
        name: 'library.phone',
        padding: true,
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'observations',
        label: 'observations',
        maxLength: 255,
        name: 'library.observations',
        required: false,
        type: 'text'
    }
]

const tourFormFields = [
    {
        component: 'input',
        id: 'city',
        label: 'city',
        maxLength: 120,
        name: 'library.city',
        required: true,
        type: 'city',
        value: 'object'
    },
    {
        component: 'input',
        id: 'tourTitle',
        label: 'tourTitle',
        maxLength: 255,
        name: 'library.name',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'tourDescription',
        label: 'tourDescription',
        name: 'library.describe',
        required: true,
        type: 'textarea'
    },
    {
        component: 'input',
        id: 'tourDuration',
        label: 'tourDuration',
        maxLength: 255,
        name: 'library.duration',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'language',
        label: 'language',
        maxLength: 30,
        name: 'library.language',
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
    }
]

const hotelFormFields = [
    {
        component: 'input',
        id: 'hotelName',
        label: 'hotelName',
        maxLength: 255,
        name: 'library.name',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'address',
        label: 'address',
        maxLength: 255,
        name: 'library.address',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'differentials',
        label: 'differentials',
        maxLength: 255,
        name: 'library.differences',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'city',
        label: 'city',
        maxLength: 120,
        name: 'library.city',
        required: true,
        type: 'city',
        value: 'object'
    }
]

export { hotelFormFields, tipFormFields, tourFormFields }

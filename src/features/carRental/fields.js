const carRentalFormFields = [
    { component: 'input', id: 'id', label: 'id', name: 'id', required: false, type: 'hidden' },
    { component: 'input', id: 'v', label: 'v', name: 'v', required: false, type: 'hidden' },
    { component: 'input', id: 'name', label: 'agency', maxLength: 120, name: 'library.name', required: true, type: 'text' },
    { component: 'input', id: 'retireName', label: 'retireName', maxLength: 120, name: 'retireName', required: true, type: 'text' },
    {
        component: 'input',
        id: 'addressRetire',
        label: 'addressRetire',
        maxLength: 255,
        name: 'addressRetire',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'phoneNumberRetire',
        label: 'phoneNumberRetire',
        maxLength: 30,
        name: 'phoneNumberRetire',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'siteRetire', label: 'siteRetire', maxLength: 255, name: 'siteRetire', required: false, type: 'text' },
    { component: 'input', id: 'retireDate', label: 'retireDate', name: 'retireDate', required: true, type: 'date' },
    { component: 'input', id: 'hourRetire', label: 'hourRetire', name: 'hourRetire', padding: true, required: true, type: 'time' },
    {
        component: 'input',
        id: 'devolutionName',
        label: 'devolutionName',
        maxLength: 120,
        name: 'devolutionName',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'addressDevolution',
        label: 'addressDevolution',
        maxLength: 255,
        name: 'addressDevolution',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'phoneNumberDevolution',
        label: 'phoneNumberDevolution',
        maxLength: 30,
        name: 'phoneNumberDevolution',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'devolutionDate',
        label: 'devolutionDate',
        name: 'devolutionDate',
        required: true,
        type: 'date'
    },
    {
        component: 'input',
        id: 'hourDevolution',
        label: 'hourDevolution',
        name: 'hourDevolution',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'carModel',
        label: 'carModel',
        maxLength: 30,
        name: 'carModel',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'passengerResponsible',
        label: 'passengerResponsible',
        name: 'passengerResponsible',
        padding: true,
        required: true,
        type: 'clients'
    },
    {
        component: 'input',
        id: 'requiredDocuments',
        label: 'requiredDocuments',
        name: 'requiredDocuments',
        options: ['cnh', 'pid'],
        padding: true,
        required: true,
        type: 'radio'
    },
    { component: 'input', id: 'isIncluded', label: 'isIncluded', name: 'library.isIncluded', required: true, type: 'text' }
]

export { carRentalFormFields }

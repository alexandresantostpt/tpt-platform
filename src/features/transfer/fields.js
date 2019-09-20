const transferFormFields = [
    {
        component: 'input',
        id: 'name',
        label: 'transferName',
        maxLength: 120,
        name: 'library.name',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'localOperator',
        label: 'localOperator',
        maxLength: 120,
        name: 'localOperator',
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'date', label: 'transferDate', name: 'date', required: true, type: 'date' },
    {
        component: 'input',
        id: 'hour',
        label: 'transferHour',
        name: 'hour',
        required: true,
        type: 'time'
    },
    {
        component: 'input',
        id: 'estimatedTimeOfArrival',
        label: 'estimatedTimeOfArrival',
        name: 'estimatedTimeOfArrival',
        required: false,
        type: 'time'
    },
    {
        component: 'input',
        id: 'meetPoint',
        label: 'meetPoint',
        maxLength: 255,
        name: 'meetPoint',
        padding: true,
        required: true,
        type: 'text'
    },
    { component: 'input', id: 'model', label: 'carModel', maxLength: 60, name: 'car.model', required: true, type: 'text' },
    { component: 'input', id: 'board', label: 'board', maxLength: 15, name: 'car.board', padding: true, type: 'text' },
    { component: 'input', id: 'driverName', label: 'driverName', maxLength: 120, name: 'driver.name', required: false, type: 'text' },
    {
        component: 'input',
        id: 'driverTelephone',
        label: 'driverTelephone',
        maxLength: 30,
        name: 'driver.phone',
        required: false,
        type: 'text'
    },
    {
        component: 'input',
        id: 'howIdentifyDriver',
        label: 'howIdentifyDriver',
        maxLength: 120,
        name: 'driver.howIdentify',
        padding: true,
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'transferType',
        label: 'transferType',
        name: 'library.transferType',
        options: ['Privado', 'Regular'],
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
        id: 'assistance',
        label: 'assistance',
        name: 'library.assistance',
        options: ['Não tem', 'Personalizada', 'Recepção'],
        padding: true,
        required: true,
        type: 'radio'
    },
    {
        component: 'input',
        id: 'passengers',
        label: 'passenger',
        name: 'passengers',
        padding: true,
        required: true,
        type: 'clients'
    },
    {
        component: 'input',
        id: 'luggageLimite',
        label: 'luggageLimite',
        maxLength: 3,
        name: 'library.luggageLimite',
        required: false,
        type: 'number'
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

export { transferFormFields }

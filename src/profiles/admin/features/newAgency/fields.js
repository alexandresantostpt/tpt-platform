import { masks } from '@constants/masks'

const agencyBasicFormFields = [
    { component: 'input', id: 'socialName', label: 'agencyName', name: 'socialName', required: true, type: 'text' },
    {
        component: 'input',
        id: 'cnpj',
        label: 'cnpj',
        mask: masks.cnpj,
        maxLength: 18,
        name: 'cnpj',
        required: true,
        type: 'mask',
        validation: 'cnpj'
    },
    { component: 'input', id: 'nameAdm', label: 'nameAdm', name: 'nameAdm', required: true, type: 'text' },
    {
        component: 'input',
        id: 'cpfAdm',
        label: 'cpfAdm',
        mask: masks.cpf,
        name: 'cpfAdm',
        required: true,
        type: 'mask',
        validation: 'cpf'
    },
    {
        component: 'input',
        id: 'emailAdm',
        label: 'emailAdm',
        name: 'emailAdm',
        padding: true,
        required: true,
        type: 'text',
        validation: 'email'
    },
    {
        component: 'input',
        id: 'blocked',
        label: '',
        name: 'blocked',
        options: [{ text: 'Liberado', value: 'false' }, { text: 'Bloqueado', value: 'true' }],
        placeholder: 'access',
        required: true,
        type: 'select'
    }
]

const agencyCompleteFormFields = [
    { component: 'input', id: 'socialName', label: 'socialName', maxLength: 120, name: 'socialName', required: true, type: 'text' },
    {
        component: 'input',
        id: 'businessName',
        label: 'businessName',
        maxLength: 120,
        name: 'businessName',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'cnpj',
        label: 'cnpj',
        mask: masks.cnpj,
        maxLength: 18,
        name: 'cnpj',
        required: true,
        type: 'mask',
        validation: 'cnpj'
    },
    {
        component: 'input',
        id: 'phoneEmergency',
        label: 'phoneEmergency',
        maxLength: 30,
        name: 'phoneEmergency',
        required: true,
        type: 'text'
    },
    {
        component: 'input',
        id: 'phoneContact',
        label: 'phoneContact',
        maxLength: 30,
        name: 'phoneContact',
        required: true,
        type: 'text'
    }
]

export { agencyBasicFormFields, agencyCompleteFormFields }

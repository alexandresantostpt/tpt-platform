import { masks } from '@constants/masks'

const consultantFormFields = [
    { component: 'input', id: 'name', label: 'consultantName', maxLength: 120, name: 'name', required: true, type: 'text' },
    { component: 'input', id: 'cpf', label: 'cpf', mask: masks.cpf, name: 'cpf', required: true, type: 'mask', validation: 'cpf' },
    { component: 'input', id: 'email', label: 'email', name: 'email', required: true, type: 'text', validation: 'email' },
    { component: 'input', id: 'cellPhone', label: 'cellphone', maxLength: 30, name: 'cellPhone', required: true, type: 'text' },
    {
        component: 'input',
        id: 'blocked',
        label: '',
        name: 'blocked',
        options: [{ text: 'Liberado', value: false }, { text: 'Bloqueado', value: true }],
        placeholder: 'access',
        required: false,
        type: 'select'
    }
]

export { consultantFormFields }

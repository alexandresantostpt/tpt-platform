import { masks } from '@constants/masks'

const clientFormFields = [
    { component: 'input', id: 'name', label: 'clientName', maxLength: 120, name: 'name', required: true, type: 'text' },
    { component: 'input', id: 'email', label: 'email', name: 'email', required: true, type: 'text', validation: 'email' },
    { component: 'input', id: 'cpf', label: 'cpf', mask: masks.cpf, name: 'cpf', required: true, type: 'mask', validation: 'cpf' }
]

export { clientFormFields }

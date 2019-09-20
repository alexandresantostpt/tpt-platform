import { masks } from '@/constants/masks'

const clientsFields = id => [
    {
        component: 'input',
        fieldsToChange: [
            { field: `clients[${id}].cpf`, name: 'cpf' },
            { field: `clients[${id}].email`, name: 'email' },
            { field: `clients[${id}]._id`, name: '_id' }
        ],
        id: `clients[${id}].name`,
        label: 'travalerName',
        labelCount: id + 1,
        name: `clients[${id}].name`,
        required: true,
        type: 'suggest'
    },
    {
        component: 'input',
        id: `clients[${id}].cpf`,
        label: 'clientCpf',
        mask: masks.cpf,
        name: `clients[${id}].cpf`,
        required: true,
        type: 'mask',
        validation: 'cpf'
    },
    {
        component: 'input',
        id: `clients[${id}].email`,
        label: 'clientEmail',
        name: `clients[${id}].email`,
        required: true,
        type: 'text',
        validation: 'email'
    }
]

export default clientsFields

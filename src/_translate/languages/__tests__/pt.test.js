import { messages } from '../pt'

describe('Tests for portuguese messages', () => {
    it('Should match each with your respective value', () => {
        const { pt } = messages
        const {
            translations: { forms, labels, menus, panelActions, placeholders, titles }
        } = pt
        expect(forms.validations.fieldRequired).toEqual('Campo obrigatório')
        expect(labels.activitiesRegistry).toEqual('Registro de atividades')
        expect(labels.cities).toEqual('Cidades')
        expect(labels.clientCpf).toEqual('CPF')
        expect(labels.clientEmail).toEqual('Email')
        expect(labels.clientName).toEqual('Cliente')
        expect(labels.date).toEqual('Data')
        expect(labels.destiny).toEqual('Destino')
        expect(labels.requiredField).toEqual(' *')
        expect(labels.status).toEqual('Status')
        expect(menus.clients).toEqual('Clientes')
        expect(menus.library).toEqual('Biblioteca')
        expect(menus.travels).toEqual('Viagens')
        expect(panelActions.copy).toEqual('Copiar')
        expect(panelActions.preview).toEqual('Preview')
        expect(panelActions.script).toEqual('Roteiro')
        expect(panelActions.shelve).toEqual('Arquivar')
        expect(placeholders.date).toEqual('Selecione uma data...')
        expect(placeholders.search).toEqual('Pesquise sua viagem')
        expect(placeholders.select).toEqual('Selecione uma cidade...')
        expect(titles.myProfile).toEqual('Meu perfil')
        expect(titles.notifications).toEqual('Notificações')
        expect(titles.tasks).toEqual('Tarefas')
        expect(titles.title).toEqual('Título')
    })
})

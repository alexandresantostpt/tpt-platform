import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { i18n } from '@i18n'

import App from '@containers/App'
import Container from '@containers/Container'
import Summary from '@containers/Summary'

import Button from '@components/button/Button'
import FormBuilder from '@components/form/FormBuilder'
import Modal from '@components/modal/ConfirmationModal'
import Search from '@components/search/Search'
import Table from '@components/table/Table'

import { clientFormFields } from '../fields'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'

import ClientModel from '../ClientModel'
import If from '@/components/if/If'
import CancelForm from '@/components/cancel/CancelForm'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1.1875rem 3.5rem;
`

const Text = styled.div`
    color: ${colors.link};
    font-size: 1.063rem;
    font-weight: 300;
    line-height: 1.53;
    text-align: center;
    width: 18.75rem;
`

const ClientList = props => {
    const { requestResetAction, requestSearchAction, client, clients, user } = props
    const [showNewClientForm, updateShowNewClientForm] = useState(false)
    const [modalItem, updateModalItem] = useState(null)
    const [showModal, updateShowModal] = useState(false)
    const form = useRef()

    useEffect(() => {
        const { requestGetListAction } = props
        PubSub.subscribe(events.OPEN_MODAL, handleOpenModal)
        requestGetListAction()
    }, [])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        requestSaveDataAction(new ClientModel({ ...values, agency: user.agency }).toDTO())
        reset()
        updateShowNewClientForm(false)
    }

    const del = row => {
        const { requestDelAction } = props
        const { id } = row
        if (id) {
            requestDelAction({ id })
        }
        reset()
    }

    const getSingle = row => {
        const { requestGetSingleAction } = props
        const { id } = row
        if (id) {
            requestGetSingleAction({ id })
        }
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        requestResetAction()
    }

    const handleClickNewClient = () => {
        reset()
        updateShowNewClientForm(true)
    }

    const handleClickCancel = () => {
        reset()
        updateShowNewClientForm(false)
    }

    const handleCloseModal = () => {
        updateShowModal(false)
    }

    const handleOpenModal = (msg, item) => {
        updateShowModal(true)
        updateModalItem(item)
    }

    return (
        <App>
            <Container>
                <StyledHeader>
                    <Search onType={requestSearchAction} placeholder={i18n.t('placeholders.searchYourClients')} />
                    <Button
                        color={colors.lightBlueGray}
                        disabled={!client && showNewClientForm}
                        onClick={handleClickNewClient}
                        text={i18n.t('buttons.newClient')}
                    />
                </StyledHeader>
                <Table columns={['name', 'email', 'cpf', 'actions']} data={clients} onDelete={del} onEdit={getSingle} />
            </Container>
            <Summary>
                <If condition={showNewClientForm || client}>
                    <FormBuilder
                        fields={clientFormFields}
                        initialValues={client ? client.toForm() : {}}
                        onSubmit={callSaveData}
                        ref={process.env.__TEST__ ? null : form}
                    />
                    <FormButtonContainer>
                        <Button color={colors.purple} disabled={false} onClick={onSaveClick} text={i18n.t('buttons.saveClient')} />
                        <CancelForm action={handleClickCancel} />
                    </FormButtonContainer>
                </If>
            </Summary>
            <Modal close={handleCloseModal} confirmationAction={del} icon={'alert'} item={modalItem} openModal={showModal}>
                <Text>{i18n.t('modal.aboutToDeleteAgency')}</Text>
                <Text>{i18n.t('modal.continue')}</Text>
            </Modal>
        </App>
    )
}
ClientList.defaultProps = {
    client: {}
}
ClientList.propTypes = {
    client: PropTypes.objectOf(ClientModel),
    clients: PropTypes.arrayOf(ClientModel).isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetListAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestResetAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchAction: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default ClientList

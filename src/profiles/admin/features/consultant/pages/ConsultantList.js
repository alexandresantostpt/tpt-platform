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
import Search from '@components/search/Search'
import Table from '@components/table/Table'

import { consultantFormFields } from '../fields'

import FormButtonContainer from '@components/form/container/button/FormButtonContainer'

import ConsultantModel from '../ConsultantModel'
import CancelForm from '@/components/cancel/CancelForm'
import If from '@/components/if/If'
import Modal from '@components/modal/ConfirmationModal'

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

// eslint-disable-next-line
const ConsultantList = props => {
    const { requestResetAction, requestSearchAction, consultant, consultants, user } = props
    const [modalItem, updateModalItem] = useState(null)
    const [showModal, updateShowModal] = useState(false)
    const [showNewConsultorForm, updateShowNewConsultorForm] = useState(false)
    const form = useRef()

    useEffect(() => {
        const { requestGetListAction } = props
        requestGetListAction()
        PubSub.subscribe(events.OPEN_MODAL, handleOpenModal)
    }, [])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        requestSaveDataAction(new ConsultantModel({ ...values, agency: user.agency }).toDTO())
        reset()
        updateShowNewConsultorForm(false)
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

    const handleClickNewConsultant = () => {
        reset()
        updateShowNewConsultorForm(true)
    }

    const handleClickCancel = () => {
        reset()
        updateShowNewConsultorForm(false)
    }

    const handleOpenModal = (msg, item) => {
        updateShowModal(true)
        updateModalItem(item)
    }

    const handleCloseModal = () => {
        updateShowModal(false)
    }

    if (consultant && consultant.id) {
        const requiredFields = ['cpf', 'email']
        consultantFormFields.forEach(field => (field.readOnly = requiredFields.includes(field.name)))
    } else {
        consultantFormFields.forEach(field => (field.readOnly = false))
    }

    return (
        <App>
            <Container>
                <StyledHeader>
                    <Search onType={requestSearchAction} placeholder={i18n.t('placeholders.searchYourConsultants')} />
                    <Button
                        color={colors.lightBlueGray}
                        disabled={!consultant && showNewConsultorForm}
                        onClick={handleClickNewConsultant}
                        text={i18n.t('buttons.newConsultant')}
                    />
                </StyledHeader>
                <Table
                    columns={['statusToTable', 'consultantName', 'email', 'lastAccess', 'actions']}
                    data={consultants}
                    onDelete={del}
                    onEdit={getSingle}
                />
            </Container>
            <Summary>
                <If condition={showNewConsultorForm || !!consultant}>
                    <FormBuilder
                        fields={consultantFormFields}
                        initialValues={consultant ? consultant.toForm() : {}}
                        onSubmit={callSaveData}
                        ref={process.env.__TEST__ ? null : form}
                    />
                    <FormButtonContainer>
                        <Button color={colors.purple} disabled={false} onClick={onSaveClick} text={i18n.t('buttons.saveConsultant')} />
                        <CancelForm action={handleClickCancel} />
                    </FormButtonContainer>
                </If>
            </Summary>
            <Modal close={handleCloseModal} confirmationAction={del} icon={'alert'} item={modalItem} openModal={showModal}>
                <Text>{i18n.t('modal.aboutToDeleteConsultant')}</Text>
                <Text>{i18n.t('modal.continue')}</Text>
            </Modal>
        </App>
    )
}

ConsultantList.defaultProps = {
    consultant: {}
}

ConsultantList.propTypes = {
    consultant: PropTypes.objectOf(ConsultantModel),
    consultants: PropTypes.arrayOf(ConsultantModel).isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestGetListAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestResetAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchAction: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default ConsultantList

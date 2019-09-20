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
import FormButtonContainer from '@components/form/container/button/FormButtonContainer'

import { getUser } from '@utils/auth'

import { agencyBasicFormFields } from '../fields'

import AgencyUserModel from '../AgencyUserModel'
import CancelForm from '@/components/cancel/CancelForm'
import If from '@/components/if/If'
import Modal from '@components/modal/ConfirmationModal'

import { isNotNull } from '@utils/functions'

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

const AgencyList = props => {
    const { requestResetAction, requestSearchAction, agencies, agency } = props
    const [modalItem, updateModalItem] = useState(null)
    const [showModal, updateShowModal] = useState(false)
    const [showNewAgencyForm, updateShowNewAgencyForm] = useState(false)
    const form = useRef()
    const masterAgency = getUser() && getUser().agency

    useEffect(() => {
        const { requestGetListAction } = props
        requestGetListAction()
        PubSub.subscribe(events.OPEN_MODAL, handleOpenModal)
    }, [])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        requestSaveDataAction({
            data: new AgencyUserModel({
                ...values,
                agency: agency && agency.agency,
                masterAgency: masterAgency,
                user: agency && agency.user
            }).toDTO()
        })
        reset()
        updateShowNewAgencyForm(false)
    }

    const del = row => {
        const { requestDelAction } = props
        const { userId } = row
        const { agencyId } = row
        if (agencyId) {
            requestDelAction({ agencyId, userId })
        }
        reset()
    }

    const gettBtnText = () => {
        if (agency && agency.agencyId) {
            return i18n.t('buttons.save')
        }
        return i18n.t('buttons.add')
    }

    const getSingle = row => {
        const agencyId = row.agency._id
        const userId = row.userId || row.user._id
        const id = `${agencyId}/${userId}`
        const { requestGetSingleAction } = props
        requestGetSingleAction({ id })
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        PubSub.publish(events.FORM_RESET)
        requestResetAction()
    }

    const handleClickNewAgency = () => {
        reset()
        updateShowNewAgencyForm(true)
    }

    const handleClickCancel = () => {
        reset()
        updateShowNewAgencyForm(false)
    }

    const handleCloseModal = () => {
        updateShowModal(false)
    }

    const handleOpenModal = (msg, item) => {
        updateShowModal(true)
        updateModalItem(item)
    }

    if (agency && agency.agencyId) {
        const requiredFields = ['cnpj', 'cpfAdm', 'emailAdm']
        agencyBasicFormFields.forEach(field => (field.readOnly = requiredFields.includes(field.name)))
    } else {
        agencyBasicFormFields.forEach(field => (field.readOnly = false))
    }

    return (
        <App>
            <Container>
                <StyledHeader>
                    <Search onType={requestSearchAction} placeholder={i18n.t('placeholders.searchAgency')} />
                    <Button
                        color={colors.lightBlueGray}
                        disabled={!agency && showNewAgencyForm}
                        onClick={handleClickNewAgency}
                        text={i18n.t('buttons.newAgency')}
                    />
                </StyledHeader>
                <Table
                    columns={['statusToTable', 'socialNameToTable', 'nameToTable', 'lastAccessToTable', 'actions']}
                    data={agencies}
                    onDelete={del}
                    onEdit={getSingle}
                />
            </Container>
            <Summary>
                <If condition={showNewAgencyForm || isNotNull(agency)}>
                    <FormBuilder
                        fields={agencyBasicFormFields}
                        initialValues={agency ? agency.toForm() : {}}
                        onSubmit={callSaveData}
                        ref={process.env.__TEST__ ? null : form}
                    />
                    <FormButtonContainer>
                        <Button color={colors.purple} disabled={false} onClick={onSaveClick} text={gettBtnText()} />
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

AgencyList.defaultProps = {
    agency: {}
}

AgencyList.propTypes = {
    agencies: PropTypes.arrayOf(AgencyUserModel).isRequired,
    agency: PropTypes.objectOf(AgencyUserModel),
    requestDelAction: PropTypes.func.isRequired,
    requestGetListAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestResetAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchAction: PropTypes.func.isRequired
}

export default AgencyList

import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { isNotNull, not } from '@utils/functions'

import { colors } from '@helpers/colors'

import App from '@containers/App'
import Container from '@containers/Container'
import Summary from '@containers/Summary'

import Button from '@components/button/Button'
import FormBuilder from '@components/form/FormBuilder'
import If from '@components/if/If'
import Panel from '@components/panel/Panel'
import Search from '@components/search/Search'
import Table from '@components/table/Table'
import FormButtonContainer from '@components/form/container/button/FormButtonContainer'
import Modal from '@components/modal/ConfirmationModal'

import { StyledHeader } from '@components/collapse/CollapseDivider'

import { getUser } from '@utils/auth'

import AddClients from '../components/AddClients'
import Clients from '../components/Clients'
import TravelModel from '../TravelModel'
import clientsFields from '../components/clientsFields'
import travelFormFields from '../fields'
import staticTravelFormFields from '../staticFields'
import CancelForm from '../../../components/cancel/CancelForm'
import { iconSelector } from '../IconSelector'

const StyledTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1.1875rem 3.5rem;
`
const StyledTables = styled.div`
    ${StyledHeader} {
        padding: 2rem 1rem;
    }
`

const StyledIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
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
const TravelList = props => {
    const {
        requestSearchAction,
        requestSearchCityGoogleApiAction,
        requestSearchCityOurApiAction,
        requestSearchClientsAction,
        resetSuggestionsAction,
        suggestions,
        travel,
        travels
    } = props
    const [nofClients, updateNofClients] = useState(1)
    const [isDisabled, updateIsDisabled] = useState(false)
    const [image, updateImage] = useState()
    const [title, updateTitle] = useState(i18n.t('titles.title'))
    const [clientes, updateClientes] = useState(null)
    const [modalItem, updateModalItem] = useState(null)
    const [showModal, updateShowModal] = useState(false)
    const [showNewTravel, updateShowNewTravel] = useState(false)
    const form = useRef()
    const user = getUser()

    const generateClientsFields = fieldsCount => {
        const fields = []
        for (let i = 0; i < fieldsCount; i++) {
            fields.push(clientsFields(i))
        }
        return fields
    }

    useEffect(() => {
        const { requestGetListAction } = props
        requestGetListAction()
        travel && updateNofClients(travel.clients.length)
        travel && title === i18n.t('titles.title') && updateTitle(travel.title)
        travel && updateClientes(travel.clients)
        PubSub.subscribe(events.OPEN_MODAL, handleOpenModal)
    }, [travel])

    const callSaveData = values => {
        const { requestSaveDataAction } = props
        values.title = title
        const clients = values.clients.slice(0, nofClients)
        requestSaveDataAction({
            data: new TravelModel({ ...values, agency: user.agency, clients: clients, users: [user.id] }).toDTO(),
            image
        })
        reset()
        updateShowNewTravel(false)
    }

    const archive = () => {
        const { requestArchiveAction } = props
        if (travel) {
            requestArchiveAction({ id: travel.id })
            reset()
        }
    }

    const edit = row => {
        getSingle(row)
        updateIsDisabled(false)
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
        const { requestEditAction } = props
        const { id } = row
        if (id) {
            updateTitle(i18n.t('titles.title'))
            requestEditAction({ id })
        }
    }

    const show = row => {
        getSingle(row)
        updateIsDisabled(true)
    }

    const onSaveClick = () => form.current.form.submit()

    const reset = () => {
        const { requestResetAction } = props
        PubSub.publish(events.FORM_RESET)
        requestResetAction()
        updateNofClients(1)
        updateTitle(i18n.t('titles.title'))
        updateImage(null)
        updateIsDisabled(false)
    }

    const unarchive = row => {
        const { requestUnarchiveAction } = props
        const { id } = row
        if (id) {
            requestUnarchiveAction({ id })
        }
        reset()
    }

    const handleClickNewTravel = () => {
        reset()
        updateShowNewTravel(true)
    }

    const handleClickCancel = () => {
        reset()
        updateShowNewTravel(false)
    }

    const handleOpenModal = (_, item) => {
        updateShowModal(true)
        updateModalItem(item)
    }

    const handleCloseModal = () => {
        updateShowModal(false)
    }

    const getIcons = () => (travel ? iconSelector(travel.services) : null)

    const clientsFormFields = generateClientsFields(nofClients)

    return (
        <App>
            <Container>
                <StyledTableHeader>
                    <Search onType={requestSearchAction} />
                    <Button
                        color={colors.lightBlueGray}
                        disabled={!travel && showNewTravel}
                        onClick={handleClickNewTravel}
                        text={i18n.t('buttons.newTravel')}
                    />
                </StyledTableHeader>
                <StyledTables>
                    <Table
                        columns={['statusToTable', 'clientsToString', 'citiesDestinyToString', 'travelStartDateToString', 'actions']}
                        data={travels}
                        onDelete={del}
                        onEdit={edit}
                        onRowClick={show}
                        onUnarchive={unarchive}
                    />
                </StyledTables>
            </Container>
            <Summary>
                <If condition={showNewTravel || isNotNull(travel)}>
                    <Panel
                        backgroundImageUrl={travel && travel.getImage()}
                        changeTitle={updateTitle}
                        disabled={isDisabled}
                        id={travel && travel.id}
                        onArquive={travel && archive}
                        status={travel && travel.statusRaw}
                        title={title}
                        uploadImage={updateImage}
                    />
                    <FormBuilder
                        disabled={isDisabled}
                        fields={isDisabled ? staticTravelFormFields : travelFormFields}
                        fieldsToValidate={[...travelFormFields, ...clientsFormFields]}
                        getSuggestions={requestSearchCityOurApiAction}
                        getSuggestions2={requestSearchCityGoogleApiAction}
                        initialValues={travel ? travel.toForm() : {}}
                        onSubmit={callSaveData}
                        ref={process.env.__TEST__ ? null : form}
                        resetSuggestions={resetSuggestionsAction}
                        suggestions={suggestions}
                    >
                        <If condition={not(isDisabled)} el={<Clients form={form} initialValues={clientes} />}>
                            <AddClients
                                disabled={isDisabled}
                                fields={clientsFormFields}
                                form={form}
                                getSuggestions={requestSearchClientsAction}
                                nofClients={nofClients}
                                resetSuggestions={resetSuggestionsAction}
                                suggestions={suggestions}
                                updateNofClients={updateNofClients}
                            />
                        </If>
                    </FormBuilder>
                    <If condition={isDisabled}>
                        <StyledIcons>{getIcons()}</StyledIcons>
                    </If>
                    <FormButtonContainer>
                        <If condition={not(isDisabled)}>
                            <Button color={colors.purple} disabled={false} onClick={onSaveClick} text={i18n.t('buttons.saveTravel')} />
                            <CancelForm action={handleClickCancel} />
                        </If>
                    </FormButtonContainer>
                </If>
            </Summary>
            <Modal close={handleCloseModal} confirmationAction={del} icon={'alert'} item={modalItem} openModal={showModal}>
                <Text>{i18n.t('modal.aboutToDeleteTravel')}</Text>
                <Text>{i18n.t('modal.continue')}</Text>
            </Modal>
        </App>
    )
}

TravelList.defaultProps = {
    suggestions: [],
    travel: {}
}

TravelList.propTypes = {
    requestArchiveAction: PropTypes.func.isRequired,
    requestDelAction: PropTypes.func.isRequired,
    requestEditAction: PropTypes.func.isRequired,
    requestGetListAction: PropTypes.func.isRequired,
    requestResetAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    requestSearchAction: PropTypes.func.isRequired,
    requestSearchCityGoogleApiAction: PropTypes.func.isRequired,
    requestSearchCityOurApiAction: PropTypes.func.isRequired,
    requestSearchClientsAction: PropTypes.func.isRequired,
    requestUnarchiveAction: PropTypes.func.isRequired,
    resetSuggestionsAction: PropTypes.func.isRequired,
    suggestions: PropTypes.array,
    travel: PropTypes.objectOf(TravelModel),
    travels: PropTypes.arrayOf(TravelModel).isRequired
}

export default TravelList

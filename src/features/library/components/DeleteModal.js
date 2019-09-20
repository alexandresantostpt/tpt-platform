import PubSub from 'pubsub-js'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { events } from '@constants/events'
import { i18n } from '@i18n'
import Modal from '@components/modal/ConfirmationModal'

const Text = styled.div`
    color: ${colors.link};
    font-size: 1.063rem;
    font-weight: 300;
    line-height: 1.53;
    text-align: center;
    width: 18.75rem;
`

const DeleteModal = ({ onDelete, translateMessage }) => {
    const [modalItem, updateModalItem] = useState(null)
    const [showModal, updateShowModal] = useState(false)

    const handleOpenModal = (_, item) => {
        updateShowModal(true)
        updateModalItem(item)
    }

    const handleCloseModal = () => {
        updateShowModal(false)
        updateModalItem()
    }

    useEffect(() => {
        PubSub.subscribe(events.OPEN_MODAL, handleOpenModal)
    })

    return (
        <Modal close={handleCloseModal} confirmationAction={onDelete} icon={'alert'} item={modalItem} openModal={showModal}>
            <Text>{i18n.t(translateMessage)}</Text>
            <Text>{i18n.t('modal.continue')}</Text>
        </Modal>
    )
}

DeleteModal.defaultProps = {}

DeleteModal.propTypes = {
    onDelete: PropTypes.func.isRequired,
    translateMessage: PropTypes.string.isRequired
}

export default DeleteModal

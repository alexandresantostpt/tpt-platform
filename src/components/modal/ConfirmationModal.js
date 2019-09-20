import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { colors } from '@helpers/colors'
import Icon, { StyledIcon } from '@components/icon/Icon'
import ClickOutside from './ClickOutside'
import { i18n } from '@i18n'

const Button = styled.button`
    background-color: ${colors.white};
    border: solid 0.8px ${colors.lightBlueGray};
    border-radius: 1.5rem;
    color: ${colors.lightBlueGray};
    height: 26.3px;
    margin: 1rem;
    outline: none;
    padding: 0.1875rem 2.5rem;
    text-transform: uppercase;
    width: 112.3px;
    &:hover {
        background-color: ${colors.white};
        border: solid 0.8px ${colors.purple};
        color: ${colors.purple};
    }
`
const ButtonContainer = styled.div`
    flex-direction: row;
    margin-top: 1rem;
`

const CenterIcon = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    outline: none;
    width: 27rem;
    ${StyledIcon} {
        align-self: center;
        color: ${colors.link};
        margin: 0.2rem;
        &:hover {
            color: ${colors.purple};
        }
    }
`
const Content = styled.div`
    align-items: center;
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 180px;
    width: 27rem;
`
const IconLayout = styled.div`
    background: linear-gradient(-225deg, #5271c4 0%, #b19fff 48%, #eca1fe 100%);
    border-radius: 30rem;
    display: flex;
    height: 21px;
    justify-content: center;
    width: 21px;
    ${StyledIcon} {
        align-self: center;
        color: ${colors.white};
        margin-right: 0.1px;
        &:hover {
            color: ${colors.white};
        }
    }
`

const ModalContainer = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`

const ConfirmationModal = ({ openModal, confirmationAction, close, item, icon, children }) => (
    <>
        {openModal ? (
            <ModalContainer>
                <ClickOutside onClick={() => close()}>
                    <Content>
                        <CloseButton>
                            <Icon fontSize="1.5rem" icon="times" onClick={() => close()} pointer={true} />
                        </CloseButton>
                        <CenterIcon>
                            <IconLayout>
                                <Icon fontSize="1.2rem" icon={icon} pointer={true} />
                            </IconLayout>
                        </CenterIcon>
                        {children}
                        <ButtonContainer>
                            <Button
                                onClick={function() {
                                    confirmationAction(item)
                                    close()
                                }}
                            >
                                {i18n.t('buttons.yes')}
                            </Button>
                            <Button onClick={() => close()}> {i18n.t('buttons.no')}</Button>
                        </ButtonContainer>
                    </Content>
                </ClickOutside>
            </ModalContainer>
        ) : null}
    </>
)
ConfirmationModal.defaultProps = {
    close: null,
    item: null
}

ConfirmationModal.propTypes = {
    children: PropTypes.array.isRequired,
    close: PropTypes.func,
    confirmationAction: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    item: PropTypes.object,
    openModal: PropTypes.bool.isRequired
}

export default ConfirmationModal

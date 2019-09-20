import { services, servicesColors } from '@constants/services'

import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import Icon, { StyledIcon } from '@components/icon/Icon'

import { getServiceId, navigateTo } from '@utils/browser'
import { colors } from '@helpers/colors'

import { i18n } from '@i18n'

const checkIconBullet = css`
    ${({ type }) => {
        if (type === services.TIP) {
            return `
                content: '\\e932';
                font-size: 1rem;
                margin-right: 0.5rem;
            `
        }
        return `
            content: '•';
            font-size: 1.5rem;
            margin-right: 1rem;
        `
    }}
`

const serviceActive = css`
    backdrop-filter: blur(30px);
    background-color: #f4f4f4;
    border-radius: 12px;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.13);
`

const StyledDelIcon = styled.span`
    background-color: ${colors.dustyPink};
    border-radius: 100%;
    margin-left: -0.8rem;
    margin-top: -0.7rem;
    position: absolute;

    ${StyledIcon} {
        align-self: flex-start !important;
        color: white !important;
        font-weight: 500;
        margin: -0.1rem !important;
    }
`

const StyledTravelScript = styled.div`
    color: ${({ theme }) => theme.text};
    display: flex;
    margin: auto;
    margin-top: 2rem;
    min-height: 4rem;
    ${({ active }) => (active ? serviceActive : null)};
    padding: 0;
    position: relative;
    transition: all 0.2s cubic-bezier(1, 0.5, 0.7, 1);
    width: 70%;

    &:hover {
        ${serviceActive};

        ${StyledIcon} {
            display: block;
        }
    }

    ${StyledIcon} {
        align-self: center;
        color: ${colors.link};
        display: none;
    }
`

const StyledService = styled.div`
    align-content: space-between;
    cursor: pointer;
    display: flex;
    flex: 1;
`

const StyledBullet = styled.div`
    align-self: center;
    font-family: ${({ type }) => (type === services.TIP ? 'icomoon' : null)};
    padding-left: 1rem;
    &::before {
        color: ${({ serviceColor }) => serviceColor};
        ${checkIconBullet};
    }
`

const StyledServiceInformation = styled.div`
    align-self: center;
    margin-right: 2rem;
`

const StyledName = styled.span`
    font-size: 1rem;
    font-weight: 300;
`

const StyledType = styled.div`
    font-size: 1.2rem;
`

const TravelScriptService = ({ dateId, delService, scriptDate, scriptId, service, travelId }) => {
    const serviceId = getServiceId()

    const handleDelClick = () =>
        delService({
            data: {
                dateId,
                scriptId,
                serviceId: service.obj._id
            },
            type: service.obj.type
        })

    const handlePreviewClick = () => {
        navigateTo(
            `/travel/${travelId}/script/${service.lowerCaseType}/${
                service.obj._id
            }?scriptDate=${scriptDate}&scriptId=${scriptId}&dateId=${dateId}`
        )
    }

    return (
        <StyledTravelScript active={service.id === serviceId}>
            <StyledDelIcon>
                <Icon fontSize="1.5rem" icon={'times'} onClick={handleDelClick} />
            </StyledDelIcon>
            <StyledService onClick={handlePreviewClick}>
                <StyledBullet serviceColor={servicesColors[service.type]} type={service.type} />
                <StyledServiceInformation>
                    <StyledType>{i18n.t(`labels.${service.lowerCaseType}`)}</StyledType>
                    <StyledName>{service.name}</StyledName>
                </StyledServiceInformation>
            </StyledService>
        </StyledTravelScript>
    )
}

TravelScriptService.propTypes = {
    dateId: PropTypes.string.isRequired,
    delService: PropTypes.func.isRequired,
    scriptDate: PropTypes.string.isRequired,
    scriptId: PropTypes.string.isRequired,
    service: PropTypes.object.isRequired,
    travelId: PropTypes.string.isRequired
}

export default TravelScriptService

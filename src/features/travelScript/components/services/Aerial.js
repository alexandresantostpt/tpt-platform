import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'
import styled from '@react-pdf/styled-components'

import { i18n } from '@i18n'

import { formats } from '@constants/dateFormats'

import Col from './styledComponents/Col'
import Description from './styledComponents/Description'
import Label from './styledComponents/Label'
import Row from './styledComponents/Row'
import ServiceHeader from './styledComponents/ServiceHeader'
import ServiceContainer from './styledComponents/ServiceContainer'
import ServiceInfo from './styledComponents/ServiceInfo'

const StyledClientWrapper = styled.View`
    margin: 0 15pt 15pt;
`
const findClientName = (id, clients) => {
    const client = clients.find(item => item._id === id)
    return client.name || ''
}
/* eslint-disable sort-keys */
const Aerial = ({ clients, journeys, type }) =>
    journeys.map(journey => {
        const { companyName, flightNumber, from, passengers, to } = journey
        return (
            <ServiceContainer key={journey._id}>
                <ServiceHeader type={type}>{companyName}</ServiceHeader>
                <ServiceInfo
                    obj={{
                        cityExit: from.city,
                        airportExit: from.airport,
                        hourFrom: moment(from.hour).format(formats.time),
                        cityDestiny: to.city,
                        airportDestiny: to.airport,
                        hourArrival: moment(to.hour).format(formats.time)
                    }}
                />
                {passengers.map(item => (
                    <StyledClientWrapper key={item.id}>
                        <Row>
                            <Col flexTable>
                                <Label>{i18n.t('labels.passengerName')}</Label>
                                <Description>{findClientName(item.client, clients)}</Description>
                            </Col>
                            <Col flexTable>
                                <Label>{i18n.t('labels.flightNumber')}</Label>
                                <Description>{flightNumber}</Description>
                            </Col>
                        </Row>
                        <Row>
                            <Col flexTable>
                                <Label>{i18n.t('labels.eticket')}</Label>
                                <Description>{item.ticket}</Description>
                            </Col>
                            <Col flexTable>
                                <Label>{i18n.t('labels.reserveCode')}</Label>
                                <Description>{item.reserveCode}</Description>
                            </Col>
                        </Row>
                        <Row>
                            <Col flexTable>
                                <Label>{i18n.t('labels.seat')}</Label>
                                <Description>{item.seat}</Description>
                            </Col>
                            <Col flexTable>
                                <Label>{i18n.t('labels.class')}</Label>
                                <Description>{item.session}</Description>
                            </Col>
                        </Row>
                    </StyledClientWrapper>
                ))}
            </ServiceContainer>
        )
    })
/* eslint-enable sort-keys */

Aerial.defaultProps = {
    journeys: []
}

Aerial.propTypes = {
    clients: PropTypes.array,
    journeys: PropTypes.array,
    type: PropTypes.string.isRequired
}

export default Aerial

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
const Train = ({ clients, library, destiny, from, hourEstimatedArrival, passengers, type }) => (
    <ServiceContainer>
        <ServiceHeader type={type}>{library.name}</ServiceHeader>
        <ServiceInfo
            obj={{
                stationFrom: from.state,
                hourFrom: moment(from.hour).format(formats.time),
                cityDestiny: destiny.city,
                stationDestiny: destiny.state,
                hourEstimatedArrival: moment(hourEstimatedArrival).format(formats.time)
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
                        <Label>{i18n.t('labels.platform')}</Label>
                        <Description>{item.platform}</Description>
                    </Col>
                </Row>
                <Row>
                    <Col flexTable>
                        <Label>{i18n.t('labels.wagon')}</Label>
                        <Description>{item.wagon}</Description>
                    </Col>
                    <Col flexTable>
                        <Label>{i18n.t('labels.seat')}</Label>
                        <Description>{item.seat}</Description>
                    </Col>
                </Row>
            </StyledClientWrapper>
        ))}
    </ServiceContainer>
)
/* eslint-enable sort-keys */

Train.defaultProps = {
    destiny: {},
    from: {},
    hourEstimatedArrival: '',
    library: {},
    passengers: []
}

Train.propTypes = {
    clients: PropTypes.array.isRequired,
    destiny: PropTypes.object,
    from: PropTypes.object,
    hourEstimatedArrival: PropTypes.string,
    library: PropTypes.shape({
        name: PropTypes.string
    }),
    passengers: PropTypes.array,
    type: PropTypes.string.isRequired
}

export default Train

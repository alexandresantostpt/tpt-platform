import { pageFormats } from '@constants/pageFormats'

import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import styled from '@react-pdf/styled-components'
import { Document, Font, Page, View } from '@react-pdf/renderer'
import { withRouter } from 'react-router-dom'

import { colors } from '@helpers/colors'
import { services as globalServices } from '@constants/services'
import { services } from '../components/services'

import PDF from '@containers/PDF'

import TravelScriptModel from '../models/TravelScriptModel'

Font.register(`${process.env.PUBLIC_URL}/fonts/cardo/Cardo-Regular.ttf`, {
    family: 'Cardo',
    fonts: [{ fontStyle: 'normal', fontWeight: 'normal' }]
})

const Container = styled.View`
    padding: 32pt;
`
const Image = styled.Image`
    height: 150pt;
    width: 100%;
`
const DayNumber = styled.Text`
    color: #696b79;
    font-size: 20pt;
    margin-right: 20pt;
`
const Divider = styled.View`
    border-top: 1pt solid #f2f2f2;
    flex: 1;
    margin-top: 15pt;
`

const Title = styled.Text`
    color: ${colors.text};
    font-family: Cardo, sans-serif;
    font-size: 22pt;
    font-weight: 300;
    margin-top: 50pt;
`

const ServiceHeader = styled.View`
    flex-direction: row;
    margin-bottom: 30;
`
const Date = styled.Text`
    color: #9b9eb1;
    font-size: 14pt;
    font-weight: 100;
`

/* eslint-disable complexity */
const TravelScriptList = ({ match, requestGetSingleAction, travelScript }) => {
    const {
        params: { id }
    } = match

    useEffect(() => {
        requestGetSingleAction({ id })
    }, [])
    const clients = (travelScript && travelScript.travel && travelScript.travel.clients) || []
    const dates = (travelScript && travelScript.dates) || []
    return (
        <PDF>
            <Document>
                <Page size={pageFormats.A5}>
                    <View>
                        {travelScript && travelScript.travel && travelScript.travel.image && (
                            <Image src={travelScript.travel.getImage()} />
                        )}
                    </View>
                    <Container>
                        <Title>{travelScript && travelScript.travel.getClient().name}</Title>
                        <Date>{travelScript && travelScript.travel.getDate()}</Date>
                    </Container>
                    <Container>
                        {dates.map((date, index) => (
                            <View key={index}>
                                <ServiceHeader wrap={false}>
                                    <DayNumber>{index + 1}</DayNumber>
                                    <View style={{ flexDirection: 'column' }}>
                                        <DayNumber>{date.city.name}</DayNumber>
                                        <Date>{moment(date.date).format('DD/MMM')}</Date>
                                    </View>
                                    <Divider />
                                </ServiceHeader>
                                {date.services
                                    .filter(service => service.obj.type !== globalServices.PROGRAMMING)
                                    .map(service => services[service.obj.type]({ ...service.obj, clients, type: service.obj.type }))}
                            </View>
                        ))}
                    </Container>
                </Page>
            </Document>
        </PDF>
    )
}
/* eslint-enable complexity */

TravelScriptList.defaultProps = {
    travelScript: null
}

TravelScriptList.propTypes = {
    match: PropTypes.object.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    travelScript: PropTypes.objectOf(TravelScriptModel)
}

export default withRouter(TravelScriptList)

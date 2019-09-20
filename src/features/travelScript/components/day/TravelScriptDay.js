import { formats } from '@constants/dateFormats'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { navigateTo } from '@utils/browser'

import CitySelect from '../select/CitySelect'
import ServiceSelect from '../select/ServiceSelect'
import TravelScriptService from '../service/TravelScriptService'

const StyledTravelScriptDay = styled.div`
    margin: 0 2.062rem 3.75rem;
`

const StyledSelects = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledDate = styled.div`
    font-size: 0.85rem;
    font-weight: 300;
    margin-left: 2.56rem;
`

const StyledText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    margin-top: 3.75rem;
    text-align: center;
`

const TravelScriptDay = ({
    cities,
    date,
    dateId,
    dayNumber,
    delService,
    id: travelId,
    scriptId,
    onCityChange,
    selectedCity,
    services
}) => {
    const serviceTip = services.find(service => service.isTip())
    const onServiceSelect = option => {
        const { value } = option
        const serviceRoute = value.replace(':id', travelId)
        navigateTo(
            `${serviceRoute}?scriptId=${scriptId}&scriptDate=${date.toISOString()}&dateId=${dateId}${
                selectedCity ? `&city=${selectedCity.name}&cityId=${selectedCity.id}` : ''
            }${serviceTip ? `&tipId=${serviceTip.id}` : ''}`
        )
    }

    const renderServices = () => {
        const dayServices = []
        if (services && services.length) {
            services.map((service, index) =>
                dayServices.push(
                    <TravelScriptService
                        dateId={dateId}
                        delService={delService}
                        key={index}
                        scriptDate={date.toISOString()}
                        scriptId={scriptId}
                        service={service}
                        travelId={travelId}
                    />
                )
            )
        } else {
            dayServices.push(<StyledText key="no-service">{i18n.t('messages.noServices')}</StyledText>)
        }

        return dayServices
    }

    return (
        <>
            <StyledTravelScriptDay>
                <StyledSelects>
                    <CitySelect
                        cities={cities}
                        dayNumber={dayNumber}
                        onSelect={option => onCityChange(option)}
                        selectedCity={selectedCity}
                    />
                    <ServiceSelect onSelect={onServiceSelect} />
                </StyledSelects>
                <StyledDate>{date.format(formats.shortest)}</StyledDate>
                {renderServices()}
            </StyledTravelScriptDay>
        </>
    )
}

TravelScriptDay.defaultProps = {
    selectedCity: null,
    services: []
}

TravelScriptDay.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object).isRequired,
    date: PropTypes.object.isRequired,
    dateId: PropTypes.string.isRequired,
    dayNumber: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onCityChange: PropTypes.func.isRequired,
    scriptId: PropTypes.string.isRequired,
    selectedCity: PropTypes.object,
    services: PropTypes.array
}

export default TravelScriptDay

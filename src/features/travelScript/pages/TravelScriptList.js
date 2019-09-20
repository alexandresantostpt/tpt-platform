import { events } from '@constants/events'

import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

import { i18n } from '@i18n'

import Button from '@components/button/Button'
import If from '@components/if/If'

import { not } from '@utils/functions'

import { Route, Router, Switch } from 'react-router'
import { withRouter } from 'react-router-dom'

import App from '@containers/App'
import Container from '@containers/Container'
import Summary from '@containers/Summary'

import { history } from '@cfg/history'
import { travelServiceRoutes } from '@cfg/routes'

import TravelScriptDay from '../components/day/TravelScriptDay'
import AddCollaborators from '../components/addCollaborators/AddCollaborators'

import TravelScriptModel from '../models/TravelScriptModel'
import UserModel from '@/features/login/UserModel'

const TravelScriptHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 52px 59px;
`
const TravelMaterialButton = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 52px 59px;
`

const TravelScriptList = ({
    match,
    requestCloseMaterialAction,
    requestDelServiceAction,
    requestGetSingleAction,
    requestUnshareAction,
    requestUpdateCityAction,
    requestUpdateMaterialAction,
    requestShareTravelAction,
    travelScript,
    users
}) => {
    const {
        params: { id }
    } = match

    useEffect(() => {
        requestGetSingleAction({ id })
    }, [])

    useEffect(() => {
        PubSub.subscribe(events.SERVICE_DELETED, () => requestGetSingleAction({ id }))
        return () => PubSub.unsubscribe(events.SERVICE_DELETED)
    }, [])

    const addCollaborator = email => requestShareTravelAction({ email, id })

    const closeMaterial = () => {
        if (id) {
            requestCloseMaterialAction(id)
        }
    }

    const removeCollaborator = collaborator => requestUnshareAction({ travelId: id, userId: collaborator.id })

    const updateMaterial = () => {
        if (id) {
            requestUpdateMaterialAction(id)
        }
    }

    return (
        <App travelScript={travelScript}>
            <Container>
                {travelScript !== null && (
                    <>
                        <TravelScriptHeader>
                            <div>{travelScript.travel.title}</div>
                            <AddCollaborators
                                addCollaborator={addCollaborator}
                                collaborators={users}
                                removeCollaborator={removeCollaborator}
                            />
                        </TravelScriptHeader>
                        <TravelMaterialButton>
                            <If condition={travelScript !== null && not(travelScript.travel.closed) && travelScript.hasServices()}>
                                <Button
                                    color={colors.purple}
                                    disabled={false}
                                    fill={true}
                                    onClick={closeMaterial}
                                    text={i18n.t('buttons.closeMaterial')}
                                />
                            </If>
                        </TravelMaterialButton>
                        <TravelMaterialButton>
                            <If condition={travelScript.travel.closed && travelScript.edited}>
                                <Button
                                    color={colors.purple}
                                    disabled={false}
                                    fill={true}
                                    onClick={updateMaterial}
                                    text={i18n.t('buttons.updateMaterial')}
                                />
                            </If>
                        </TravelMaterialButton>
                        {travelScript.dates.map((item, index) => (
                            <TravelScriptDay
                                cities={travelScript.travel.citiesDestiny}
                                date={item.date}
                                dateId={item._id}
                                dayNumber={++index}
                                delService={requestDelServiceAction}
                                id={id}
                                key={index}
                                onCityChange={option =>
                                    requestUpdateCityAction({
                                        city: option.obj,
                                        dateId: item._id,
                                        scriptId: travelScript.id
                                    })
                                }
                                scriptId={travelScript.id}
                                selectedCity={item.city}
                                services={item.services}
                            />
                        ))}
                    </>
                )}
            </Container>
            <Summary>
                <Router history={history}>
                    <Switch>
                        {travelServiceRoutes.map((route, index) => (
                            <Route {...route} exact key={route.name || index} />
                        ))}
                    </Switch>
                </Router>
            </Summary>
        </App>
    )
}

TravelScriptList.defaultProps = {
    travelScript: null,
    users: []
}

TravelScriptList.propTypes = {
    match: PropTypes.object.isRequired,
    requestCloseMaterialAction: PropTypes.func.isRequired,
    requestDelServiceAction: PropTypes.func.isRequired,
    requestGetSingleAction: PropTypes.func.isRequired,
    requestShareTravelAction: PropTypes.func.isRequired,
    requestUnshareAction: PropTypes.func.isRequired,
    requestUpdateCityAction: PropTypes.func.isRequired,
    requestUpdateMaterialAction: PropTypes.func.isRequired,
    travelScript: PropTypes.objectOf(TravelScriptModel),
    users: PropTypes.arrayOf(UserModel)
}

export default withRouter(TravelScriptList)

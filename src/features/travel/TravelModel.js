import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { config } from '@config'
import { formats } from '@constants/dateFormats'
import { travelStatusColors } from './constants'

import moment from 'moment'

import UserModel from '../login/UserModel'
import { isNotEmpty } from '@/utils/functions'

const StyledStatusIcon = styled.span`
    background-color: ${({ color }) => color};
    border-radius: 100%;
    display: inline-block;
    height: 0.5rem;
    margin-right: 0.2rem;
    width: 0.5rem;
`
class TravelModel {
    constructor({
        __v,
        _id,
        agency,
        archived,
        citiesDestiny,
        clients,
        closed,
        createdAt,
        image,
        services,
        status,
        title,
        travelDates,
        travelEndDate,
        travelStartDate,
        updatedAt,
        users
    }) {
        this.__v = __v
        this._id = _id
        this._agency = agency
        this._archived = archived
        this._citiesDestiny = citiesDestiny
        this._clients = clients
        this._closed = closed
        this._createdAt = moment(createdAt).utc(false)
        this._image = image
        this._services = services
        this._status = status
        this._title = title
        this._updatedAt = moment(updatedAt).utc(false)
        this._users = users && users.map(user => (user instanceof Object ? new UserModel(user) : user))

        if (isNotEmpty(travelDates)) {
            this._travelEndDate = moment(travelDates.endDate).utc(false)
            this._travelStartDate = moment(travelDates.startDate).utc(false)
        } else {
            this._travelEndDate = moment(travelEndDate).utc(false)
            this._travelStartDate = moment(travelStartDate).utc(false)
        }
    }

    get v() {
        return this.__v
    }

    get id() {
        return this._id
    }

    get agency() {
        return this._agency
    }

    get archived() {
        return this._archived
    }

    get citiesDestiny() {
        return this._citiesDestiny
    }

    get citiesDestinyToString() {
        const citiesDestinyName = this.citiesDestiny.map(city => city.name)
        return citiesDestinyName.join(', ')
    }

    get clients() {
        return [...this._clients.map(client => ({ ...client, agency: this.agency }))]
    }

    get clientsToString() {
        const clientsNames = this.clients.map(client => client.name)
        return clientsNames.join(', ')
    }

    get closed() {
        return this._closed
    }

    get createdAt() {
        return this._createdAt
    }

    get image() {
        return this._image
    }

    get services() {
        return this._services
    }

    get status() {
        return this._status ? i18n.t(`travelStatus.${this._status}`) : null
    }

    get statusRaw() {
        return this._status
    }

    get statusToTable() {
        return (
            <div>
                <StyledStatusIcon color={travelStatusColors[this._status]} />
                {i18n.t(`travelStatus.${this._status}`)}
            </div>
        )
    }

    get title() {
        return this._title
    }

    get travelEndDate() {
        return this._travelEndDate
    }

    get travelStartDate() {
        return this._travelStartDate
    }

    get travelStartDateToString() {
        return this._travelStartDate.format(formats.brasilian)
    }

    get updatedAt() {
        return this._updatedAt
    }

    get users() {
        return this._users
    }

    filterUsers(userId) {
        this._users = this.users.filter(user => user.id !== userId)
    }

    getClient() {
        return this.clients[0]
    }

    getDate() {
        return `${i18n.t('labels.from')} ${this.travelStartDate.format(formats.shortestExtense)} ${i18n.t(
            'labels.to'
        )} ${this.travelEndDate.format(formats.shortestExtense)}`
    }

    getImage() {
        return this.image && `${config.api.url}/travel/download/${this.image}`
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency || null,
            citiesDestiny: this.citiesDestiny || null,
            clients: this.clients || null,
            closed: this.closed,
            image: this.image || null,
            title: this.title || null,
            travelEndDate: this.travelEndDate || null,
            travelStartDate: this.travelStartDate || null,
            users: this.users || null
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency,
            citiesDestiny: this.citiesDestiny,
            clients: this.clients,
            closed: this.closed,
            image: this.image,
            peopleCount: this.clients.length,
            title: this.title,
            travelDates: { endDate: this.travelEndDate, startDate: this.travelStartDate },
            users: this.users
        }
    }
}

export default TravelModel

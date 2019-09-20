import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { formats } from '@constants/dateFormats'

import { statusColors } from './constants'

const StyledStatusIcon = styled.span`
    background-color: ${({ color }) => color};
    border-radius: 100%;
    display: inline-block;
    height: 0.5rem;
    margin-right: 0.2rem;
    width: 0.5rem;
`

class ConsultantModel {
    constructor({ __v, _id, agency, agencyName, blocked, cellPhone, cpf, createdAt, email, lastAccess, name, phone, updatedAt }) {
        this.__v = __v
        this._id = _id
        this._agency = agency
        this._agencyName = agencyName
        this._blocked = blocked
        this._cellPhone = cellPhone
        this._cpf = cpf
        this._createdAt = moment(createdAt).utc(false)
        this._email = email
        this._lastAccess = moment(lastAccess).utc(false)
        this._name = name
        this._phone = phone
        this._updatedAt = moment(updatedAt).utc(false)
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

    get blocked() {
        return this._blocked
    }

    get cellPhone() {
        return this._cellPhone
    }

    get cpf() {
        return this._cpf
    }

    get createdAt() {
        return this._createdAt
    }

    get email() {
        return this._email
    }

    get consultantName() {
        return this._name
    }

    get lastAccess() {
        return this._lastAccess.format(formats.brasilian)
    }

    get name() {
        return this._name
    }

    get phone() {
        return this._phone
    }

    get updatedAt() {
        return this._updatedAt
    }

    get statusToTable() {
        return (
            <div>
                <StyledStatusIcon color={this.blocked ? statusColors.BLOCKED : statusColors.RELEASED} />
                {i18n.t(`userStatus.${this.blocked ? 'BLOCKED' : 'RELEASED'}`)}
            </div>
        )
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency || null,
            blocked: this.blocked.toString() === 'true',
            cellPhone: this.cellPhone || null,
            cpf: this.cpf || null,
            email: this.email || null,
            name: this.name || null,
            phone: this.phone || null,
            role: 'CONSULTANT'
        }
    }

    toForm() {
        return {
            __v: this.v,
            _id: this.id,
            agency: this.agency,
            blocked: this.blocked,
            cellPhone: this.cellPhone,
            cpf: this.cpf,
            email: this.email,
            name: this.name,
            phone: this.phone
        }
    }
}

export default ConsultantModel

import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { formats } from '@constants/dateFormats'

import { statusColors } from './constants'
import { isNotNull } from '@/utils/functions'

const StyledStatusIcon = styled.span`
    background-color: ${({ color }) => color};
    border-radius: 100%;
    display: inline-block;
    height: 0.5rem;
    margin-right: 0.2rem;
    width: 0.5rem;
`

class AgencyModel {
    constructor({
        __v,
        _id,
        active,
        agency,
        appTheme,
        blocked,
        businessName,
        cnpj,
        cpfAdm,
        createdAt,
        emailAdm,
        lastAccess,
        name,
        nameAdm,
        masterAgency,
        socialName,
        updatedAt,
        user
    }) {
        this.__v = __v
        this._id = _id
        this._active = active
        this._agency = agency
        this._appTheme = appTheme
        this._blocked = blocked
        this._businessName = businessName
        this._cnpj = cnpj
        this._cpfAdm = cpfAdm
        this._createdAt = moment(createdAt).utc(false)
        this._emailAdm = emailAdm
        this._lastAccess = lastAccess
        this._masterAgency = masterAgency
        this._name = name
        this._nameAdm = nameAdm
        this._socialName = socialName
        this._updatedAt = moment(updatedAt).utc(false)
        this._user = user
    }

    get userV() {
        const v = this.__v || (this.user && this.user.__v)
        return isNotNull(v) ? v : undefined
    }

    get userId() {
        return this._id || (this.user && this.user._id)
    }

    get agencyV() {
        const v = this.agency && this.agency.__v
        return isNotNull(v) ? v : undefined
    }

    get agencyId() {
        return this.agency && this.agency._id
    }

    get agency() {
        return this._agency
    }

    get appTheme() {
        return this._appTheme
    }

    get blocked() {
        return this._blocked || (this.user && this.user.blocked)
    }

    get businessName() {
        return this._businessName
    }

    get cnpj() {
        return this._cnpj
    }

    get cpfAdm() {
        return this._cpfAdm
    }

    get emailAdm() {
        return this._emailAdm
    }

    get lastAccess() {
        return this._lastAccess
    }

    get lastAccessToTable() {
        return moment(this._lastAccess).format(formats.brasilian)
    }

    get masterAgency() {
        return this._masterAgency
    }

    get name() {
        return this._name
    }

    get nameToTable() {
        return this._name || this._user.name
    }

    get nameAdm() {
        return this._nameAdm
    }

    get socialName() {
        return this._socialName || (this.agency && this.agency.socialName)
    }

    get socialNameToTable() {
        if (this.agency) {
            return this.agency.socialName
        }
        return null
    }

    get statusToTable() {
        return (
            <div>
                <StyledStatusIcon color={this.blocked ? statusColors.BLOCKED : statusColors.RELEASED} />
                {i18n.t(`userStatus.${this.blocked ? 'BLOCKED' : 'RELEASED'}`)}
            </div>
        )
    }

    get user() {
        return this._user
    }

    /* eslint-disable complexity */
    toDTO() {
        return {
            agency: {
                __v: this.agencyV,
                _id: this.agencyId || undefined,
                appTheme: this.appTheme || null,
                businessName: this.businessName || null,
                cnpj: this.cnpj || null,
                logoTipo: this.logoTipo || null,
                phoneContact: this.phoneContact || null,
                phoneEmergency: this.phoneEmergency || null,
                socialName: this.socialName || null
            },
            user: {
                __v: this.userV,
                _id: this.userId || undefined,
                blocked: this.blocked.toString() === 'true',
                cpf: this.cpfAdm || null,
                email: this.emailAdm || null,
                name: this.nameAdm || null,
                role: 'ADMIN'
            }
        }
    }

    toForm() {
        return {
            __v: this.__v,
            _id: this.id,
            appTheme: this.appTheme,
            blocked: this.blocked.toString(),
            businessName: this.businessName,
            cnpj: this.agency.cnpj,
            cpfAdm: this.user.cpf,
            emailAdm: this.user.email,
            logoTipo: this.logoTipo,
            nameAdm: this.user.name,
            phoneContact: this.phoneContact,
            phoneEmergency: this.phoneEmergency,
            socialName: this.socialName
        }
    }
}

export default AgencyModel

import { services } from '@constants/services'

import React from 'react'

import TipCount from '../components/TipCount'

class TravelServiceModel {
    constructor(service) {
        this._obj = service
    }

    get obj() {
        return this._obj
    }

    get id() {
        return this.obj._id
    }

    get lowerCaseType() {
        return this.obj.type.replace('_', '-').toLowerCase()
    }

    get name() {
        switch (this.obj.type) {
            case services.AERIAL:
                return this.obj.journeys[0].companyName
            case services.CAR_RENTAL:
                return this.obj.retire.name
            case services.PROGRAMMING:
            case services.TIP:
                if (this.obj.libraries && this.obj.libraries.length) {
                    return (
                        <>
                            {this.obj.libraries[0].name}
                            {this.obj.libraries.length > 1 && <TipCount>{this.obj.libraries.length - 1}</TipCount>}
                        </>
                    )
                }
                return null
            default:
                return this.obj.library.name
        }
    }

    get type() {
        return this.obj.type
    }

    isTip() {
        return this.type === services.TIP
    }
}

export default TravelServiceModel

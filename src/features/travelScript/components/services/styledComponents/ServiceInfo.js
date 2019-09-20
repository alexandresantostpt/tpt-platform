import React from 'react'

import { i18n } from '@i18n'
import { View } from '@react-pdf/renderer'

import If from '@components/if/If'

import { isObject } from '@utils/functions'

import Description from './Description'
import Label from './Label'
import Col from './Col'

const ServiceInfo = ({ obj }) =>
    Object.keys(obj).map((item, index) => (
        <Col key={index}>
            <Label>{i18n.t(`labels.${item}`)}:</Label>
            <If condition={isObject(obj[item])} el={<Description>{obj[item]}</Description>}>
                <View style={{ marginLeft: 10 }}>
                    {obj[item] &&
                        Object.keys(obj[item]).map(
                            desc => obj[item][desc] && <Description key={desc}>{i18n.t(`labels.${desc}`)}</Description>
                        )}
                </View>
            </If>
        </Col>
    ))

export default ServiceInfo

import { connect } from 'react-redux'

import { requestGetSingleAction, requestSaveDataAction } from '../actions'

import { getObjSelector } from '../selectors'

import AgencyRegistration from '../pages/AgencyRegistration'

const mapStateToProps = state => ({
    agency: getObjSelector(state)
})

const mapDispatchToProps = { requestGetSingleAction, requestSaveDataAction }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AgencyRegistration)

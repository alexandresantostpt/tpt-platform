import { connect } from 'react-redux'

import { requestGetSingleAction } from '../actions'

import { getObjSelector } from '../selectors'

import TravelScriptPDF from '../pages/TravelScriptPDF'

const mapStateToProps = state => ({
    travelScript: getObjSelector(state)
})

const mapDispatchToProps = {
    requestGetSingleAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelScriptPDF)

import { connect } from 'react-redux'

import * as actionsTask from '../actions'

import { getListSelector } from '../selectors'

import Tasks from '../pages/Tasks'

const mapStateToProps = state => ({
    tasks: getListSelector(state)
})

const mapDispatchToProps = {
    ...actionsTask
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks)

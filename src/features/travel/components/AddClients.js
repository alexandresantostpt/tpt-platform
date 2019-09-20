import PropTypes from 'prop-types'
import React from 'react'

import IncreaseDecrease from './increaseDecrease/IncreaseDecrease'
import FormAddClients from './formAddClients/FormAddClients'
import { i18n } from '@i18n'

const AddClient = ({ disabled, fields, form, getSuggestions, nofClients, resetSuggestions, suggestions, updateNofClients }) => (
    <>
        <IncreaseDecrease changeValue={updateNofClients} placeholder={i18n.t('labels.peopleCount')} value={nofClients} />
        <FormAddClients
            disabled={disabled}
            fields={fields}
            form={form}
            getSuggestions={getSuggestions}
            resetSuggestions={resetSuggestions}
            suggestions={suggestions}
        />
    </>
)

AddClient.defaultProps = {
    disabled: false,
    fields: []
}

AddClient.propTypes = {
    disabled: PropTypes.bool,
    fields: PropTypes.array,
    form: PropTypes.object.isRequired,
    nofClients: PropTypes.number.isRequired,
    updateNofClients: PropTypes.func.isRequired
}

export default AddClient

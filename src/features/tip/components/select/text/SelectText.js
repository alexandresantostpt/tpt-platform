import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectText = styled.span`
    align-items: center;
    color: ${({ theme }) => theme.text};
    display: flex;
    font-size: 1rem;
    font-weight: 300;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

SelectText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export { SelectText }
export default SelectText

import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledTaskEdit = styled.textarea`
    background: none;
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.text};
    font-weight: 300;
    height: 1.2rem;
    margin-bottom: 4px;
    min-height: 1.2rem;
    padding: 0;
    resize: none;
    text-decoration: ${({ done }) => (done ? 'line-through' : null)};
    width: 100%;
`

const handleHeight = elem => {
    if (elem.scrollHeight < 91) {
        elem.style.height = `${elem.scrollHeight}px`
    } else {
        elem.style.height = '90px'
    }
}

const TaskEdit = ({ done, onChange, stopEditing, newTask, value }) => {
    const elmRef = useRef()

    useEffect(() => {
        if (elmRef.current) {
            handleHeight(elmRef.current)
            newTask && elmRef.current.focus()
        }
    }, [])

    return (
        <StyledTaskEdit
            autoComplete="off"
            done={done}
            onBlur={stopEditing}
            onChange={onChange}
            onKeyDown={e => handleHeight(e.target)}
            ref={process.env.__TEST__ ? null : elmRef}
            value={value}
        />
    )
}

TaskEdit.defaultProps = {
    done: false,
    newTask: false,
    value: ''
}

TaskEdit.propTypes = {
    done: PropTypes.bool,
    newTask: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    stopEditing: PropTypes.func.isRequired,
    value: PropTypes.string
}
export default TaskEdit

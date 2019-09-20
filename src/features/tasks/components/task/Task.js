import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import If from '@components/if/If'

import { not } from '@utils/functions'

import TaskActions from './actions/TaskActions'
import TaskBody from './body/TaskBody'
import TaskCheck from './check/TaskCheck'
import TaskEdit from './edit/TaskEdit'

const StyledTask = styled.div`
    align-items: center;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    margin-bottom: 1rem;
    max-height: 110px;
    padding: 0.8rem;
`

const Task = ({ describe, newTask, removeTask, stopEditing, switchTaskStatus, task }) => {
    const [taskText, updateTaskText] = useState(describe)
    const onChange = ({ target }) => updateTaskText(target.value)
    return (
        <StyledTask>
            <If condition={not(newTask)}>
                <TaskCheck done={task.done} switchTaskStatus={() => switchTaskStatus(task)} />
            </If>
            <TaskBody>
                <TaskEdit
                    done={task && task.done}
                    newTask={newTask}
                    onChange={onChange}
                    stopEditing={() => stopEditing(taskText, task)}
                    value={taskText}
                />
            </TaskBody>
            <If condition={not(newTask)}>
                <TaskActions removeTask={() => removeTask(task._id)} />
            </If>
        </StyledTask>
    )
}
Task.defaultProps = {
    newTask: false,
    removeTask: null,
    switchTaskStatus: null,
    task: {}
}

Task.propTypes = {
    describe: PropTypes.string.isRequired,
    newTask: PropTypes.bool,
    removeTask: PropTypes.func,
    stopEditing: PropTypes.func.isRequired,
    switchTaskStatus: PropTypes.func,
    task: PropTypes.object
}

export default Task

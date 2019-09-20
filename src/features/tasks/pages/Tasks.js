import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import CollapseDivider from '@components/collapse/CollapseDivider'
import If from '@components/if/If'
import Title from '@components/title/Title'

import { getUser } from '@utils/auth'
import { isEmpty, not } from '@utils/functions'

import AddButton from '../components/AddButton'
import Task from '../components/task/Task'

const StyledTasks = styled.div`
    overflow-y: auto;
`

const Tasks = props => {
    const { tasks } = props
    const [newTask, updateNewTask] = useState(false)
    const user = getUser()

    useEffect(() => {
        const { requestGetAllAction } = props
        requestGetAllAction()
    }, [])

    const handleAddTask = () => updateNewTask(true)

    const del = id => {
        const { requestDelAction } = props
        requestDelAction({ id: id })
    }

    const stopEditing = (describe, task) => {
        const { requestSaveDataAction } = props
        not(isEmpty(describe)) && requestSaveDataAction({ ...task, describe: describe, user: task.user || user.id })
        newTask && updateNewTask(false)
    }

    const switchTaskStatus = task => {
        const { requestSaveDataAction } = props
        requestSaveDataAction({ ...task, done: not(task.done) })
    }

    const tasksToDo = tasks.filter(item => not(item.done))
    const tasksDone = tasks.filter(item => item.done)

    return (
        <StyledTasks>
            <Title>{i18n.t('titles.tasks')}</Title>
            <AddButton handleAddTask={handleAddTask} />
            <If condition={newTask}>
                <Task describe="" newTask stopEditing={stopEditing} />
            </If>
            {tasksToDo.map(task => (
                <Task
                    describe={task.describe}
                    key={task._id}
                    removeTask={del}
                    stopEditing={stopEditing}
                    switchTaskStatus={switchTaskStatus}
                    task={task}
                />
            ))}
            <If condition={!!tasksDone.length}>
                <CollapseDivider initialState={false} title={`Concluídas (${tasksDone.length})`}>
                    {tasksDone.map(task => (
                        <Task
                            describe={task.describe}
                            key={task._id}
                            removeTask={del}
                            stopEditing={stopEditing}
                            switchTaskStatus={switchTaskStatus}
                            task={task}
                        />
                    ))}
                </CollapseDivider>
            </If>
        </StyledTasks>
    )
}

Tasks.defaultProps = {
    tasks: []
}

Tasks.propTypes = {
    requestDelAction: PropTypes.func.isRequired,
    requestSaveDataAction: PropTypes.func.isRequired,
    tasks: PropTypes.array
}

export default Tasks

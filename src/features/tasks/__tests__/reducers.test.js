import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as tasksActions from '../actions'
import { logoutAction } from '@features/login/actions'

describe('Tests for Tasks reducers', () => {
    let task = null
    let tasks = []
    let store = {}

    beforeEach(() => {
        task = {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }

        tasks = List.of(task)

        store = Record({
            _listFilter: tasks,
            list: tasks
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            list: []
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a task object when delAction have been called', () => {
        const reducerStore = reducers(store, tasksActions.delAction('5c9e31f8c57b4917b426e334')).toJS()
        const expectedStore = {
            _listFilter: [],
            list: []
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should fill list and _listFilter when getAllAction have been called', () => {
        const reducerStore = reducers(store, tasksActions.getAllAction(tasks)).toJS()
        const expectedStore = {
            _listFilter: tasks.toJS(),
            list: tasks.toJS()
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new travel task when saveDataAction have been called', () => {
        const newtask = {
            __v: 0,
            _id: '5c9e31f8c57b4917b426e344',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 1234',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }

        const newList = List.of(task, newtask)
        const reducerStore = reducers(store, tasksActions.saveDataAction(newtask)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS()
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should update a exists travel task when saveDataAction have been called', () => {
        const newtask = {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }

        const newList = List.of(newtask)
        const reducerStore = reducers(store, tasksActions.saveDataAction(newtask)).toJS()
        const expectedStore = {
            _listFilter: newList.toJS(),
            list: newList.toJS()
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            list: []
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})

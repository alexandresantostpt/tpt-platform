import { List, Record } from 'immutable'

import { reducers } from '../reducers'

import * as tipActions from '../actions'
import { logoutAction } from '@features/login/actions'

import TipServiceModel from '../models/TipServiceModel'

describe('Tests for Tip reducers', () => {
    const categories = []
    let item = null
    let items = []
    let store = {}

    beforeEach(() => {
        item = new TipServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            address: 'Test',
            category: 'Category',
            describe: 'Describe',
            observations: 'Test',
            phone: '01934568945',
            script: '5c52ebcd5fc7c9b1433ab704',
            scriptDate: '2019-03-12T20:00:00.458Z',
            site: 'site',
            subCategory: 'subCategory',
            title: 'Title',
            type: 'Type',
            workDays: 'From monday to thursday',
            workEnd: '2019-03-12T20:00:00.458Z',
            workStart: '2019-03-12T08:00:00.458Z'
        })
        items = List.of(item)
        store = Record({
            _listFilter: items,
            categories: categories,
            list: items,
            obj: null
        })()
    })

    it('Should return a default store', () => {
        const unknownAction = () => "I'm a unknown action"
        const reducerStore = reducers(undefined, unknownAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            categories: [],
            list: [],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should delete a tip object when delAction have been called', () => {
        const reducerStore = reducers(store, tipActions.delAction()).toJS()
        const expectedStore = {
            _listFilter: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            categories: [],
            list: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should get a tip object when getSingleAction have been called', () => {
        const reducerStore = reducers(store, tipActions.getSingleAction(item)).toJS()
        const expectedStore = {
            _listFilter: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            categories: [],
            list: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            obj: new TipServiceModel({
                __v: 0,
                _id: '5c52ebcd5fc7c9b1433ab704',
                address: 'Test',
                category: 'Category',
                describe: 'Describe',
                observations: 'Test',
                phone: '01934568945',
                script: '5c52ebcd5fc7c9b1433ab704',
                scriptDate: '2019-03-12T20:00:00.458Z',
                site: 'site',
                subCategory: 'subCategory',
                title: 'Title',
                type: 'Type',
                workDays: 'From monday to thursday',
                workEnd: '2019-03-12T20:00:00.458Z',
                workStart: '2019-03-12T08:00:00.458Z'
            })
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should add a new tip item when saveDataAction have been called', () => {
        const reducerStore = reducers(store, tipActions.saveDataAction()).toJS()
        const expectedStore = {
            _listFilter: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            categories: [],
            list: [
                new TipServiceModel({
                    __v: 0,
                    _id: '5c52ebcd5fc7c9b1433ab704',
                    address: 'Test',
                    category: 'Category',
                    describe: 'Describe',
                    observations: 'Test',
                    phone: '01934568945',
                    script: '5c52ebcd5fc7c9b1433ab704',
                    scriptDate: '2019-03-12T20:00:00.458Z',
                    site: 'site',
                    subCategory: 'subCategory',
                    title: 'Title',
                    type: 'Type',
                    workDays: 'From monday to thursday',
                    workEnd: '2019-03-12T20:00:00.458Z',
                    workStart: '2019-03-12T08:00:00.458Z'
                })
            ],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })

    it('Should return a initial store when logoutAction have been called', () => {
        const reducerStore = reducers(store, logoutAction()).toJS()
        const expectedStore = {
            _listFilter: [],
            categories: [],
            list: [],
            obj: null
        }

        expect(reducerStore).toEqual(expectedStore)
    })
})

import moxios from 'moxios'

import { http } from '@http'

import * as tipApi from '../api'

import TipServiceModel from '../models/TipServiceModel'

describe('Tests for Tour API', () => {
    const tipModel = new TipServiceModel({
        __v: 0,
        _id: '5c52ebcd5fc7c9b1433ab704',
        address: 'Test',
        category: 'Category',
        createdAt: '2019-02-21T00:00:00.000Z',
        describe: 'Describe',
        observations: 'Test',
        phone: '01934568945',
        script: '5c52ebcd5fc7c9b1433ab704',
        scriptDate: '2019-03-12T20:00:00.458Z',
        site: 'site',
        subCategory: 'subCategory',
        updatedAt: '2019-02-21T00:00:00.000Z',
        workDays: 'From monday to thursday',
        workEnd: '2019-03-12T20:00:00.458Z',
        workStart: '2019-03-12T08:00:00.458Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = tipModel
        const expectedResponse = new TipServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            address: 'Test',
            category: 'Category',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'Describe',
            observations: 'Test',
            phone: '01934568945',
            script: '5c52ebcd5fc7c9b1433ab704',
            scriptDate: '2019-03-12T20:00:00.458Z',
            site: 'site',
            subCategory: 'subCategory',
            updatedAt: '2019-02-21T00:00:00.000Z',
            workDays: 'From monday to thursday',
            workEnd: '2019-03-12T20:00:00.458Z',
            workStart: '2019-03-12T08:00:00.458Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data } = await tipApi.delAPI({ service: '5c52ebcd5fc7c9b1433ab704' })
        expect(data).toEqual(expectedResponse)
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = tipModel
        const expectedResponse = new TipServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            address: 'Test',
            category: 'Category',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'Describe',
            observations: 'Test',
            phone: '01934568945',
            script: '5c52ebcd5fc7c9b1433ab704',
            scriptDate: '2019-03-12T20:00:00.458Z',
            site: 'site',
            subCategory: 'subCategory',
            updatedAt: '2019-02-21T00:00:00.000Z',
            workDays: 'From monday to thursday',
            workEnd: '2019-03-12T20:00:00.458Z',
            workStart: '2019-03-12T08:00:00.458Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tipApi.getSingleAPI('5c52ebcd5fc7c9b1433ab704')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = tipModel
        const expectedResponse = new TipServiceModel({
            __v: 0,
            _id: '5c52ebcd5fc7c9b1433ab704',
            address: 'Test',
            category: 'Category',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'Describe',
            observations: 'Test',
            phone: '01934568945',
            script: '5c52ebcd5fc7c9b1433ab704',
            scriptDate: '2019-03-12T20:00:00.458Z',
            site: 'site',
            subCategory: 'subCategory',
            updatedAt: '2019-02-21T00:00:00.000Z',
            workDays: 'From monday to thursday',
            workEnd: '2019-03-12T20:00:00.458Z',
            workStart: '2019-03-12T08:00:00.458Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tipApi.saveAPI(tipModel)
        expect(response).toEqual(expectedResponse)
    })
})

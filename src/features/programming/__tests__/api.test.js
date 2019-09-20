import moxios from 'moxios'

import { http } from '@http'

import * as programmingApi from '../api'

import ProgrammingServiceModel from '../models/ProgrammingServiceModel'

describe('Tests for Programming API', () => {
    const programming = new ProgrammingServiceModel({
        __v: 0,
        _id: '5c6c16bc793e3b4f622f7a9e',
        createdAt: '2019-02-21T00:00:00.000Z',
        describe: 'teste',
        script: '123',
        scriptDate: '2019-03-01T00:00:00.000Z',
        updatedAt: '2019-02-21T00:00:00.000Z'
    })

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = programming
        const expectedResponse = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data, request } = await programmingApi.delAPI({ idService: '5c6c16bc793e3b4f622f7a9e' })
        expect(data).toEqual(expectedResponse)
        expect(request.url).toContain('/travel/script/service')
    })

    it('Should call get when getSingleAPI has been called', async () => {
        const responseMocked = programming
        const expectedResponse = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await programmingApi.getSingleAPI('5c6c16bc793e3b4f622f7a9e')
        expect(response).toEqual(expectedResponse)
    })

    it.skip('Should call post when saveAPI has been called', async () => {
        const responseMocked = programming
        const expectedResponse = new ProgrammingServiceModel({
            __v: 0,
            _id: '5c6c16bc793e3b4f622f7a9e',
            createdAt: '2019-02-21T00:00:00.000Z',
            describe: 'teste',
            script: '123',
            scriptDate: '2019-03-01T00:00:00.000Z',
            updatedAt: '2019-02-21T00:00:00.000Z'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await programmingApi.saveAPI(programming)
        expect(response).toEqual(expectedResponse)
    })
})

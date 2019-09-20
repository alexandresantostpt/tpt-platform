import moxios from 'moxios'

import { http } from '@http'
import { List } from 'immutable'

import * as tasksApi from '../api'

describe('Tests for Tasks API', () => {
    const task = {
        __v: 28,
        _id: '5c9e31f8c57b4917b426e334',
        createdAt: '2019-03-29T14:55:52.764Z',
        describe: 'teste 123',
        done: false,
        updatedAt: '2019-03-29T14:55:52.764Z',
        user: '5c9dfb65d1cf42bd5fa66b3d'
    }

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call delete when delAPI has been called', async () => {
        const responseMocked = task
        const expectedResponse = {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const { data, request } = await tasksApi.delAPI('5c9e31f8c57b4917b426e334')
        expect(data).toEqual(expectedResponse)
        expect(request.url).toContain('5c9e31f8c57b4917b426e334')
    })

    it('Should call get when getAllAPI has been called', async () => {
        const responseMocked = [task]
        const expectedResponse = List.of({
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        })

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tasksApi.getAllAPI()
        expect(response).toEqual(expectedResponse)
    })

    it('Should call post when saveAPI has been called', async () => {
        const responseMocked = task
        const expectedResponse = {
            __v: 28,
            _id: '5c9e31f8c57b4917b426e334',
            createdAt: '2019-03-29T14:55:52.764Z',
            describe: 'teste 123',
            done: false,
            updatedAt: '2019-03-29T14:55:52.764Z',
            user: '5c9dfb65d1cf42bd5fa66b3d'
        }

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await tasksApi.saveAPI(task)
        expect(response).toEqual(expectedResponse)
    })
})

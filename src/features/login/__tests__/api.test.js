import moxios from 'moxios'

import { http } from '@http'

import * as loginApi from '../api'

describe('Tests for Login API', () => {
    const sendEmail = { email: 'abc123' }

    const login = {
        password: '00000000000',
        user: 'dextra@admin.com'
    }

    const payload = {
        confirmPassword: 'password',
        password: 'password'
    }

    const hash = {
        hash: '12345'
    }

    const updateUser = {
        _id: '123',
        newPassword: 'nova senha',
        oldPassword: 'antiga senha'
    }

    beforeEach(() => {
        moxios.install(http)
    })

    afterEach(() => {
        moxios.uninstall(http)
    })

    it('Should call post when authAPI has been called', async () => {
        const responseMocked = 'abc123'
        const expectedResponse = 'abc123'

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await loginApi.authAPI(login)
        expect(response).toEqual(expectedResponse)
    })

    it('Should call put when updatePasswordAPI has been called', async () => {
        const responseMocked = 'abc123'
        const expectedResponse = 'abc123'

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await loginApi.updatePasswordAPI(updateUser)
        expect(response).toEqual(expectedResponse)
    })

    it('Should call post when remeberPasswordAPI has been called', async () => {
        const responseMocked = 'abc123'
        const expectedResponse = true

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await loginApi.remeberPasswordAPI(sendEmail)
        expect(response).toEqual(expectedResponse)
    })

    it('Should call put when resetPasswordAPI has been called', async () => {
        const responseMocked = 'abc123'
        const expectedResponse = true

        moxios.wait(() => {
            const requestMocked = moxios.requests.mostRecent()
            requestMocked.respondWith({
                response: responseMocked,
                status: 200
            })
        })

        const response = await loginApi.resetPasswordAPI(payload, hash)
        expect(response).toEqual(expectedResponse)
    })
})

import { css } from 'docz-plugin-css'

const path = require('path')

export default {
    debug: true,
    description: 'Platform to administrate Tereza Perez Tours application',
    modifyBundlerConfig: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
            '@cfg': path.resolve(__dirname, 'src', '_config'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@config': path.resolve(__dirname, 'src', '_config', 'config'),
            '@constants': path.resolve(__dirname, 'src', 'constants'),
            '@containers': path.resolve(__dirname, 'src', 'containers'),
            '@contexts': path.resolve(__dirname, 'src', 'contexts'),
            '@css': path.resolve(__dirname, 'src', '_assets', 'css'),
            '@env': path.resolve(__dirname, 'src', '_environments'),
            '@features': path.resolve(__dirname, 'src', 'features'),
            '@fonts': path.resolve(__dirname, 'src', '_assets', 'fonts'),
            '@helpers': path.resolve(__dirname, 'src', 'helpers'),
            '@hoc': path.resolve(__dirname, 'src', 'hoc'),
            '@http': path.resolve(__dirname, 'src', '_config', 'http'),
            '@i18n': path.resolve(__dirname, 'src', '_translate', 'i18n'),
            '@icons': path.resolve(__dirname, 'src', '_assets', 'icons'),
            '@img': path.resolve(__dirname, 'src', '_assets', 'img'),
            '@js': path.resolve(__dirname, 'src', '_assets', 'js'),
            '@mocks': path.resolve(__dirname, 'src', '_config', 'mocks'),
            '@profiles': path.resolve(__dirname, 'src', 'profiles'),
            '@routes': path.resolve(__dirname, 'src', '_config', 'routes'),
            '@utils': path.resolve(__dirname, 'src', 'utils')
        }
        return config
    },
    plugins: [
        css({
            cssmodules: true,
            preprocessor: 'postcss'
        })
    ],
    port: 5000,
    themeConfig: {
        codeSandbox: false,
        styles: {
            h1: {
                fontFamily: "'Source Sans Pro',Helvetica,sans-serif"
            }
        }
    },
    title: 'TPT - Platform'
}

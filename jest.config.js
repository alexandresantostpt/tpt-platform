module.exports = {
    bail: true,
    browser: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js}', '!**/node_modules/**'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/build/', '/coverage/', '/node_modules/', '/public/', '/scripts/'],
    coverageReporters: ['html', 'json'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    errorOnDeprecated: true,
    globals: {
        __TEST__: true
    },
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
        '^(@config)$': '<rootDir>/src/_config/config',
        '^(@env)$': '<rootDir>/src/_environments',
        '^(@http)$': '<rootDir>/src/_config/http',
        '^(@i18n)$': '<rootDir>/src/_translate/i18n',
        '^(@mocks)$': '<rootDir>/src/_config/mocks',
        '^(@routes)$': '<rootDir>/src/_config/routes',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@cfg/(.*)$': '<rootDir>/src/_config/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@containers/(.*)$': '<rootDir>/src/containers/$1',
        '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^@css/(.*)$': '<rootDir>/src/_assets/css/$1',
        '^@env/(.*)$': '<rootDir>/src/_environments/$1',
        '^@features/(.*)$': '<rootDir>/src/features/$1',
        '^@fonts/(.*)$': '<rootDir>/src/_assets/fonts/$1',
        '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
        '^@hoc/(.*)$': '<rootDir>/src/hoc/$1',
        '^@icons/(.*)$': '<rootDir>/src/_assets/icons/$1',
        '^@img/(.*)$': '<rootDir>/src/_assets/img/$1',
        '^@js/(.*)$': '<rootDir>/src/_assets/js/$1',
        '^@profiles/(.*)$': '<rootDir>/src/profiles/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1'
    },
    notify: false,
    resetMocks: true,
    resetModules: true,
    resolver: 'jest-pnp-resolver',
    setupFiles: ['<rootDir>/src/setupFiles.js'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['<rootDir>/src/**/__tests__/**/*.js', '<rootDir>/src/**/?(*.)(test).js'],
    testPathIgnorePatterns: ['/build/', '/coverage/', '/node_modules/', '/public/', '/scripts/'],
    testURL: 'http://localhost',
    transform: {
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    verbose: true
}

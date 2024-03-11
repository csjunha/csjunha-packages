module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testRegex: '(/__specs__/.*|(\\.|/)(spec))\\.(ts|tsx)?$',
    testPathIgnorePatterns: ['stub.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageReporters: ['text', 'lcov'],
    coveragePathIgnorePatterns: ['/node_modules/', '/__specs__/'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
};

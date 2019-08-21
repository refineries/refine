global.__NODE_ENV__ = process.env.NODE_ENV
global.__DEV__ = process.env.NODE_ENV === 'development'
global.__PROD__ = process.env.NODE_ENV === 'production'
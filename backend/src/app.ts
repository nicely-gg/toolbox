import fastifyStatic from '@fastify/static'
import fastify from 'fastify'

import { connect, ToolboxDrawer } from './services/database.js'

export function createApp() {
    const app = fastify()

    if (process.env.NODE_ENV === 'production') {
        console.log('Running in production mode, serving frontend')

        app.register(fastifyStatic, {
            // todo: preferably not leaving it like this
            root: new URL('../../dist', import.meta.url).pathname,
        })
    }

    app.get('/api/drawers', () => ToolboxDrawer.find().exec())

    app.addHook('onReady', async () => {
        try {
            const address = await connect()
            console.log('Connected to database on', address)
        } catch (err) {
            console.error(`Failed to connect to database`, err)
            throw err // re-throw the error, we don't want the app to start
        }
    })

    return app
}

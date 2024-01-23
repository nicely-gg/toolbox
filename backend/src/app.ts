import fastify from 'fastify'

import { connect, ToolboxDrawer } from './services/database.js'

export function createApp() {
    const app = fastify()

    app.get('/drawers', () => ToolboxDrawer.find().exec())

    app.addHook('onReady', async () => {
        await connect().then(address => {
            console.log('Connected to database on', address)
        })
    })

    return app
}

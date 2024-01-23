import { createApp } from './app.js'

createApp().listen(
    {
        host: process.env.HTTP_HOST || '0.0.0.0',
        port: Number(process.env.HTTP_PORT) || 3000,
    },
    (err, addr) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }

        console.log('Listening on', addr)
    },
)

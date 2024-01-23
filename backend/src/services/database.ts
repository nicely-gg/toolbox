import mongoose from 'mongoose'

export async function connect() {
    const addr = process.env.MONGODB_URL || 'mongodb://127.0.0.1/'

    await mongoose.connect(addr, {
        dbName: 'toolbox',
        connectTimeoutMS: 4000,
        serverSelectionTimeoutMS: 4000,
    })

    return addr
}

export const LinkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
})

export const ToolboxDrawer = mongoose.model(
    'Drawer',
    new mongoose.Schema({
        hash: String,
        title: String,
        icon: String,
        description: String,
        links: [LinkSchema],
    }),
)

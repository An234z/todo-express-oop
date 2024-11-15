import { promises as fs } from 'fs'

const fileManager = {
    async writeFile(path, data) {
        try {
            await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8')
        } catch (error) {
            console.error('Failed to write file:', error)
        }
    },
    async readFile(path) {
        try {
            const data = await fs.readFile(path, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            console.error('Failed to read file:', error)
            return []
        }
    }
}

export default fileManager

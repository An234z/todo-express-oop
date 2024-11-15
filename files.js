import fs from 'node:fs/promises'

class Filemanager {
    async writeFile(filename, data) {
        try {
            data = JSON.stringify(data, null, 2)
            await fs.writeFile(filename, data)
        }  catch(error){
            console.log('write error => ', error)
        }

    }
}
export const fileManager = new Filemanager()
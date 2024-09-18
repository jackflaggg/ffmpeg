import { promises } from 'fs';
import { dirname, isAbsolute, join } from 'path';

export class FileService {
    // проверка на существование файла
    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true;
        } catch {
            return false;
        }
    }

    // формирует полный путь к файлу
    public getFilePath(path: string, name: string, ext: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname + '/' + path);
        }
        return join(dirname(path) + '/' + name + '.' + ext);
    }

    // удаляет файл, если он существует
    async deleteFileIfExists(path: string) {
        if (await this.isExist(path)) {
            promises.unlink(path);
        }
    }
}
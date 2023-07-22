import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  private readonly uploadFolder = './uploads'; // Specify the folder path where you want to store the files

  constructor() {
    this.ensureUploadFolderExists();
  }

  private ensureUploadFolderExists() {
    if (!fs.existsSync(this.uploadFolder)) {
      fs.mkdirSync(this.uploadFolder);
    }
  }

  async saveFile(file: Express.Multer.File): Promise<string> {
    const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
    const filePath = path.join(this.uploadFolder, fileName);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, file.buffer, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(fileName);
        }
      });
    });
  }

  async deleteFile(fileName: string): Promise<void> {
    const filePath = path.join(this.uploadFolder, fileName);

    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

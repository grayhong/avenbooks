import fs from 'fs';
import path from 'path';
import joinPath from 'path.join';

const saveImageSync = (base64Data, fileName) => {
    return new Promise((resolve, reject) => {
        const strImage = base64Data.replace(/^data:image\/[a-z]+;base64,/, '');
        const imageBuffer = new Buffer(strImage, 'base64');

        const filePathDir = joinPath(__dirname, 'statics');
        const filePath = joinPath(filePathDir, fileName);

        fs.writeFileSync(filePath, imageBuffer);
        const url = localConfig.staticHost + filePath;
        resolve(url);
    });
};

export default saveImageSync;

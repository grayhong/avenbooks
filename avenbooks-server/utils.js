import fs from 'fs';
import path from 'path';

const saveImageSync = (base64Data, fileName) => {
    return new Promise((resolve, reject) => {
        const strImage = base64Data.replace(/^data:image\/[a-z]+;base64,/, '');
        const imageBuffer = new Buffer(strImage, 'base64');

        const filePathDir = path.join(__dirname, 'statics');
        const filePath = path.join(filePathDir, fileName);
        console.log(filePath);

        fs.writeFileSync(filePath, imageBuffer);
        resolve(filePath);
    });
};

export default saveImageSync;

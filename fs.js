const fs = require('fs');
const path = require('path');

const checkAllFilesInDirWithExtension = async (dir, ext) => {
    return new Promise((resolve, reject) => {

        try {
            fs.readdir(dir, (err, files) => {
                if (err) console.log(err);
                else {
                    files.forEach(file => {
                        if (path.extname(file) != `.${ext}`) return reject(`Not all files with extension .${ext}`);
                    })
                }
                return resolve(files);
            })
        } catch (error) {
            return reject(error.message)
        }

    });
};

const getFilesInDirectory = async (dir) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) reject(err.message);
            else {
                return resolve(files);
            }
        });

    });
};


const deleteFilesInDirectory = async (dir) => {
    try {
        const files = await getFilesInDirectory(dir);

        await Promise.all(files.map(async (file) => {
            const filePath = path.join(dir, file);
            await fs.promises.unlink(filePath);
            console.log(`Deleted ${path.join(__dirname, filePath)}`);
        }));

        console.log('All files deleted successfully.');
    } catch (error) {
        console.error('Error deleting files:', error);
    }
};

const dir = '.\\testFolder';
const extension = 'jpg';

getFilesInDirectory(dir)
    .then(files => {
        console.log('Files: ', files);
    }).catch(error => {
        console.error('Error: ', error);
    });

checkAllFilesInDirWithExtension(dir, extension)
    .then(() => {
        console.log(`All files in ${dir} have the extension .${extension}`);
        return deleteFilesInDirectory(dir);
    })
    .then(() => {
        console.log(`All files in ${dir} deleted successfully.`);
    })
    .catch(error => {
        console.error('Error: ', error);
    });
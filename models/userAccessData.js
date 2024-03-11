const DB = process.env.DB || 'MONGODB';

const register = async (normalizedUser) => {
    if (DB === 'MONGODB') {
        try {
            normalizedUser._id = '123456';
            return Promise.resolve(normalizedUser);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
}

const login = async (user) => {
    if (DB === 'MONGODB') {
        try {
            // TODO: implement login
            return Promise.resolve(`in login`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
}
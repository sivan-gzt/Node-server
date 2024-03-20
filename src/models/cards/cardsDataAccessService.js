// DAL
const DB = process.env.DB || 'MONGODB';


const findMyCards = async (userId) => {
    if (DB === 'MONGODB') {
        try {
            // db fetch logic goes here
            return new Promise.resolve(`My Cards ${userId}`);
        } catch (error) {
            return new Promise.reject(error.message);
        }
    }
};


const getCard = async (id) => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve({ name: "card1" }, { id });
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
}

const create = async (normalizedCard) => {
    if (DB === 'MONGODB') {
        try {
            normalizedCard._id = "123";
            return Promise.resolve(normalizedCard);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
}

const find = async () => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve([{ name: "card1" }, { name: "card2" }]);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("find not in mongoDB");
}

const getCards = async () => {
    if (DB === 'MONGODB') {
        try {
            return Promise.resolve('implement get cards');
        } catch (error) {
            return Promise.reject(`error: ${error.message}`);
        }
    } else {
        return Promise.resolve('DB =/= MONGODB');
    }
};

const update = async (cardId, normalizedCard) => {
    if (DB === 'MONGODB') {
        try {
            // TODO: perform update
            return Promise.resolve(`card no. ${cardId} updated`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
}

const like = async (cardId, userId) => {
    if (DB === 'MONGODB') {
        try {
            // TODO: perform like
            return Promise.resolve(`card no. ${cardId} liked by user ${userId}`);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

const remove = async (cardId) => {
    if (DB === 'MONGODB') {
        try {
            // TODO: perform remove
            return Promise.resolve(`card no. ${cardId} removed`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
}


module.exports = {
    getCards,
    find,
    findMyCards,
    getCard,
    create,
    update,
    like,
    remove,
};
const { handleJoiError } = require('../utils/handleErrors');
const cardsAccessData = require('../models/cards/cardsDataAccessService');
const validateCardWithJoi = require('../models/cards/validations/Joi/validateCardWithJoi');


const VALIDATOR = undefined || "Joi"


const getCards = async () => {
    try {
        const cards = await cardsAccessData.find();
        return Promise.resolve(cards);

    } catch (error) {
        return Promise.reject(error);
    }
};

const getCard = async (cardId) => {
    try {
        const card = await cardsAccessData.getCard(cardId);
        return Promise.resolve(card);

    } catch (error) {
        return Promise.reject(error);
    }
}

const getMyCards = async (userId) => {
    try {
        const cards = await cardsAccessData.findMyCards(userId);
        return Promise.resolve(cards);
    } catch (error) {
        return Promise.reject(error);
    }
}

const createCard = async (normalizedCard) => {
    try {
        let card = { ...normalizedCard };
        card.createdAt = new Date();
        card = await cardsAccessData.create(card);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
};

const updateCard = async (cardId, rawCard) => {
    try {
        let card = { ...rawCard };
        card = await cardsAccessData.update(cardId, card);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
}

const likeCard = async (cardId, userId) => {
    try {
        const card = await cardsAccessData.like(cardId, userId)
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
}


const deleteCard = async (cardId) => {
    try {
        const card = await cardsAccessData.remove(cardId);
        return Promise.resolve(card);
    } catch (error) {
        return Promise.reject(error);
    }
}


const validateCard = (card) => {
    if (VALIDATOR == "Joi") {
        return validateCardWithJoi(card);
    }
}


module.exports = {
    getCard,
    getCards,
    getMyCards,
    createCard,
    updateCard,
    likeCard,
    deleteCard,
    validateCard
}
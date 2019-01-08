import {INCREMENT_CURRENT_TASK, INIT_CURRENT_TASK, INCREMENT_COUNT_RIGHT_ANSWERS, INIT_COUNT_RIGHT_ANSWERS, INCREMENT_COUNT_POINTS, INIT_COUNT_POINTS, INCREMENT_COUNT_COINS, INIT_COUNT_COINS} from '../constants'

export const currentTaskReducer = (count = 0, action) => {
    const {type} = action

    switch (type) {
        case INCREMENT_CURRENT_TASK: return count + 1
        case INIT_CURRENT_TASK: return 0
    }

    return count
}

export const countRightAnswersReducer = (count = 0, action) => {
    const {type} = action

    switch (type) {
        case INCREMENT_COUNT_RIGHT_ANSWERS: return count + 1
        case INIT_COUNT_RIGHT_ANSWERS: return 0
    }

    return count
}

export const countPoints = (count = 0, action) => {
    const {type} = action

    switch (type) {
        case INCREMENT_COUNT_POINTS: return count + 10
        case INIT_COUNT_POINTS: return 0
    }

    return count
}

export const countCoins = (count = 0, action) => {
    const {type} = action

    switch (type) {
        case INCREMENT_COUNT_COINS: return count + 1
        case INIT_COUNT_COINS: return 0
    }

    return count
}

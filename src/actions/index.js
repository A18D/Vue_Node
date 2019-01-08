import {INCREMENT_CURRENT_TASK, INIT_CURRENT_TASK, INCREMENT_COUNT_RIGHT_ANSWERS, INIT_COUNT_RIGHT_ANSWERS, INCREMENT_COUNT_POINTS, INIT_COUNT_POINTS, INCREMENT_COUNT_COINS, INIT_COUNT_COINS, ENABLE_TIP, DISABLE_TIP} from '../constants'

export function incrementCurrentTask() {
    return {
        type: INCREMENT_CURRENT_TASK
    }
}

export function initCurrentTask() {
    return {
        type: INIT_CURRENT_TASK
    }
}

export function incrementCountRightAnswers() {
    return {
        type: INCREMENT_COUNT_RIGHT_ANSWERS
    }
}

export function initCountRightAnswers() {
    return {
        type: INIT_COUNT_RIGHT_ANSWERS
    }
}

export function incrementCountPoints() {
    return {
        type: INCREMENT_COUNT_POINTS
    }
}

export function initCountPoints() {
    return {
        type: INIT_COUNT_POINTS
    }
}

export function incrementCountCoins() {
    return {
        type: INCREMENT_COUNT_COINS
    }
}

export function initCountCoins() {
    return {
        type: INIT_COUNT_COINS
    }
}

export function enableTip() {
    return {
        type: ENABLE_TIP
    }
}

export function disableTip() {
    return {
        type: DISABLE_TIP
    }
}
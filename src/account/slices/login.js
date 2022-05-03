import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attempt: null,
    data: undefined,
    errors: null
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

const reset = () => initialState

const refresh = state => ({...state})

export const loginSlice = createSlice({
    initialState,
    name: 'login',
    reducers: {
        attempt,
        success,
        failure,
        reset,
        refresh,
    },
})

export const actions = loginSlice.actions

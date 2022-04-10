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

export const registerSlice = createSlice({
    initialState,
    name: 'register',
    reducers: {
        attempt,
        success,
        failure,
        reset
    },
})

export const actions = registerSlice.actions

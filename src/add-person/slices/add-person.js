import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    attempt: null,
    data: undefined,
    errors: null
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => {
    console.log('fail slice', payload)
    return ({...state, errors: payload})
}

export const addPersonSlice = createSlice({
    initialState,
    name: 'addPerson',
    reducers: {
        attempt,
        success,
        failure,
    },
})

export const actions = addPersonSlice.actions

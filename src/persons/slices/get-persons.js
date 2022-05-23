import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    errors: null
}

const attempt = state => ({ ...state })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => {
    console.log('slice', payload)
    return ({...state, errors: payload})
}

export const getPersonsSlice = createSlice({
    initialState,
    name: 'getPersons',
    reducers: {
        attempt,
        success,
        failure,
    },
})

export const actions = getPersonsSlice.actions

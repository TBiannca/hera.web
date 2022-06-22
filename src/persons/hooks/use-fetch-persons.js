import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {actions} from '../slices/get-persons'

export const useFetchPersons = () => {
    const dispatch = useDispatch()
    const token = window.localStorage.getItem('ACCESS_TOKEN')
    console.log('TOKEN', token)
    
    return useEffect(() => {
        dispatch(actions.attempt(token))
    }, [dispatch])
}
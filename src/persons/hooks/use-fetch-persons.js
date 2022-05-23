import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {actions} from '../slices/get-persons'

export const useFetchPersons = () => {
    const dispatch = useDispatch()
    
    return useEffect(() => {
        dispatch(actions.attempt())
    }, [dispatch])
}
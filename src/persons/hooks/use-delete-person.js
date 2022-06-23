import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from '../slices/delete-person'

export const useDeletePerson = id => {
    const dispatch = useDispatch()
    const token = window.localStorage.getItem('ACCESS_TOKEN')
    
    return useCallback(() => {
        dispatch(actions.attempt({ id, token }))
        window.location.reload()
    }, [dispatch])
}
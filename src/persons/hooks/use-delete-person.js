import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from '../slices/delete-person'

export const useDeletePerson = id => {
    const dispatch = useDispatch()
    
    return useCallback(() => {
        dispatch(actions.attempt({ id }))
        window.location.reload()
    }, [dispatch])
}
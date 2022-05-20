import { ofType } from 'redux-observable'
import {catchError, of, mergeMap, from} from 'rxjs'
import {repository} from '../repository'
import {actions} from '../slices/add-person'

export const add = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = ({ payload }) => repository.addPerson(payload)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => {
    console.log('fail epic', payload)
    return of(actions.failure(payload))
}


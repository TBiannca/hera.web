import { ofType } from 'redux-observable'
import { catchError, of, mergeMap } from 'rxjs'
import { actions } from '../slices/get-persons'
import { repository } from '../repository'

export const get = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = () => repository.getPersons()
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => {
    console.log('fail epic', payload)
    return of(actions.failure(payload))
}


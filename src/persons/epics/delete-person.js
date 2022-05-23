import { ofType } from 'redux-observable'
import { catchError, of, mergeMap } from 'rxjs'
import { actions } from '../slices/delete-person'
import { repository } from '../repository'

export const deletePerson = actions$ => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(execute))

const execute = ({ payload }) => repository.deletePerson(payload)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))


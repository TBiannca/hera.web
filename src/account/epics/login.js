import { from, of } from 'rxjs'
import { mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { repository } from '../repository'
import { actions } from '../slices/login'

export const login = actions$ => actions$
    .pipe(ofType(actions.attempt.type))
    .pipe(mergeMap(execute))

const execute = ({ payload }) => from(repository.login(payload))
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))

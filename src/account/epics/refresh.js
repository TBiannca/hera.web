import {of} from 'rxjs'
import {mergeMap, catchError} from 'rxjs/operators'
import {ofType} from 'redux-observable'

import {repository} from '../repository'
import {actions} from '../slices/login'

export const refresh = actions$ => actions$
    .pipe(ofType(actions.refresh))
    .pipe(mergeMap(execute))

const execute = () => repository.refresh()
    .pipe(mergeMap(success))
    .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))

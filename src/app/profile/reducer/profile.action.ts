import { Action } from '@ngrx/store';
import * as profileTypes from './profile.type';
import { AccessToken } from '../../../interfaces/token.interface';

export class LoginRequest implements Action {
    readonly type = profileTypes.PROFILE_LOGIN_REQUEST;
    payload: null = null;
}

export class LoginSuccess implements Action {
    readonly type = profileTypes.PROFILE_LOGIN_SUCCESS;
    constructor(public payload: { token: AccessToken, nickname: string }) { }
}

export class LoginFailure implements Action {
    readonly type = profileTypes.PROFILE_LOGIN_FAILURE;
    constructor(public payload: { error: string }) { }
}

export type ProfileActions
= LoginRequest
| LoginSuccess
| LoginFailure
;

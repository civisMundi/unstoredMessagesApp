import { createSelector } from '@ngrx/store';
import { AccessToken } from '../../../interfaces/token.interface';
import * as profileTypes from './profile.type';
import { ProfileActions as Actions } from './profile.action';

export interface ProfileState {
    isLoggedIn: false;
    token: AccessToken | null;
    isFetching: boolean;
    nickname: string | null;
    error: string;
};

export const initialState: ProfileState = {
    isLoggedIn: false,
    token: null,
    isFetching: false,
    nickname: null,
    error: null,
};

export function profileReducer(state: ProfileState = initialState, action: Actions): ProfileState {
    switch (action.type) {
        case profileTypes.PROFILE_LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case profileTypes.PROFILE_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.payload.token,
                nickname: action.payload.nickname,
            };

        default:
            return state;
    }
}

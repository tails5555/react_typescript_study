import { Reducer } from 'redux';
import { MusicModel } from '../action/model';
import {
    FETCH_MUSIC_LIST, FETCH_MUSIC_LIST_SUCCESS, FETCH_MUSIC_LIST_FAILURE,
    CREATE_MUSIC_ELEMENT, CREATE_MUSIC_ELEMENT_SUCCESS, CREATE_MUSIC_ELEMENT_FAILURE, RESET_SAVE_MUSIC_ELEMENT
} from '../action/type/type_music';

export interface MusicState {
    readonly musics : MusicModel[];
    readonly music : MusicModel | null;
    readonly loading : boolean;
    readonly error : string | null;
    readonly status : number;
}

const INITIAL_STATE : MusicState = {
    musics : [],
    music : null,
    loading : false,
    error : null,
    status : 0
};

export const musicReducer : Reducer<MusicState> = (state = INITIAL_STATE, action : any) => {
    switch(action.type){
        case FETCH_MUSIC_LIST :
            return { ...state, loading : true };
        case FETCH_MUSIC_LIST_SUCCESS :
            return { ...state, loading : false, musics : action.payload };
        case FETCH_MUSIC_LIST_FAILURE :
            return { ...state, loading : false, error : action.payload };
        
        case CREATE_MUSIC_ELEMENT :
            return { ...state, loading : true };
        case CREATE_MUSIC_ELEMENT_SUCCESS :
            return { ...state, loading : false, music : action.payload };
        case CREATE_MUSIC_ELEMENT_FAILURE :
            return { ...state, loading : false, error : action.payload };
        case RESET_SAVE_MUSIC_ELEMENT :
            return { ...state, music : null, error : null };
            
        default :
            return state;
    }
}
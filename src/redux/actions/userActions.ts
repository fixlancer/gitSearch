import { ActionTypes } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    USERS_URL,
} from '../../api/api';


export const getUserbyName = ({username}) => async dispatch => {
    return new Promise(async (resolve, reject) => {
     
        try {

            await axios.get(`${USERS_URL}/${username}`)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_USER_BY_NAME, payload: res.data });
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
};

export const getFollowers = ({username, limit, page}) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        try {

            await axios.get(`${USERS_URL}/${username}/followers`)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_FOLLOWERS, payload: res.data });
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
};

export const getFollowing = ({username, limit, page}) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        try {

            await axios.get(`${USERS_URL}/${username}/following`)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_FOLLOWING, payload: res.data });
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
};


export const reset = () => {
    return {
      type: ActionTypes.RESET
    };
}
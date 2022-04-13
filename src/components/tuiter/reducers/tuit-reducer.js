/* import {FIND_ALL_TUITS} from "../../../actions/tuits-actions";





const tuitReducer = (state = [], action) => {
 switch (action.type) {
   case 'FIND_ALL_TUITS':
     return action.tuits;
   default:
     return state;
 }
}


import posts from '../data/tuits.json';


const initialState = {
    tuits: posts
}

const tuitReducer = (state = [], action) => {
    switch (action.type) {

       case FIND_ALL_TUITS:
         return action.tuits;

        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });

        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })

        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Alamu Ramasamy",
                "verified": false,
                "handle": "al_ra",
                "time": "now",
                ...action.tuit,
                "avatar-image": "/images/profile.jpg",
                "logo-image": "/images/profile.jpg",
                "stats": {
                    "comments": 21,
                    "retweets": 22,
                    "likes": 23
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });

        default:
            return (state);
    }
};


export default tuitReducer;*/

import {DELETE_TUIT, FIND_ALL_TUITS,CREATE_TUIT, UPDATE_TUIT} from "../../../actions/tuits-actions"



const tuitReducer = (state = [], action) => {
    switch (action.type) {


       case FIND_ALL_TUITS:
         return action.tuits;

       case DELETE_TUIT:
          return state.filter(
            tuit => tuit._id !== action.tuit._id);

       case CREATE_TUIT:
            return [
              ...state,
              action.newTuit
            ];

           case UPDATE_TUIT:
             return state.map(
               tuit => tuit._id === action.tuit._id ?
                 action.tuit : tuit);

        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });

        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })

        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Alamu Ramasamy",
                "verified": false,
                "handle": "al_ra",
                "time": "now",
                ...action.tuit,
                "avatar-image": "/images/profile.jpg",
                "logo-image": "/images/profile.jpg",
                "stats": {
                    "comments": 21,
                    "retweets": 22,
                    "likes": 23
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });

        default:
            return (state);
    }
};

export default tuitReducer;
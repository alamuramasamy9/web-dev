import posts from '../data/tuits.json';

const initialState = {
    tuits: posts
}

const tuitReducer = (state = initialState, action) => {
    switch (action.type) {

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
                "avatar-image": "/images/profileReducer.png",
                "logo-image": "/images/profileReducer.png",
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
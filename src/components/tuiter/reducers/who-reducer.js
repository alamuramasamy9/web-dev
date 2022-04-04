import whoJson from '../data/who.json';

const initialState = {
    who: whoJson
}

const whoReducer = (state = initialState) => {
    return state;
};

export default whoReducer;
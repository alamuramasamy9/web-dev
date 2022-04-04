import owner from '../data/profile.json';

const initialState = {
    profile: owner,
    isEditing: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'isEdit-profileReducer':
            return {
                ...state,
                isEditing: action.isEdit
            }

        case 'save-profileReducer':
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;

    }
};

export default profileReducer;
import owner from '../data/profile.json';

const initialState = {
    profile: owner,
    isEditing: false
};

const profile = (state = initialState, action) => {
    switch (action.type) {

        case 'isEdit-profile':
            return {
                ...state,
                isEditing: action.isEdit
            }

        case 'save-profile':
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;

    }
};

export default profile;
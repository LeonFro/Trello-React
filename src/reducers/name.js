export const ADD_NAME = "ADD_NAME";

export function addName(name) {
    return {
        type: ADD_NAME,
        name,
    }
};

const initialstate = {
    name: 'Unknown user',
};

export default function name(state = initialstate, action) {
    switch (action.type) {
        case ADD_NAME:
            let name = action.name;
            if (!name.trim()) { return state };
            return { ...state, name, };
        default:
            return state;
    }
};
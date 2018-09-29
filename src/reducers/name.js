export const ADD_NAME = "ADD_NAME";

export function addName(name) {
    return {
        type: ADD_NAME,
        name,
    }
};

const initialstate = {
    name: 'Unknown user',
    modalGreetingOpen: true,
};

export default function name(state = initialstate, action) {
    switch (action.type) {
        case ADD_NAME:
            let name = action.name;
            if (!name.trim()) { return state };
            return { ...state, name, modalGreetingOpen: false, };
        default:
            return state;
    }
};
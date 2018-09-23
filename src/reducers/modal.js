export const MODAL_ON= "MODAL_ON";
export const MODAL_OFF = "MODAL_OFF";

const initialstate = {
    modalOpen: false,
};

export default function modal(state = initialstate, action) {
    switch (action.type) {
        case MODAL_ON:
            return { modalOpen:true, };
            case MODAL_OFF:
            return {modalOpen:false,}
        default:
            return state;
    }
};
import { BUY_PHONE } from "./type";


const initialStatePhone = {
    phone: 5
}


const PhoneReducer = (state = initialStatePhone, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phone: state.phone - action.payload


            }
        default: return state


    }

}

export default PhoneReducer
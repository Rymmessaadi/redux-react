import { BUY_TV } from "./type";


const initialStateTv = {
    tv: 8
}


const TvReducer = (state = initialStateTv, action) => {
    switch (action.type) {
        case BUY_TV:
            return {
                ...state,
                tv: state.tv - 1


            }
        default: return state


    }

}

export default TvReducer
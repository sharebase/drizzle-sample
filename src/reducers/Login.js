//
const getLoginId = response => {

    const loginId = response.sample;

    return loginId;
}
//
const initialState = { categoryId: undefined, loginId: undefined, error: false }
//
export default (state = initialState, action) => {

    switch (action.type) {
        case 'START_REQUEST':
            return {
                categoryId: action.payload.categoryId, loginId: action.payload.loginId, error: false
            }
            break;
        case 'RECEIVE_DATA':
            return action.payload.error ? {
                ...state, error: true
            } : {
                    categoryId: getLoginId(action.payload.response),
                    error: false,
                    loginId: getLoginId(action.payload.response)
                }
                ;


        default:
            return state;
    }

}
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
            } : Object.assign(
                {
                    categoryId: getLoginId(action.payload.response),
                    error: false,
                    loginId: getLoginId(action.payload.response)
                })
                ;
            break;
        case 'FINISH_REQUEST':
            return  Object.assign(
                {
                    categoryId: action.payload.categoryId,
                    error: false,
                    loginId: action.payload.data
                })
                ;
            break;

        default:
            return state;
    }

}
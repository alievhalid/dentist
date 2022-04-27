
const initialState = {
    token : localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    loading: false,
    error: null
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case "user/singIn/pending":
            return {
                ...state,
                loading: true,
                token: null,
                error: null
            };
        case "user/singIn/fulfilled":
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role,
                error: null
            }
        case "user/singIn/rejected":
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}
export const auth = (login, password) =>{
    return async (dispatch) => {
        dispatch({ type: "user/signIn/pending" });
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                login,
                password
            })
        })
        const json = await response.json();

        if (json.error) {
            dispatch({ type: "user/singIn/rejected", payload: json });
        } else {
            dispatch({ type: "user/singIn/fulfilled", payload: json });
            localStorage.setItem("token", json.token);
            localStorage.setItem("role", json.role);
        }


        // console.log(data)
    }
}

export default authReducer;
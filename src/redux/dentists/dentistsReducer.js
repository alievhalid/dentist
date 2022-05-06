const initialState = {
    dentists: [],
    addLoading: false,
    loading: false,
    editLoading: false,
    deleteLoading: false,
    error: null
}

const dentistsReducer = (state= initialState, action) => {
    switch (action.type) {
        case "dentist/adding/start":
            return {
                ...state,
                addLoading: true,
            };
        case "dentist/adding/error":
            return {
                ...state,
                addLoading: false,
                error: action.payload.error,
            };
        case "dentist/adding/success":
            return {
                ...state,
                addLoading: false,
                dentists: [...state.dentists, action.payload],
            };
        case "dentist/editing/start":
            return {
                ...state,
                editLoading: true,
            };
        case "dentist/editing/error":
            return {
                ...state,
                editLoading: false,
                error: action.payload.error,
            };
        case "dentist/editing/success":
            return {
                ...state,
                editLoading: false,
                dentists: state.dentists.map((item) => {
                    if (item._id !== action.payload._id) {
                        return item;
                    }
                    return action.payload;
                }),
            };
        case "dentist/loading/start":
            return {
                ...state,
                loading: true,
            };
        case "dentist/loading/error":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "dentist/loading/success":
            return {
                ...state,
                loading: false,
                dentists: action.payload
            };
        case "dentist/deleting/start":
            return {
                ...state,
                deleteLoading: true,
            };
        case "dentist/deleting/error":
            return {
                ...state,
                deleteLoading: false,
                error: action.payload
            };
        case "dentist/deleting/success":
            return {
                ...state,
                deleteLoading: false,
                dentists: state.dentists.filter((item) => {
                    if (item._id !== action.payload) {
                        return item;
                    }
                }),
            };
        default:
            return {
                ...state
            }
    }
}


export const createDentist = (
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        birthday,
        email,
        gender,
        salary,
        percent,
        speciality,
        login,
        password,
        color,
        role
) => {
    return async (dispatch) => {
        dispatch({ type: "dentist/adding/start" });
        const response = await fetch('http://localhost:4000/doctors/register', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                fathersName,
                phoneNumber,
                secondPhoneNumber,
                birthday,
                email,
                gender,
                salary,
                percent,
                speciality,
                login,
                password,
                color,
                role
            })
        })
        const json = await response.json();

        if (json.error) {
            dispatch({ type: "dentist/adding/error", payload: json });
        } else {
            dispatch({ type: "dentist/adding/success", payload: json });
        }
        console.log(json)
    }
}

export const editDentist = (
    firstName,
    lastName,
    fathersName,
    phoneNumber,
    secondPhoneNumber,
    birthday,
    email,
    gender,
    salary,
    percent,
    speciality,
    login,
    password,
    color,
    role,
    id
) => {
    return async (dispatch) => {
        dispatch({ type: "dentist/editing/start" });
        const response = await fetch(`http://localhost:4000/doctors//edit/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                fathersName,
                phoneNumber,
                secondPhoneNumber,
                birthday,
                email,
                gender,
                salary,
                percent,
                speciality,
                login,
                password,
                color,
                role
            })
        })
        const json = await response.json();

        if (json.error) {
            dispatch({ type: "dentist/editing/error", payload: json });
        } else {
            dispatch({ type: "dentist/editing/success", payload: json });
        }
        console.log(json)
    }
}

export const deleteDentist = (id) =>{
    return async (dispatch) =>{
        dispatch({ type: "dentist/deleting/start" });

        const response = await fetch(`http://localhost:4000/doctors/delete/${id}`, {
            method: 'DELETE',
        })
        const json = await response.json();

        // dispatch({
        //     type: "dentist/deleting/success",
        //     payload: id,
        // });

        if (json.error) {
            dispatch({ type: "dentist/deleting/error", payload: json });
        } else {
            dispatch({ type: "dentist/deleting/success", payload: id });
        }
        console.log(json)
    }
}


export const loadDentistList = () =>{
    return async (dispatch) =>{
        dispatch({ type: "dentist/loading/start" });

        const response = await fetch('http://localhost:4000/doctors/get_list', {
            method: 'GET',
        })
        const json = await response.json();

        if (json.error) {
            dispatch({ type: "dentist/loading/error", payload: json });
        } else {
            dispatch({ type: "dentist/loading/success", payload: json });
        }
        console.log(json)
    }
}


export default dentistsReducer;
const initialState = {
    notes: [],
    addLoading: false,
    loading: false,
    editLoading: false,
    deleteLoading: false,
    error: null,
};

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "note/adding/start":
            return {
                ...state,
                addLoading: true,
            };
        case "note/adding/error":
            return {
                ...state,
                addLoading: false,
                error: action.payload,
            };
        case "note/adding/success":
            return {
                ...state,
                addLoading: false,
                notes: [...state.notes, action.payload]
            };
        case "notes/loading/start" :
            return {
                ...state,
                loading: true
            }
        case "notes/loading/error" :
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "notes/loading/success" :
            return {
                ...state,
                loading: false,
                notes: action.payload
            }

        default:
            return {
                ...state,
            };
    }
};


export const createNote = (recordType, doctor, visitDate, visitTime, duration, patient, status) => {
    return async (dispatch) => {
        dispatch({ type: "note/adding/start" });
        const response = await fetch("http://localhost:4000/note/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                recordType, doctor, visitDate, visitTime, duration, patient, status
            }),
        });
        const json = await response.json();

        if (json.error) {
            dispatch({ type: "note/adding/error", payload: json });
        } else {
            dispatch({ type: "note/adding/success", payload: json });
        }
        console.log(json);
    };
};

// export const getNoteByDoctorId = (id) =>{
//
// }

export const loadNotes = () => {
    return async (dispatch) => {
        dispatch({ type: "notes/loading/start" });
        const response = await fetch("http://localhost:4000/note");
        const json = await response.json();
        if (json.error) {
            dispatch({ type: "notes/loading/error", payload: json.error });
        } else {
            dispatch({ type: "notes/loading/success", payload: json });
        }
    };
};

export default noteReducer;
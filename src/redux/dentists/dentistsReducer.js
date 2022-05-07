import serviceReducer from "../service/serviceReducer";

const initialState = {
  dentists: [],
  addLoading: false,
  loading: false,
  editLoading: false,
  deleteLoading: false,
  error: null,
};

const dentistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dentist/adding/start":
      return {
        ...state,
        addLoading: true,
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
        error: action.payload,
      };
    case "dentist/loading/success":
      return {
        ...state,
        loading: false,
        dentists: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

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
    const response = await fetch("http://localhost:4000/doctors/register", {
      method: "POST",
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
        role,
      }),
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "dentist/adding/error", payload: json });
    } else {
      dispatch({ type: "dentist/adding/success", payload: json });
    }
    console.log(json);
  };
};

export const loadDentistList = () => {
  return async (dispatch) => {
    dispatch({ type: "dentist/loading/start" });

    const response = await fetch("http://localhost:4000/doctors/get_list", {
      method: "GET",
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "dentist/loading/error", payload: json });
    } else {
      dispatch({ type: "dentist/loading/success", payload: json });
    }
    console.log(json);
  };
};

export default dentistsReducer;

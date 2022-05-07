const initialState = {
  clients: [],
  loading: false,
  error: null,
  deleteLoad: false,
  createLoad: false,
  editLoad: false,
};

const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "clients/get/start":
      return {
        ...state,
        loading: true,
      };
    case "clients/get/success":
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };
    case "clients/get/error":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case "clients/add/start":
      return {
        ...state,
        createLoad: true,
      };
    case "clients/add/success":
      return {
        ...state,
        createLoad: false,
        clients: [...state.clients, action.payload],
      };
    case "clients/add/error":
      return {
        ...state,
        createLoad: true,
        error: action.payload,
      };
    case "clients/remove/start":
      return {
        ...state,
        deleteLoad: true,
      };
    case "clients/remove/error":
      return {
        ...state,
        deleteLoad: true,
        error: action.payload,
      };

    case "clients/remove/success":
      return {
        ...state,
        deleteLoad: false,
        clients: state.clients.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return false;
          }
        }),
      };
    case " clients/edit/start":
      return {
        ...state,
        editLoad: true,
      };
    case " clients/edit/error":
      return {
        ...state,
        editLoad: false,
        error: action.payload,
      };
    case " clients/edit/success":
      return {
        ...state,
        editLoad: false,
        clients: state.clients.map((item) => {
          if (item._id !== action.payload._id) {
            return item;
          }
          return action.payload;
        }),
      };

    default:
      return state;
  }
};

export default patientsReducer;

export const loadClients = () => {
  return (dispatch) => {
    dispatch({
      type: "clients/get/start",
    });
    fetch("http://localhost:4000/clients/get_list")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "clients/get/success",
          payload: json,
        });
      });
  };
};

export const addClients = (
  firstName,
  lastName,
  fathersName,
  phoneNumber,
  secondPhoneNumber,
  birthday,
  email,
  gender
) => {
  return async (dispatch) => {
    dispatch({
      type: "clients/add/start",
    });
    const response = await fetch("http://localhost:4000/clients/create", {
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
      }),
    });
    const json = await response.json();
    if (json.error) {
      // dispatch({ type: "clients/add/error", payload: json });
      console.log(json.error);
    } else {
      dispatch({ type: "clients/add/success", payload: json });
      console.log(json);
    }
  };
};

export const clientsDelete = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "clients/remove/start",
    });
    try {
      await fetch(`http://localhost:4000/clients/delete/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: "clients/remove/success",
        payload: id,
      });
    } catch (error) {}
  };
};

export const clientsEdit = (
  firstName,
  lastName,
  fathersName,
  phoneNumber,
  secondPhoneNumber,
  birthday,
  email,
  gender,
  _id
) => {
  return async (dispatch) => {
    dispatch({
      type: "clients/edit/start",
    });
    const response = await fetch(`http://localhost:4000/clients/edit/${_id}`, {
      method: "PATCH",
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
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "clients/edit/error", payload: json });
    } else {
      dispatch({ type: "clients/edit/success", payload: json });
    }
    console.log(json);
  };
};

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
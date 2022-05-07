const initialState = {
  services: [],
  addLoading: false,
  loading: false,
  editLoading: false,
  deleteLoading: false,
  error: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "service/adding/start":
      return {
        ...state,
        addLoading: true,
      };
    case "service/adding/error":
      return {
        ...state,
        addLoading: false,
        error: action.payload.error,
      };
    case "service/adding/success":
      return {
        ...state,
        addLoading: false,
        services: [...state.services, action.payload],
      };
    case "services/loading/start":
      return {
        ...state,
        loading: true,
      };
    case "services/loading/error":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "services/loading/success":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    case "service/editing/start":
      return {
        ...state,
        editLoading: true,
      };
    case "service/editing/error":
      return {
        ...state,
        editLoading: false,
        error: action.payload.error,
      };
    case "service/editing/success":
      return {
        ...state,
        editLoading: false,
        services: state.services.map((item) => {
          if (item._id !== action.payload._id) {
            return item;
          }
          return action.payload;
        }),
      };
    case "service/deleting/start":
      return {
        ...state,
        deleteLoading: true,
      };
    case "service/deleting/error":
      return {
        ...state,
        deleteLoading: false,
        error: action.payload.error,
      };
    case "service/deleting/success":
      return {
        ...state,
        deleteLoading: false,
        services: state.services.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return false
          }
        }),
      };

    default:
      return {
        ...state,
      };
  }
};

export const createService = (service, price) => {
  return async (dispatch) => {
    dispatch({ type: "service/adding/start" });
    const response = await fetch("http://localhost:4000/service/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        service,
        price,
      }),
    });
    const json = await response.json();

    if (json.error) {
      dispatch({ type: "service/adding/error", payload: json });
    } else {
      dispatch({ type: "service/adding/success", payload: json });
    }
    console.log(json);
  };
};

export const editService = (id, service, price) => {
  return async (dispatch) => {
    dispatch({ type: "service/editing/start" });
    const response = await fetch(`http://localhost:4000/service/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        service,
        price,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "service/editing/error", payload: json.error });
    } else {
      dispatch({ type: "service/editing/success", payload: json });
    }
  };
};

export const deleteService = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "service/deleting/start",
    });
    await fetch(`http://localhost:4000/service/delete/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: "service/deleting/success",
      payload: id,
    });
  };
};

export const loadServices = () => {
  return async (dispatch) => {
    dispatch({ type: "services/loading/start" });
    const response = await fetch("http://localhost:4000/service/get_list");
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "services/loading/error", payload: json.error });
    } else {
      dispatch({ type: "services/loading/success", payload: json });
    }
  };
};

export default serviceReducer;

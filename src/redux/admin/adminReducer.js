const initialState = {
  admin: [],
  loading: false,
  error: null,
  addLoad: false,
  editLoad: false,
  deleteLoad: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "admin/get/start":
      return {
        ...state,
        loading: true,
      };
    case "admin/get/error":
      return {
        ...state,
        error: action.payload,
      };
    case "admin/get/success":
      return {
        ...state,
        loading: false,
        admin: action.payload,
      };
    case "admin/add/start":
      return {
        ...state,
        addLoad: true,
      };
    case "admin/add/success":
      return {
        ...state,
        addLoad: false,
        admin: [...state.admin, action.payload],
      };
    case "admin/add/error":
      return {
        ...state,
        addLoad: true,
        error: action.payload,
      };
    case "admin/remove/start":
      return {
        ...state,
        deleteLoad: true,
      };
    case "admin/remove/error":
      return {
        ...state,
        deleteLoad: false,
        error: action.payload,
      };
    case "admin/remove/success":
      return {
        ...state,
        deleteLoad: false,
        admin: state.admin.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          } else {
            return false;
          }
        }),
      };
    case "admin/edit/start":
      return {
        ...state,
        editLoad: true,
      };
    case "admin/edit/error":
      return {
        ...state,
        editLoad: false,
        error: action.payload,
      };
    case "admin/edit/success":
      return {
        ...state,
        editLoad: false,
        admin: state.admin.map((item) => {
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

export default adminReducer;

export const loadAdmin = () => {
  return async (dispatch) => {
    dispatch({ type: "admin/get/start" });

    try {
      await fetch("http://localhost:4000/admin/get_list")
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: "admin/get/success",
            payload: json,
          });
        });
    } catch (error) {
      dispatch({ type: "admin/get/error", payload: error });
    }
  };
};

export const addAdmin =
  (firstName, lastName, fathersName, email, login, password, role) =>
  async (dispatch) => {
    dispatch({ type: "admin/add/start" });
    const response = await fetch("http://localhost:4000/admin/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        fathersName,
        email,
        login,
        password,
        role,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "admin/add/error", payload: json });
    } else {
      dispatch({ type: "admin/add/success", payload: json });
    }
  };

export const deleteAdmin = (id) => {
  return async (dispatch) => {
    dispatch({ type: "admin/remove/start" });
    const response = await fetch(`http://localhost:4000/admin/delete/${id}`, {
      method: "DELETE",
    });
    const json = response.json();
    if (json.error) {
      dispatch({ type: "admin/remove/error", payload: json });
    } else {
      dispatch({ type: "admin/remove/success", payload: id });
    }
  };
};

export const editAdmin = (
  firstName,
  lastName,
  fathersName,
  email,
  login,
  password,
  _id
) => {
  return async (dispatch) => {
    dispatch({ type: "admin/edit/start" });
    const response = await fetch(`http://localhost:4000/admin/edit/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        fathersName,
        email,
        login,
        password,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "admin/edit/error", payload: json });
    } else {
      dispatch({ type: "admin/edit/success", payload: json });
    }
  };
};

import axios from "axios";

// API CALL CREATION
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// API CALL FOR -  GETTING USERS DATA
export const getUsersApiCall = async (token) => {
  try {
    const response = await api.get("/users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// API CALL FOR -  CHECKING USER LOGIN
export const loginAuthenticationApiCall = async (loginData) => {
  try {
    const response = await api.post("users/authentication/", loginData);
    return response.data;
  } catch (error) {
    console.error("Error login Authentication:", error);
    throw error;
  }
};

// API CALL FOR -  UPLOADING BHAJANA MANDIRALU DATA
export const bhajanaMandiraluApiCall = async (formData, token) => {
  try {
    const response = await api.post("users/bmdata/", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error Bhajana Mandiralu :", error);
    throw error;
  }
};

// API CALL FOR -  REGISTERING NEW USER
export const newUserApiCall = async (newUser, token) => {
  try {
    const response = await api.post("users/register/", newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error New User :", error);
    throw error;
  }
};

// API CALL FOR -  USERNAME UPDATE
export const userUpdateApiCall = async (profileData, token) => {
  try {
    const response = await api.patch("users/usernameupdate/", profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error Username Update :", error);
    throw error;
  }
};

// API CALL FOR -  GENERATING REPORTS
export const reportsApiCall = async (reports, token) => {
  try {
    const response = await api.post("users/reports/", reports, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error Reports :", error);
    throw error;
  }
};

// API CALL FOR -  UPDATING USER
export const updateUserApiCall = async (newUser, token) => {
  try {
    const response = await api.patch(
      "users/user/" + newUser.username + "/",
      newUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error User Update :", error);
    throw error;
  }
};

// API CALL FOR -  FETCHING USER DATA
export const fetchUserApiCall = async (name, token) => {
  try {
    const response = await api.get("users/user/" + name + "/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error User Update :", error);
    throw error;
  }
};

// API CALL FOR -  CHANGE PASSWORD
export const changePasswordApiCall = async (userCredentials, token) => {
  try {
    const response = await api.patch("users/changepwd/", userCredentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error User Update :", error);
    throw error;
  }
};


//GENERIC FUNCTION
const apiCallingFunction = async (url, method, postData, token) => {
  try {
    const response = await api(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
   
    return response.data;
  } catch (error) {
    console.error("Error User Update:", error);
    throw error;
  }
};

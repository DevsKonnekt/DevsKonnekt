import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    // Make API call to authenticate user
    // const response = await axios.post(`${AUTH_URL}/login`, credentials);
    let response = {
      userData: {
        name: null,
        email: null,
        id: null,
        username: null,
      },
    };
    if (email !== "johndoe@gmail.com" || password !== "password") {
      response = {
        data: {},
        error: "Invalid credentials",
        status: 401,
      };
    } else {
      response = {
        userData: {
          name: "John Doe",
          email: "john@example.com",
          id: "123",
          username: "johndoe",
        },
        status: 200,
      };
    }

    if (response.status !== 200) {
      throw new Error(response.error ?? "Unknown error");
    }

    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  // Make API call to log out user
  // const response = await axios.post(`${AUTH_URL}/logout`);
  const response = {
    userData: {
      name: null,
      email: null,
      id: null,
      username: null,
    },
    status: 200,
  };
  if (response.status !== 200) {
    throw new Error(response.error ?? "Unknown error");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = {
          name: action.payload.name,
          email: action.payload.email,
          id: action.payload.id,
          username: action.payload.username,
        };
        state.error = null;
        // set auth state in local storage
        localStorage.setItem("auth", JSON.stringify(state));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
        // remove auth state from local storage
        localStorage.removeItem("auth");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const selectUserData = (state) => state.auth.userData;
export default authSlice.reducer;

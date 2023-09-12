import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Dashboard, Movie, discover, search } from "./DashboardCrud"

export const dashboardData = createAsyncThunk(
    "dashboard/dashboardData",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await Dashboard(payload)
            if (res?.status) {
                return res?.data;

            } else {
                throw new Error(res?.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const movie = createAsyncThunk(
    "dashboard/movie",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await Movie(payload)
            if (res?.status) {
                // console.log('res', res.data)
                return res?.data;

            } else {
                throw new Error(res?.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const SearchData = createAsyncThunk(
    "dashboard/SearchData",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await search(payload)
            if (res?.status) {
                return res?.data;

            } else {
                throw new Error(res?.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const DiscoverData = createAsyncThunk(
    "dashboard/DiscoverData",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await discover(payload)
            if (res?.status) {
                return res?.data;

            } else {
                throw new Error(res?.message)
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const DashBoardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        dashboardAllData: {},
        isLoading: false,
        movieData: {},
        searchAllData: {},
        discoverAllData: {},
        data: []
    },
    reducers: {
        addItem: (state, action) => {
            state.data = action.payload;
        },
        removeItem: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        }

    },
    extraReducers: {
        [dashboardData.pending]: (state, action) => {
            state.isLoading = true
        },
        [dashboardData.fulfilled]: (state, action) => {
            state.dashboardAllData = action?.payload?.results
        },
        [dashboardData.rejected]: (state, action) => {
            state.isLoading = false
        },
        // ************************************************************************

        [movie.pending]: (state, action) => {
            state.isLoading = true
        },
        [movie.fulfilled]: (state, action) => {
            state.movieData = action?.payload
        },
        [movie.rejected]: (state, action) => {
            state.isLoading = false
        },
        // ************************************************************************

        [SearchData.pending]: (state, action) => {
            state.isLoading = true
        },
        [SearchData.fulfilled]: (state, action) => {
            localStorage.setItem("movie-user", action?.payload?.results)
            state.dashboardAllData = action?.payload?.results
        },
        [SearchData.rejected]: (state, action) => {
            state.isLoading = false
        },

        // ************************************************************************
        [DiscoverData.pending]: (state, action) => {
            state.isLoading = true
        },
        [DiscoverData.fulfilled]: (state, action) => {
            state.discoverAllData = action?.payload
        },
        [DiscoverData.rejected]: (state, action) => {
            state.isLoading = false
        }
    }
})
export const { removeItem, addItem } = DashBoardSlice.actions;
export default DashBoardSlice.reducer;
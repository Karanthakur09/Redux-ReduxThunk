import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const logoutAndFetchJoke = createAsyncThunk(
    'user/logoutAndFetchJoke', //-> type of the joke
    async () => {

        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await res.json();

        //Return the joke text the payload
        return `${joke.setup} - ${joke.punchline}`
    }

)

const jokeSlice = createSlice({
    name: 'joke',
    initialState: { joke: '', status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        //optional pending state
        // builder.addCase(logoutAndFetchJoke.pending, (state) => {
        //     state.lastJoke = 'Loading joke...';
        //     state.users = []; // clear all users (logout)
        // })

        // // fulfilled = API call success
        // builder.addCase(logoutAndFetchJoke.fulfilled, (state, action) => {
        //     state.lastJoke = action.payload;
        // });
        // // rejected = API call failed
        // builder.addCase(logoutAndFetchJoke.rejected, (state) => {
        //     state.lastJoke = 'Failed to fetch joke.';
        // });

        builder.addCase(logoutAndFetchJoke.pending, (state) => {
            state.status = 'loading';
            state.joke = 'Loading joke...';
        });
        builder.addCase(logoutAndFetchJoke.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.joke = action.payload;
        });
        builder.addCase(logoutAndFetchJoke.rejected, (state) => {
            state.status = 'failed';
            state.joke = 'Failed to fetch joke.';
        });
    }
})

export default jokeSlice.reducer;
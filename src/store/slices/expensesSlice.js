import { createSlice } from "@reduxjs/toolkit";
import {
    addExpense,
    deleteExpense,
    editExpense,
    fetchExpenses,
    fetchOneExpense,
} from "../store";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        data: [],
        searchTerm: "",
        searchDate: 0,
        showLoading: false,
        showDelete: false,
        sucess: {
            showSuccessBox: false,
            message: "",
        },
        failure: {
            showErrorBox: false,
            message: "",
        },
    },
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSearchDate(state, action) {
            state.searchDate = action.payload;
        },
        setShowDlete(state, action) {
            state.showDelete = !state.showDelete;
        },
        setSuccess(state, action) {},
        setFailure(state, action) {},
    },
    extraReducers(builder) {
        builder.addCase(fetchExpenses.pending, (state, action) => {
            state.showLoading = true;
        });
        builder.addCase(fetchExpenses.fulfilled, (state, action) => {
            state.showLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchExpenses.rejected, (state, action) => {
            state.showLoading = false;
            state.failure.showErrorBox = true;
            state.failure.message = "Failed to fetch Expenses";
        });

        builder.addCase(fetchOneExpense.pending, (state, action) => {
            state.showLoading = true;
        });
        builder.addCase(fetchOneExpense.fulfilled, (state, action) => {
            state.showLoading = false;
        });
        builder.addCase(fetchOneExpense.rejected, (state, action) => {
            state.failure.showErrorBox = true;
            state.failure.message = "Could not fetch the Expense!";
        });

        builder.addCase(addExpense.pending, (state, action) => {
            state.showLoading = true;
        });
        builder.addCase(addExpense.fulfilled, (state, action) => {
            state.showLoading = false;
            console.log(action.payload);
            state.data.push(action.payload);
        });
        builder.addCase(addExpense.rejected, (state, action) => {
            state.failure.showErrorBox = true;
            state.failure.message = "Could not fetch the Expense!";
        });

        builder.addCase(editExpense.pending, (state, action) => {
            state.showLoading = true;
        });
        builder.addCase(editExpense.fulfilled, (state, action) => {
            state.showLoading = false;
            console.log(action.payload);
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        });
        builder.addCase(editExpense.rejected, (state, action) => {
            state.failure.showErrorBox = true;
            state.failure.message = "Could not update the Expense!";
        });

        builder.addCase(deleteExpense.pending, (state, action) => {
            state.showLoading = true;
        });
        builder.addCase(deleteExpense.fulfilled, (state, action) => {
            state.showLoading = false;
            state.data = state.data.filter((item) => {
                return item.id !== action.payload.id;
            });
        });
        builder.addCase(deleteExpense.rejected, (state, action) => {
            state.failure.showErrorBox = true;
            state.failure.message = "Could not Delete the Expense!";
        });
    },
});

export const expenseReducer = expensesSlice.reducer;

export const { setSearchTerm, setSearchDate, setShowDlete } =
    expensesSlice.actions;

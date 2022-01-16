const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);

            // save all user input data to local storage
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            // save all user input data to local storage
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;

        default:
            return state;
    }
}

export default contextReducer;
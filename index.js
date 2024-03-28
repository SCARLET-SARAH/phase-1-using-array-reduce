const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initialState = {
    totalBatteries: 0
};
const batteryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BATTERIES':
            return {
                totalBatteries: state.totalBatteries + action.payload
            };
        case 'REMOVE_BATTERIES':
            return {
                totalBatteries: state.totalBatteries + action.payload 
            }
        default:
            return state;
    }
};
let state = batteryReducer(undefined, {}); 
console.log(state.totalBatteries); 

state = batteryReducer(state, { type: 'ADD_BATTERIES', payload: 10 });
console.log(state.totalBatteries); 

state = batteryReducer(state, { type: 'REMOVE_BATTERIES', payload: 5 });
console.log(state.totalBatteries); 

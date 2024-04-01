let initialState={
    count:0,
    id:"",
    password:"",
};

function reducer(state=initialState,action){
    console.log("action은 뭘까?",action);
    // if(action.type==="INCREMENT") {
    //     return {...state,count:state.count+1}; //다른 state는 그대로 유지한 채, count만 바꿔준다.
    // }
    switch(action.type) {
        case "INCREMENT":
            return {...state,count:state.count+action.payload.num};
        case "LOGIN":
            return {...state,id:action.payload.id,password:action.payload.password,};
        case "DECREMENT":
            return {...state,count:state.count-1};
        default:
            return {...state};
    }
    return {...state}; //reducer는 return을 무조건 해야함. 행동지침!
}

export default reducer;
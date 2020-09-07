const initState = {
    projects: []
    
}

const projectReducer = ( state=initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.payload)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.payload)
            return state;
        case 'DELETE_PROJECT':
            console.log('delete project');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', 'state: ', state, 'action: ', action.project);
            return state;
        default:
            return state;
    }
    
}

export default projectReducer;
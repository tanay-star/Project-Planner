export const createProject = (project ) => {
    return (dispatch, getState) => {
       //async call to database
       dispatch({ type:'CREATE_PROJECT', payload: project });
    }
}
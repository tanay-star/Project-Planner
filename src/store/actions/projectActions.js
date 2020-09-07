export const createProject = (project ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
       //async call to database
       const firestore = getFirestore();
       firestore.collection('projects').add({
           ...project,
           authorFirstName: 'Net',
           authorLastName: 'Ninja',
           authorId: 12345,
           createdAt: new Date()
       }).then(() => {
           dispatch({ type:'CREATE_PROJECT', payload: project });
       }).catch((err) => {
           dispatch({ type:'CREATE_PROJECT_ERROR' , payload: err});
       })
       
    }
}//action for creating project

export const deleteProject = id => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      
      firestore.collection('projects').doc(id)
        .delete()
        .then(() => {
          dispatch({ type: 'DELETE_PROJECT', id })
        }).catch(err => {
          dispatch({ type: 'DELETE_PROJECT_ERROR', err })
      })
    }
  };// action for deleting project
  
export const createPost = (post) => {  
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log("profile in createPost post actions",profile);
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_POST_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_POST_ERROR' }, err);
    });
  }
};
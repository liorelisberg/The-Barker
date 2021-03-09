export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}

export const signUp = (newUser) => {
  console.log("newuser in signup",newUser);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(newUser => {
        return firestore.collection('users').doc(newUser.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
          image: newUser.image
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  }
}


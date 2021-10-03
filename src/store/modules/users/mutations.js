export default {
  setUserInfo(state, doc) {
    state.user.userId = doc.id;
    state.user.email = doc.data().email;
  },
};

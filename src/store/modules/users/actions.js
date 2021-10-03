import firebase from "firebase/app";
import "firebase/auth";
import db from "../../../firebase/firebaseInit";

export default {
  async getCurrentUser({ commit }) {
    const dataBase = await db
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    const results = await dataBase.get();
    commit("setUserInfo", results);
  },
};

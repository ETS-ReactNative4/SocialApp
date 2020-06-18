import { takeLatest, put, all } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { Alert } from "react-native";

import { PostRequest, PostSuccess } from "./actions";

export function* PostIn({ payload, payload2 }) {
    const { form } = payload
    const { navigation } = payload2

    try {
        let db = firebase.firestore().collection("Posts").doc();
        db.set(form);

        yield navigation.navigate('Home')
    } catch(err) {
        Alert.alert("Erro ao cadastrar usuário");
    }
}

export default all([
    takeLatest('@post/POST_REQUEST', PostIn)
]);
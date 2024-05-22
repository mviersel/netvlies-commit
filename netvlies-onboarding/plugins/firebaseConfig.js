// plugins/firebaseConfig.js
import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyC0mfzPRe_XqcqcRCx2xax7iUyV3DYUm4M",
        authDomain: "netvlies-onboarding.firebaseapp.com",
        projectId: "netvlies-onboarding",
        storageBucket: "netvlies-onboarding.appspot.com",
        messagingSenderId: "878749910394",
        appId: "1:878749910394:web:1792a0f75ec1087d9d02c3"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    nuxtApp.provide("db", db);
});

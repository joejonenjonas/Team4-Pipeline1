"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { router, redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // const googleSignIn = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider);
    // };

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        try {
            // Wacht tot de gebruiker is ingelogd voordat je verdergaat
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);

            // Check of de gebruiker al in de "users" collectie staat
            const userRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                // De gebruiker bestaat al, je kunt hier verdere acties uitvoeren als dat nodig is
            } else {
                // De gebruiker bestaat nog niet, voeg de gebruiker toe aan de "users" collectie
                await setDoc(userRef, {
                    // likes: [],
                    playlists: [],
                    listens: [],
                    uid: user.uid,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = () => {
        signOut(auth)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user])


    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
         </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
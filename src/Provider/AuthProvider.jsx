import { createContext,useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user, createUser, createUserGoogle, signInUser,
        loading,logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


// 1. first e context create kora lagbe  
// const AuthContext = createContext(null);
// then etake export o kore dbo..  export const AuthContext = createContext(null); 
// then return (
//     <div>

//     </div>
// ); er ekhane div er bodle AuthContext.Provider
// <AuthContext.Provider>

// </AuthContext.Provider> evabe  then AuthProvider e ekta context nea lagbe jar nam hbe {children} r oi children 
// ta k  2 authcontext.provider er majhe dea lagbe \
// then ei authprovider re main.jsx er majhe jaia edited code er majhe boshano lagbe (react  strictmode er vitore)
//   <StrictMode>
{/* <AuthProvider>
<HelmetProvider>
  <RouterProvider router={Routes}></RouterProvider>
</HelmetProvider>
</AuthProvider>
</StrictMode>, */}
// like this erpr  const authInfo create kora lagbe authprovider er vitore then oita ke value husabe pass kore deya lagbe 
//   <AuthContext.Provider value={authInfo}> eavbe 
// ei authinfo er majhe jekono props pathaile jeokon jayga theke access kra jay 
// erpor simply sob impport kre use kora jabe  erpor j component e use kra lagbe oita te  const {createUser} = useContext(AuthContext);
// eta die distructure kore ber kre use kora jabe




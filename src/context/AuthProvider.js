import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd'

export const AuthContext = createContext();
function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user?.multiFactor?.user;
                setUser({ uid, displayName, email, photoURL })
                navigate("/", { replace: true });
                setIsLoading(false)
                return;
            }
            setIsLoading(false);
            navigate("/login", { replace: true })
        })

        return () => unsubscibed();
    }, [navigate])

    return (
        <AuthContext.Provider value={user}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
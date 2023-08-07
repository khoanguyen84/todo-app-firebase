import React from "react";
import { Row, Col, Typography, Button } from "antd";
import firebase, { auth, db } from "../../firebase/config";
import { addDoc, collection } from 'firebase/firestore';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
function Login() {
    const handleFacebookLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
        if (additionalUserInfo?.isNewUser) {
            await db.collection("users").add({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo?.providerId
            })
        }
    }

    const handleGoogleLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(googleProvider);
        if(additionalUserInfo?.isNewUser){
            await addDoc(collection(db, 'users'), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo?.providerId
            })
        }
    }
    return (
        <div>
            <Row justify={"center"} style={{ height: 800 }}>
                <Col span={8}>
                    <Typography.Title style={{ textAlign: "center" }} level={3}>Todo App</Typography.Title>
                    <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleGoogleLogin}>Đăng nhập bằng Google</Button>
                    <Button style={{ width: '100%' }} onClick={handleFacebookLogin}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}


export default Login;
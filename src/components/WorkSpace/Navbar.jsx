import React, { useContext } from "react";
import { Col, Button, Row, Avatar, Typography } from 'antd';
import { auth } from "../../firebase/config";
import { styled } from "styled-components";
import { AuthContext } from "../../context/AuthProvider";

const NavbarStyle = styled.div`
    background: #ffa940;
    color:white;
    padding: 10px;
    display:flex;
    justify-content: end;
`

const AvatarStyle = styled.div`
    display:flex;
    padding: 0 5px;
    &>div{
        margin-right:10px;
        &>span{
            margin-right: 5px;
            color:white;
        }
    }
`
function Navbar() {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <NavbarStyle>
            <Row>
                <Col span={24}>
                    <AvatarStyle>
                        <div>
                            <Avatar src={user.photoURL}>{user.photoURL ? '' : user.displayName?.charAt(0).toUpperCase()}</Avatar>
                            <Typography.Text>{user.email}</Typography.Text>
                        </div>
                        <Button onClick={async () => await auth.signOut()}>Đăng xuất</Button>
                    </AvatarStyle>
                </Col>
            </Row>
        </NavbarStyle>
    )
}

export default Navbar;
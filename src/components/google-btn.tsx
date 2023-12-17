import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Logo } from "./auth-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.span`
    margin-top: 10px;
    background-color: white;
    font-weight: 500;
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default function GoogleButton() {
    const navigate = useNavigate();
    const onClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Button onClick={onClick}>
            <Logo src="/google-mark.svg" />
            Continue with Google
        </Button>
    )
}
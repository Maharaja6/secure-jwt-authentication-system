import { useState } from "react";
import API from "./api";
import "./Register.css";

function Register({ goToLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const register = async () => {

        setError("");

        if (!username || !password || !confirmPassword) {
            setError("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            const response = await API.post("/register", {
                username,
                password
            });

            alert(response.data.message);

            goToLogin();

        }

        catch (error) {

            if (error.response) {
                setError(error.response.data.detail);
            } else {
                setError("Unable to connect to server.");
            }

        }

        finally {
            setLoading(false);
        }

    };

    return (

        <div className="register-wrapper">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Create your SecureAuth account</p>

                {error &&
                    <div className="error-message">
                        {error}
                    </div>
                }

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />

                <button
                    onClick={register}
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Register"}
                </button>

                <div className="bottom-text">
                    Already have an account?
                    <span onClick={goToLogin}> Login</span>
                </div>

            </div>

        </div>

    );

}

export default Register;
import React from "react";
import css from "./styles/Login.module.css";

const Login = () => {
	return (
		<>
			<div className={css.outerContainer}>
				<div className={css.innerContainer}>
					<div className={css.imageContainer}>
						<img
							className={css.image}
							src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80"
							alt=""
						/>
					</div>
					<div className={css.loginSection}>
						<h1>Login Here</h1>
						<form>
							<div>
								<label htmlFor="username">Username:</label>
								<input type="text" id="username" />
							</div>
							<div>
								<label htmlFor="password">Password:</label>
								<input type="password" id="password" />
							</div>
							<button type="submit">Login</button>
							<div>
								<label htmlFor="remember-me">Remember me:</label>
								<input type="checkbox" id="remember-me" />
							</div>
						</form>
					</div>
					<div className={css.footerPart}>
						<a href="" className={css.register}>
							Register
						</a>
						<a href="" className={css.forgotPass}>
							Forgot Password?
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;

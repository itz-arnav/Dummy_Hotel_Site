import css from "./Register.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
	return (
		<div className={css.container}>
			<div className={css.innerContainer}>
				<div className={css.imageSection}>
					<img
						src="https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80"
						alt=""
					/>
				</div>

        <div className={css.signupContainer}>
        <div className={css.signupSection}>
					<div className={css.textSection}>
						<h1>Sign Up</h1>
						<p>Please fill in the form to create an account</p>
					</div>
          <hr />
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="fw-bold">Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" className = {css.greyRegion} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label className="fw-bold">Password</Form.Label>
							<Form.Control type="password" placeholder="Password" className = {css.greyRegion}/>
						</Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword"> 
							<Form.Label className="fw-bold">Repeat Password</Form.Label>
							<Form.Control type="password" placeholder="Password" className = {css.greyRegion}/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remember Me" />
						</Form.Group>

            <p>By creating an account, you agree to our <a href="">Terms & Privacy.</a></p>

            <div className={css.buttonSection}>
            <Button variant="danger" type="submit" className={css.btn}>
							Cancel
						</Button>
            <Button variant="success" type="submit" className={css.btn}>
							Sign Up 
						</Button>
            </div>
					</Form>
				</div>
        </div>
				

        <div className={css.copyrightSection}>
          <h1>Copyright ©2023 All Cheems Rights Limited | Design Group: 4</h1>
        </div>
			</div>
		</div>
	);
};

export default Register;

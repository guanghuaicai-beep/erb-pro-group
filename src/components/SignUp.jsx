// import { useState , useEffect} from "react";
// import {Link , useNavigate} from "react-router-dom";
// import axios from "axios";
// import "../sign-up.css";

// const SignUp = () => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [notification, setNotification] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // auto hide notification
//   useEffect(() => {
//     if (notification) {
//       const timer = setTimeout(() => {
//         setNotification("");
//       }, 5000);  
//       return () => clearTimeout(timer);
//     }
//   }, [notification]);

//   const validate = () => {
//     const newErrors = {};
//     if (!firstname) newErrors.firstname = "Firstname is required";
//     if (!lastname) newErrors.lastname = "Lastname is required";
//     if (!username) newErrors.username = "Username is required";

//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!mobile) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{8}$/.test(mobile)) {
//       newErrors.mobile = "Mobile must be 8 digits";
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if(!confirmPassword) {
//       newErrors.confirmPassword = "Confirm Password is required";
//     } else if (confirmPassword !== password) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     return newErrors;
//   };

//   // form submition and send data to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setLoading(true)
//       try {
//         const res = await axios.post("http://localhost:8080/register", {
//           firstname,
//           lastname,
//           email,
//           username,
//           mobile,
//           password,
//           confirmPassword
//         });
//         setNotification(`✅ Success: ${res.data}`);
//         navigate("/signin")
//       } catch (err) {
//         setNotification(
//           `❌ Error: ${err.response?.data || "Server not reachable" || "Something Wrong"}`
//         );
//       } 
//     }
//   };

//   return (
//     <div className="glass-card p-4 p-md-5">
//       <div className="logo">
//         <span className="logo-icon">📘</span>
//         <span>Course</span>
//       </div>

//       <h2 className="form-title line-simple-2">Sign Up</h2>

//       <form onSubmit={handleSubmit} noValidate>
//         {/* Firstname */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">👤</span>
//             <input
//               type="text"
//               placeholder="Firstname"
//               className={`form-control ${
//                 submitted && errors.firstname ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={firstname}
//               onChange={(e) => setFirstname(e.target.value)}
//             />
//           </div>
//           {submitted && errors.firstname && (
//             <div className="error-message">{errors.firstname}</div>
//           )}
//         </div>

//         {/* Lastname */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">👤</span>
//             <input
//               type="text"
//               placeholder="Lastname"
//               className={`form-control ${
//                 submitted && errors.lastname ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={lastname}
//               onChange={(e) => setLastname(e.target.value)}
//             />
//           </div>
//           {submitted && errors.lastname && (
//             <div className="error-message">{errors.lastname}</div>
//           )}
//         </div>

//         {/* Username */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">👤</span>
//             <input
//               type="text"
//               placeholder="Username"
//               className={`form-control ${
//                 submitted && errors.username ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           {submitted && errors.username && (
//             <div className="error-message">{errors.username}</div>
//           )}
//         </div>


//         {/* Email */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">✉️</span>
//             <input
//               type="email"
//               placeholder="Email"
//               className={`form-control ${
//                 submitted && errors.email ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           {submitted && errors.email && (
//             <div className="error-message">{errors.email}</div>
//           )}
//         </div>

//         {/* Mobile */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">📱</span>
//             <input
//               type="tel"
//               placeholder="Mobile"
//               className={`form-control ${
//                 submitted && errors.mobile ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />
//           </div>
//           {submitted && errors.mobile && (
//             <div className="error-message">{errors.mobile}</div>
//           )}
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">🔒</span>
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className={`form-control ${
//                 submitted && errors.password ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span
//               className="input-group-text toggle-password"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               <i className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
//             </span>
//           </div>
//           {submitted && errors.password && (
//             <div className="error-message">{errors.password}</div>
//           )}
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-4">
//           <div className="input-group has-validation">
//             <span className="input-group-text">🔒</span>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               className={`form-control ${
//                 submitted && errors.confirmPassword ? "is-invalid" : submitted ? "is-valid" : ""
//               }`}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <span
//               className="input-group-text toggle-password"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               <i className={showConfirmPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
//             </span>
//           </div>
//           {submitted && errors.confirmPassword && (
//             <div className="error-message">{errors.confirmPassword}</div>
//           )}
//         </div>

//         {/* Sign Up */}
//         <button type="submit" className="btn-signup">
//           Sign Up
//         </button>

//         {/* Login link */}
//         <div className="login">
//           Already have an account ? <Link to="/signin">Sign In Here</Link>
//         </div>
//       </form>

//       {/* Notification */}
//       {notification && (
//         <div
//           className={`notification show ${
//             notification.startsWith("❌") ? "error" : ""
//           }`}
//         >
//           {notification}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;

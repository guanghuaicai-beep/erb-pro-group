// import { useState , useEffect } from "react";
// import axios from "axios";
// import {Link , useNavigate} from "react-router-dom";
// import "../sign-in.css";

// const SignIn = () => {
//   const [method, setMethod] = useState("email");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);

//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [notification, setNotification] = useState("");

//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (method === "email") {
//       if (!email) {
//         newErrors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(email)) {
//         newErrors.email = "Invalid email format";
//       }
//     } else {
//       if (!mobile) {
//         newErrors.mobile = "Mobile number is required";
//       } else if (!/^\d{8}$/.test(mobile)) {
//         newErrors.mobile = "Mobile must be 8 digits";
//       }
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length > 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const res = await axios.post("http://localhost:8080/login", {
//           method,email,mobile,password,remember,
//         });
//         setNotification(`✅ Login Success: ${res.data}`);
//         navigate("/home");
//       } catch (err) {
//         setNotification(
//           `❌ Error: ${err.response?.data || "Server not reachable"}`
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

//       <h2 className="form-title line-simple-2">Sign In</h2>
//       <p className="subheading">Upgrade your skills, start here.</p>

//       <form onSubmit={handleSubmit} noValidate>
//         {/* Login Method */}
//         <div className="login-method">
          
//             <input type="radio" name="method" value="email" checked={method === "email"} onChange={() => setMethod("email")}/>{" "}
//             Email
//           <input type="radio" name="method" value="mobile" checked={method === "mobile"} onChange={() => setMethod("mobile")}/>{" "}
//             Mobile
          
//         </div>

//         {/* Email */}
//         {method === "email" && (
//           <div className="mb-4 login-field">
//             <div className="input-group has-validation">
//               <span className="input-group-text">✉️</span>
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className={`form-control ${
//                   submitted && errors.email ? "is-invalid" : submitted ? "is-valid" : ""
//                 }`}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {submitted && errors.email && (
//               <div className="error-message">{errors.email}</div>
//             )}
//           </div>
//         )}

//         {/* Mobile */}
//         {method === "mobile" && (
//           <div className="mb-4 login-field">
//             <div className="input-group has-validation">
//               <span className="input-group-text">📱</span>
//               <input
//                 type="tel"
//                 placeholder="Mobile number"
//                 className={`form-control ${
//                   submitted && errors.mobile ? "is-invalid" : submitted ? "is-valid" : ""
//                 }`}
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </div>
//             {submitted && errors.mobile && (
//               <div className="error-message">{errors.mobile}</div>
//             )}
//           </div>
//         )}

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

//         {/* Options */}
//         <div className="options">
//           <label>
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={(e) => setRemember(e.target.checked)}
//             />{" "}
//             Remember me
//           </label>
//           <Link to="/forget-password">Forget password?</Link>
//         </div>

//         {/* Sign In */}
//         <button type="submit" className="btn-signin">
//           Sign In
//         </button>

//         {/* Register */}
//         <div className="register">
//           Don't have an account? <Link to="/signup">Register</Link>
//         </div>
//       </form>

//       {notification && <div className="success-message">{setNotification}</div>}
//     </div>
//   );
// };

// export default SignIn;

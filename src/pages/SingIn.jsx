// import { useState } from "react";
// import { useNavigate } from "react-router";

// export default function SignIn() {
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate()


//     async function handleUserForm(e) {
//         e.preventDefault();



//         try {

//             const response = await fetch('http://localhost:3000/adduser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: userName,
//                     email: email,
//                     password: password,
//                 }),
//             });



//         } catch (error) {
//             console.error('Error:', error);


//         }

//         navigate('/login')
//     }

//     return (
//         <>
//             <h1>Sign In</h1>

//             <div className="register-container">
//                 <h2>Registrati</h2>
//                 <form onSubmit={handleUserForm} id="registerForm">
//                     <input
//                         type="text"
//                         name="username"
//                         className="form-control my-3"
//                         placeholder="Nome utente"
//                         value={userName}
//                         onChange={e => setUserName(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         className="form-control my-3"
//                         placeholder="Email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         className="form-control my-3"
//                         placeholder="Password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         required
//                     />
//                     <button type="submit" className="btn btn-primary">Registrati</button>
//                 </form>


//                 <div className="login-link">
//                     <p>Hai già un account? <button className="btn btn-primary">Log In</button></p>
//                 </div>
//             </div>
//         </>
//     );
// }

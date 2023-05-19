// import React, { useState } from "react";
// import * as C from "./styles";
// import Input from "../../components/Input";
// import Button from "../../components/button";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const Signin = () => {

//   const [email, setEmail] = useState();
//   const [senha, setSenha] = useState();
//   const [error, setError] = useState();

//   return (
//     <C.Container>
//       <C.Label>Sistema de Login</C.Label>
//       <C.Content>
//         <Input
//           type="email"
//           placeholder="Digite seu email"
//           value={email}
//           onChange={(e) => [setEmail(e.target.value), setError("")]}
//         />
//         <Input
//           type="password"
//           placeholder="Digite sua senha"
//           value={senha}
//           onChange={(e) => [setSenha(e.target.value), setError("")]}
//         />
//         <C.labelError>{error}</C.labelError>
//         <Button text="Entrar" onClick={handleLogin} />
//         <C.LabelSignup>
//           Não tem uma conta?
//           <C.Strong>
//             <Link to="/singup">&nbsp; Registre-se</Link>
//           </C.Strong>
//         </C.LabelSignup>
//       </C.Content>
//     </C.Container>
//   );
// };

// export default Signin;

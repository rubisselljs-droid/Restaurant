import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [gmail, setGmail] = useState("");
  const [numerPhone, setNumerPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const InputData = (setState) => (e) => {
    setState(e.target.value);
  };

  const enviarData = (e) => {
    e.preventDefault();
    if (gmail === "admin@gmail.com" && password === "123456") {
      alert("Bienvenido");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <>
      <section>
        <input
          type="email"
          value={gmail}
          onChange={InputData(setGmail)}
          placeholder="Gmail"
        />
        <input
          type="number"
          value={numerPhone}
          onChange={InputData(setNumerPhone)}
          placeholder="Numero de telefono"
        />
        <input
          type="password"
          value={password}
          onChange={InputData(setPassword)}
          placeholder="Password"
        />

        <input type="password" value={password2} onChange={InputData(setPassword2)} />
        <button onClick={enviarData}>Enviar</button>
        <p>
          no tienes cuenta? <button>Registrate</button>
        </p>
      </section>

      <section></section>
    </>
  );
}

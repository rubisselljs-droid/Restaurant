import { useState } from "react";


export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    gmail: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  // Regular Expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const validate = () => {
    let newErrors = {};

    // Email Validation
    if (!emailRegex.test(formData.gmail)) {
      newErrors.gmail = "Por favor ingresa un correo electrónico válido.";
    }

    // Password Validation
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
    }

    // Phone Validation (Only for Register)
    if (!isLogin) {
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "El número debe tener 10 dígitos.";
      }
      if (formData.password !== formData.passwordConfirm) {
        newErrors.passwordConfirm = "Las contraseñas no coinciden.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) {
      if (formData.gmail === "admin@gmail.com" && formData.password === "Admin123!") { 
        // Updated mock password to match regex for testing
        alert("Bienvenido");
      } else {
        alert("Datos incorrectos (Prueba: admin@gmail.com / Admin123!)");
      }
    } else {
      alert("Registro exitoso");
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ gmail: "", password: "", passwordConfirm: "", phone: "" });
    setErrors({});
  };

  // Modern restaurant-themed images
  const loginImage = "https://i.pinimg.com/1200x/3b/d5/73/3bd5731305dae7520652f29fc7164962.jpg";
  const registerImage = "https://i.pinimg.com/736x/39/44/0d/39440d84e8dd240af66ff79f6529a48b.jpg";

  return (
    <div className="flex min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* Form Section */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 md:w-1/2 lg:px-20 xl:px-32 relative z-10">
        
        {/* Logo or Brand */}
        {/* Logo or Brand */}
        

        <div className="animate-fade-in w-full max-w-md mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3 font-serif">
              {isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}
            </h1>
            <p className="text-gray-400">
              {isLogin 
                ? "Ingresa tus datos para acceder a tu cuenta." 
                : "Únete a nosotros para una experiencia gastronómica única."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Correo Electrónico</label>
              <input
                type="email"
                name="gmail"
                value={formData.gmail}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
                className={`w-full rounded-xl border px-5 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-200 ${
                  errors.gmail 
                    ? "border-red-500 bg-red-900/10 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "bg-white/5 border-white/10 focus:border-amber-500 focus:bg-white/10 focus:ring-1 focus:ring-amber-500"
                }`}
                required
              />
              {errors.gmail && <p className="mt-1 text-xs text-red-500">{errors.gmail}</p>}
            </div>

            {!isLogin && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Teléfono</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="55 1234 5678"
                  className={`w-full rounded-xl border px-5 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-200 ${
                    errors.phone 
                      ? "border-red-500 bg-red-900/10 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "bg-white/5 border-white/10 focus:border-amber-500 focus:bg-white/10 focus:ring-1 focus:ring-amber-500"
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full rounded-xl border px-5 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-200 ${
                  errors.password 
                    ? "border-red-500 bg-red-900/10 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    : "bg-white/5 border-white/10 focus:border-amber-500 focus:bg-white/10 focus:ring-1 focus:ring-amber-500"
                }`}
                required
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {!isLogin && (
               <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Confirmar Contraseña</label>
                <input
                  type="password"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full rounded-xl border px-5 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-200 ${
                    errors.passwordConfirm 
                      ? "border-red-500 bg-red-900/10 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      : "bg-white/5 border-white/10 focus:border-amber-500 focus:bg-white/10 focus:ring-1 focus:ring-amber-500"
                  }`}
                  required
                />
                {errors.passwordConfirm && <p className="mt-1 text-xs text-red-500">{errors.passwordConfirm}</p>}
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-5 py-3.5 text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/30 active:scale-95"
            >
              <div className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
            <button
              onClick={toggleMode}
              className="font-semibold text-amber-400 hover:text-amber-300 transition-colors hover:underline ml-1"
            >
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>

      {/* Image Section with Smooth Cross-Fade */}
      <div className="hidden w-1/2 md:block relative overflow-hidden bg-gray-900">
         
         {/* Register Image (Base Layer) */}
         <div 
           className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 ease-out"
           style={{ 
             backgroundImage: `url(${registerImage})`,
             transform: isLogin ? 'scale(1.1)' : 'scale(1.0)',
             opacity: 1 // Always visible underneath, but covered by login image if isLogin is true
           }}
         />

         {/* Login Image (Overlay Layer with Opacity Transition) */}
         <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${isLogin ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              backgroundImage: `url(${loginImage})`,
            }}
         />
         
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-linear-to-l from-[#0a0a0a] via-black/40 to-transparent" />
         
         {/* Decorative Content over Image */}
         <div className="absolute bottom-12 right-12 text-right max-w-md p-6 z-10">
            <div key={isLogin ? 'login-text' : 'register-text'} className="animate-fade-in-up">
              <h2 className="text-5xl font-serif font-bold text-white mb-4 drop-shadow-xl">
                {isLogin ? "Sabor Auténtico." : "Únete a la Mesa."}
              </h2>
              <p className="text-xl text-gray-200 font-light drop-shadow-lg">
                {isLogin 
                  ? "Ingredientes frescos, recetas tradicionales y una experiencia inolvidable." 
                  : "Descubre ofertas exclusivas y reserva tu mesa favorita hoy mismo."}
              </p>
            </div>
         </div>
      </div>
    </div>
  );
}

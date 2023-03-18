import  login from  "../styles/login.module.css" ;
function FormularioLogin() {
    return (
        <div className={"bg-light px-4 py-5 rounded"}>
            <h1 className={"text-center text-dark fw-bold mb-5"}>Login</h1>
            <form className={login.formulario}>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label text-primary fs-5 fw-semibold">Correo electrónico</label>
                    <input type="email" className="form-control" id="correo" required={true} placeholder={"Ingresa tu correo electrónico"}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contra" className="form-label text-primary fs-5 fw-semibold">Contraseña</label>
                    <input type="password" className="form-control" id="contra" required={true} placeholder={"Ingresa tu contraseña"}/>
                </div>

                <button type="submit" className="btn btn-primary text-center px-3">Submit</button>
            </form>
        </div>
);
}

export default FormularioLogin;
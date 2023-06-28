import { FC, ReactElement } from "react";
import { Form } from "types/form";
import "./ScirgaForm.styles.scss";

export const ScirgaForm: FC<Form> = ({ onSubmit }): ReactElement => {
  return (
    <div id="scirga-form">
      <h1>Afrolario</h1>
      <div></div>
      <form onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="nombre">Nombre:</label>
          <button id="btnAbrirPopUp" className="XD">
            Entrar contraseña
          </button>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="genero">Género:</label>
        <input type="color" id="genero" required />
        <label htmlFor="mensaje">Mensaje:</label>
        <input type="datetime-local" id="mensaje" required />
        <button id="botonFinal">Enviar</button>
      </form>
      <div>
        <div className="overlay" id="overlay">
          <div className="popup" id="popup">
            <h2>Ingrese su nombre</h2>
            <input type="text" id="nombreInput" placeholder="Nombre" />
            <button id="btnCerrarPopUp">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
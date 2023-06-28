import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import './ScirgaForm.styles.scss'

export const ScirgaForm: FC<Form> = ({ onSubmit }): ReactElement => {
    return (
<div id="form-container">
        <h1>Afrolario</h1>
      <div>
      </div>
        <form>
          <div class="container">
          <label for="nombre">Nombre:</label>
          <button id="btnAbrirPopUp" class="XD">Entrar contrasenya</button>
          </div>
            <label for="email">Email:</label>
            <input type="email" id="email">
            
            <label for="email">Género:</label>
            <input type="color" id="genero" required>

            <label for="mensaje">Mensaje:</label>
            <input type="datetime-local" id="mensaje" required></input>

            <button id="botonFinal" type="submit" onclick="submitForm()">Enviar</button>
        </form>
        <div class="overlay" id="overlay">
          <div class="popup" id="popup">
            <h2>Ingrese su nombre</h2>
            <input type="text" id="nombreInput" placeholder="Nombre">
            <button id="btnCerrarPopUp">Cerrar</button>
          </div>
        </div>
    </div>
    );
  }
import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";

// componente que renderiza el formulario para los datos de un usuario
function FormUsuario({ cargando, usuario, handleChange, handleSubmit }) {
  const [muestraPassword, setMuestraPassword] = useState(false);

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel label="Correo electrónico" className="mb-3">
        <Form.Control
          type="text"
          name="correo"
          placeholder="Correo electrónico"
          value={usuario.correo}
					onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel label="Cédula" className="mb-3">
        <Form.Control
          type="text"
          name="cedula"
          placeholder="Cédula"
          value={usuario.cedula}
					onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel label="Nombre" className="mb-3">
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={usuario.nombre}
					onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel label="Apellido" className="mb-3">
        <Form.Control
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={usuario.apellido}
					onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel label="Contraseña" className="mb-3">
        <Form.Control
          type={muestraPassword ? "text" : "password"}
          name="password"
          placeholder="Contraseña"
					onChange={handleChange}
          
        />
        {muestraPassword ? (
          <BsEyeSlash
            className="mostrar-contraseña bg-light"
            onClick={() => setMuestraPassword(!muestraPassword)}
          />
        ) : (
          <BsEye
            className="mostrar-contraseña bg-light"
            onClick={() => setMuestraPassword(!muestraPassword)}
          />
        )}
      </FloatingLabel>

      {cargando ? (
        <div className="w-100 d-flex justify-content-center mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando</span>
          </div>
        </div>
      ) : (
        <Button variant="warning" type="submit" className="w-100 mb-3">
          Continuar
        </Button>
      )}
    </Form>
  );
}

export default FormUsuario;

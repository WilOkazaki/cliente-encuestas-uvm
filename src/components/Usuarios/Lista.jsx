import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Button, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// componente que muestra la lista de los usuarios registrados
function Lista() {
  const { usuario, nocturno } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [cargando, setCargando] = useState(false);

  // estado donde se almacena la lista de usuarios
  const [listaUsuarios, setListaUsuarios] = useState([]);

  // estado para manejar la busqueda
  const [buscar, setBuscar] = useState("");
  const [busquedaActiva, setBusquedaActiva] = useState(false)

  // estados para manejar la paginacion
  const [pagina, setPagina] = useState(0);
  const usuariosPorPagina = 10;
  const paginasVisitadas = pagina * usuariosPorPagina;
  const recuentoPaginas = Math.ceil(listaUsuarios.length / usuariosPorPagina);
  const cambiaPagina = ({ selected }) => setPagina(selected);

  const usuariosMostrados = listaUsuarios
    .slice(paginasVisitadas, paginasVisitadas + usuariosPorPagina)
    .map((item, key) => (
      <tr key={key}>
        <td className="py-1">{item.correo}</td>
        <td className="py-1">{item.cedula}</td>
        <td className="py-1 text-end">
          <Button
            size="sm"
            variant="warning"
            onClick={() => navigate(`/escritorio/perfil/${item._id}`)}
          >
            <FiEdit2 />
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => eliminarUsuario(item._id)}
          >
            <BsTrash />
          </Button>
        </td>
      </tr>
    ));

  const cargaUsuarios = () => {
    // consulta la lista de usuarios
    axios
      .get("http://localhost:3000/api/usuarios/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${usuario.token}`,
        },
      })
      .then(function (response) {
        const usuarios = response.data.filter((item) => item.estado === true);
        setListaUsuarios(usuarios);
        setCargando(false);
      })
      .catch(function (error) {
        setCargando(false);
        console.log(error);
      });
  };

  // funcion para eliminar un usuario
  const eliminarUsuario = (id) => {
    // llamado a la funcion Swal.fire de sweetAlert para la confirmacion de eliminar
    Swal.fire({
      icon: "question",
      title: "Quieres eliminar este usuario?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar.",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setCargando(true);
        // borra el usuario del sistema
        axios
          .delete(`http://localhost:3000/api/usuarios/${id}`, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${usuario.token}`,
            },
          })
          .then(function () {
            Swal.fire("Listo!", "Usuario eliminado", "success");
            cargaUsuarios();
            setCargando(false);
          })
          .catch(function (error) {
            console.log(error);
            setCargando(false);
          });
      } else if (result.isDenied) {
        Swal.fire("El usuario no sera eliminado", "", "info");
      }
    });
  };

  // funcion para realizar la busqueda
  const hacerBusqueda = () => {
    setBusquedaActiva(true);
    setListaUsuarios(listaUsuarios.filter((item) => item.correo === buscar));
  };

  // funcion para cancelar la busqued
  const cancelaBusqueda = () => {
    setBusquedaActiva(false);
    setBuscar("");
    cargaUsuarios();
		setPagina(0)
  };

  useEffect(() => {
    // carga los usuarios antes de hacer el render
    setCargando(true);
    cargaUsuarios();
  }, []);

  return (
    <>
      <h1 className="mt-3 mb-5 text-center text-primary">Usuarios</h1>
      <div className="w-100 mb-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por correo"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={hacerBusqueda}
          >
            <AiOutlineSearch />
          </button>

          {busquedaActiva ? (
            <button
              className="btn btn-danger"
              type="button"
              onClick={cancelaBusqueda}
            >
              X
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {cargando ? (
        <div className="w-100 d-flex justify-content-center mb-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando</span>
          </div>
        </div>
      ) : (
        <>
          {listaUsuarios.length < 1 ? (
            <h3 className={`${nocturno ? "text-light":"text-dark"}`}>No hay usuarios a mostrar</h3>
          ) : (
            <>
              <table className={`striped hover w-100 ${nocturno ? "text-light":"text-dark"}`}>
                <thead>
                  <tr>
                    <th>Correo</th>
                    <th>Cédula</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {usuariosMostrados}
                </tbody>
              </table>

              <nav className={`mt-3 ${busquedaActiva ? "d-none" : ""}`}>
                <ReactPaginate
                  previousLabel="<"
                  nextLabel=">"
                  pageCount={recuentoPaginas}
                  onPageChange={cambiaPagina}
                  containerClassName="pagination w-100 justify-content-center"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageLinkClassName="page-link text-dark"
                  previousLinkClassName="page-link text-dark"
                  nextLinkClassName="page-link text-dark"
                  disabledLinkClassName="disabled"
                  activeClassName="active"
                />
              </nav>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Lista;

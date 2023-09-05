import Swal from "sweetalert2";

export const Paciente = ({ paciente, setPaciente, eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    // const respuesta = confirm('Deseas eliminar este paciente')

    // if( respuesta ) {
    //   eliminarPaciente(id)
    // }

    Swal.fire({
      title: `Quieres eliminar este paciente "${nombre}" ?`,
      text: "No podras revertir el cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `El registro ${nombre} se elimino correctamente`,
          showConfirmButton: false,
          timer: 1500
        })
        // Swal.fire(
        //   'Eliminado!',
        //   `El registro ${nombre} se elimino correctamente`,
        //   'success'
        // )
      }
    })
  }

  return (
    <div className="m-5 my-10 bg-white shadow-lg px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font.normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Dueño:{" "}
        <span className="font.normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font.normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font.normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font.normal normal-case">{sintomas}.</span>
      </p>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

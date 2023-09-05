import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import Header from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {

  const initialState = JSON.parse(localStorage.getItem("pacientes")) ?? [];

  const [pacientes, setPacientes] = useState(initialState);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    console.log("Eliminando paciente", id);
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

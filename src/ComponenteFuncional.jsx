import React, { useEffect } from "react";

const ComponenteFuncional = props => {
  const { nombre, eventoClase } = props;
  const y = `hola: ${nombre}`;

  useEffect(() => {
    eventoClase("alberto");
  }, []);

  return <div>Soy componente funcional | {nombre}</div>;
};

export default ComponenteFuncional;

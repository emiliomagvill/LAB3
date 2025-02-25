import React, { useState } from "react";

const FormWithHooks = () => {
  const [form, setForm] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div>
      <h1>Formulario con Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="matricula" placeholder="Matricula" onChange={handleChange} value={form.matricula} />
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.nombre} />
        <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} value={form.apellidos} />
        <input type="text" name="edad" placeholder="Edad" onChange={handleChange} value={form.edad} />
        <input type="text" name="universidad" placeholder="Universidad" onChange={handleChange} value={form.universidad} />
        <input type="text" name="carrera" placeholder="Carrera" onChange={handleChange} value={form.carrera} />
        <button type="submit">Enviar</button>
      </form>
      <h2>Datos ingresados:</h2>
      <p>Matricula: {form.matricula}</p>
      <p>Nombre: {form.nombre}</p>
      <p>Apellidos: {form.apellidos}</p>
      <p>Edad: {form.edad}</p>
      <p>Universidad: {form.universidad}</p>
      <p>Carrera: {form.carrera}</p>
    </div>
  );
};

export default FormWithHooks;

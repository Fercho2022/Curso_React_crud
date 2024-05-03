import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = ({ currentUser, updateUser }) => {

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        defaultValues:currentUser
    });

    setValue('name', currentUser.name);
    setValue('username', currentUser.username);

    const onSubmit = (data) => {
        console.log(data);
        data.id=currentUser.id
        updateUser(currentUser.id, data)

       //limpiar campos
        reset();
      };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          {...register("name", { required: true })}
          placeholder="Ingrese nombre"
        />
        {errors.name && <div className="invalid-feedback">Name is required</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          id="username"
          {...register("username", { required: true })}
          placeholder="Ingrese nombre de usuario"
        />
        {errors.username && <div className="invalid-feedback">Username is required</div>}
      </div>
      <button type="submit" className="btn btn-primary" >Edit User</button>
    </form>
);
}

export default EditUserForm;
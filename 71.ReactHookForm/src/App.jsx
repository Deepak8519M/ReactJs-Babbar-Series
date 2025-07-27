import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting the Form", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
        </div>
        <br />
        <div>
          <label>Middle Name</label>
          <input type="text" {...register("middleName")} />
        </div>
        <br />
        <div>
          <label>Middle Name</label>
          <input type="text" {...register("lastName")} />
        </div>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;

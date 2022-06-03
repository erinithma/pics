import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserData } from "../../common/types";
import { Api } from "../../common/api";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { set } from "../../reducer/error";

export const Auth = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const onSubmit = (data: UserData) => {
    Api.auth(data)
      .then(() => {
        setError("");
        dispatch(set(false));
        navigate("/admin");
      })
      .catch(() => {
        reset();
        setError("Неверный логин или пароль");
      });
  };

  return (
    <div className={styles.auth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Имя:
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <label>
          Пароль:
          <Controller
            name="password"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <p className={styles.error}>{error}</p>
        <button type="submit">Авторизация</button>
      </form>
    </div>
  );
};

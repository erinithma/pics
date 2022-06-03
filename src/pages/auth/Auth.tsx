import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserData } from "../../common/types";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/status";
import store from "../../redux/store";
import { auth } from "../../redux/auth";
import { getStatus } from "../../redux";

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

  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === "fail") {
      reset();
      setError("Неверный логин или пароль");
    } else {
      setError("");
      if (status === "success") {
        dispatch(set("unset"));
        navigate("/admin");
      }
    }
  }, [status, navigate, dispatch, reset]);

  const onSubmit = (data: UserData) => {
    store.dispatch(auth(data));
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
            render={({ field }) => <input type="password" {...field} />}
          />
        </label>

        <p className={styles.error}>{error}</p>
        <button type="submit">Авторизация</button>
      </form>
    </div>
  );
};

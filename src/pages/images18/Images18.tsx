import { useEffect, useMemo } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteImage18, fetchImages18 } from "../../redux";
import React from "react";
import store from "../../redux/store";
import styles from "./Images18.module.css";
import cx from "classnames";

export const Images18 = () => {
  const params = useParams();
  const images = useSelector(getImages);
  const count = useSelector(getCount);
  const pages = useMemo(() => Math.ceil(count / 20), [count]);
  const page = useMemo(() => Number(params.page || 1), [params]);
  const navigate = useNavigate();

  const remove = (name: string) => {
    store.dispatch(deleteImage18({ name, page }));
  };

  const gotoPage = (page: number) => {
    navigate(`/admin/18/page/${page}`);
  };

  useEffect(() => {
    store.dispatch(fetchImages18(page));
  }, [page]);

  return (
    <>
      <div>
        <NavLink className="nav-link" to={"/admin"}>
          Фотки
        </NavLink>
        <NavLink className="nav-link" to={"/admin/anime"}>
          Аниме
        </NavLink>
        <NavLink className="nav-link" to={"/admin/mem"}>
          Мемы
        </NavLink>
      </div>
      <div className={styles.images}>
        {images.map((i) => (
          <div key={i.name}>
            <img className={styles.img} src={i.url} alt={i.name} />
            <br />
            <button className={styles.button} onClick={() => remove(i.name)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
      <br />
      <div>
        {new Array(pages).fill(null).map((_, i) => (
          <button
            key={i}
            className={cx(styles.page, { [styles.active]: i + 1 === page })}
            onClick={() => gotoPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <br />
    </>
  );
};

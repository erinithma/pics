import { useEffect, useMemo } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteAnime, fetchAnimes } from "../../redux";
import React from "react";
import store from "../../redux/store";
import styles from "./Animes.module.css";
import cx from "classnames";

export const Animes = () => {
  const params = useParams();
  const images = useSelector(getImages);
  const count = useSelector(getCount);
  const pages = useMemo(() => Math.ceil(count / 20), [count]);
  const page = useMemo(() => Number(params.page || 1), [params]);
  const navigate = useNavigate();

  const remove = (name: string) => {
    store.dispatch(deleteAnime({ name, page }));
  };

  const gotoPage = (page: number) => {
    navigate(`/admin/anime/${page}`);
  };

  useEffect(() => {
    store.dispatch(fetchAnimes(page));
  }, [page]);

  return (
    <>
      <div>
        <NavLink className="nav-link" to={"/admin"}>
          Фотки
        </NavLink>
        <NavLink className="nav-link" to={"/admin/18"}>
          Фотки 18+
        </NavLink>
        <NavLink className="nav-link" to={"/admin/mem"}>
          Мем
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

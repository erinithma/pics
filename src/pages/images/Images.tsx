import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteImage, fetchImages } from "../../reducer";
import React from "react";
import store from "../../store";
import styles from "./Images.module.css";
import cx from "classnames";

export const Images = () => {
  const params = useParams();
  const images = useSelector(getImages);
  const count = useSelector(getCount);
  const pages = useMemo(() => Math.ceil(count / 20), [count]);
  const page = useMemo(() => Number(params.page || 1), [params]);
  const navigate = useNavigate();

  const remove = (name: string) => {
    store.dispatch(deleteImage({ name, page }));
  };

  const gotoPage = (page: number) => {
    navigate(`/admin/page/${page}`);
  };

  useEffect(() => {
    store.dispatch(fetchImages(page));
  }, [page]);

  return (
    <>
      <div className={styles.images}>
        {images.map((i) => (
          <div>
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

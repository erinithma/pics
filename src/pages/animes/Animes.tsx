import { useEffect, useMemo } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteAnime, fetchAnimes } from "../../redux";
import React from "react";
import store from "../../redux/store";
import styles from "./Animes.module.css";
import cx from "classnames";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Box } from "@mui/system";

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
      <Box marginBottom={2}>
        <NavLink to={"/admin"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Несортированное
          </Button>
        </NavLink>
        <NavLink to={"/admin/12"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            12+
          </Button>
        </NavLink>
        <NavLink to={"/admin/18"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            18+
          </Button>
        </NavLink>
        <NavLink to={"/admin/mem"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Мемы
          </Button>
        </NavLink>
      </Box>
      <div className={styles.images}>
        {images.map((i) => (
          <div key={i.name}>
            <img className={styles.img} src={i.url} alt={i.name} />
            <br />
            <Button
              onClick={() => remove(i.name)}
              variant="contained"
              color="error"
            >
              <Delete />
            </Button>
          </div>
        ))}
      </div>
      <br />
      <div>
        {new Array(pages).fill(null).map((_, i) => (
          <Button
            key={i}
            variant="outlined"
            color="primary"
            sx={{ m: 1 }}
            disabled={i + 1 === page}
            onClick={() => gotoPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <br />
    </>
  );
};

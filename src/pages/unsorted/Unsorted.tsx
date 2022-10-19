import { useEffect, useMemo } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getImages,
  getCount,
  deleteUnsorted,
  fetchUnsorted,
  move12,
  move18,
  moveAnime,
  moveMem,
} from "../../redux";
import React from "react";
import store from "../../redux/store";
import styles from "./Unsorted.module.css";
import cx from "classnames";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Box } from "@mui/system";

export const Unsorted = () => {
  const params = useParams();
  const images = useSelector(getImages);
  const count = useSelector(getCount);
  const pages = useMemo(() => Math.ceil(count / 20), [count]);
  const page = useMemo(() => Number(params.page || 1), [params]);
  const navigate = useNavigate();

  const remove = (name: string) => {
    store.dispatch(deleteUnsorted({ name, page }));
  };

  const moveTo12 = (name: string) => {
    store.dispatch(move12({ name, page }));
  };

  const moveTo18 = (name: string) => {
    store.dispatch(move18({ name, page }));
  };

  const moveToAnime = (name: string) => {
    store.dispatch(moveAnime({ name, page }));
  };

  const moveToMem = (name: string) => {
    store.dispatch(moveMem({ name, page }));
  };

  const gotoPage = (page: number) => {
    navigate(`/admin/page/${page}`);
  };

  useEffect(() => {
    store.dispatch(fetchUnsorted(page));
  }, [page]);

  return (
    <>
      <Box marginBottom={2}>
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
        <NavLink to={"/admin/anime"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Аниме
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
              className={styles.removeButton}
              onClick={() => remove(i.name)}
              variant="contained"
              color="error"
            >
              <Delete />
            </Button>
            <div className={styles.buttonBlock}>
              <Button
                onClick={() => moveTo12(i.name)}
                variant="contained"
                color="primary"
              >
                12+
              </Button>
              <Button
                onClick={() => moveTo18(i.name)}
                variant="contained"
                color="primary"
              >
                18+
              </Button>
              <Button
                onClick={() => moveToAnime(i.name)}
                variant="contained"
                color="primary"
              >
                Аниме
              </Button>
              <Button
                onClick={() => moveToMem(i.name)}
                variant="contained"
                color="primary"
              >
                Мем
              </Button>
            </div>
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

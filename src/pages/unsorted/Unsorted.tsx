import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import store from "../../redux/store";
import styles from "./Unsorted.module.css";
import { Button } from "@mui/material";
import { Pager } from "../../common/Pager";
import { ImageList } from "../../common/ImageList";

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
      <ImageList images={images} onRemove={remove}>
        {(name) => (
          <div className={styles.buttonBlock}>
            <Button
              onClick={() => moveTo12(name)}
              variant="contained"
              color="primary"
            >
              12+
            </Button>
            <Button
              onClick={() => moveTo18(name)}
              variant="contained"
              color="primary"
            >
              18+
            </Button>
            <Button
              onClick={() => moveToAnime(name)}
              variant="contained"
              color="primary"
            >
              Аниме
            </Button>
            <Button
              onClick={() => moveToMem(name)}
              variant="contained"
              color="primary"
            >
              Мем
            </Button>
          </div>
        )}
      </ImageList>
      <Pager page={page} pages={pages} onGotoPage={gotoPage} />
    </>
  );
};

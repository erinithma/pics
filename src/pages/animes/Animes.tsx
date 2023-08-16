import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteAnime, fetchAnimes } from "../../redux";
import React from "react";
import store from "../../redux/store";
import { ImageList } from "../../common/ImageList";
import { Pager } from "../../common/Pager";

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
      <ImageList images={images} onRemove={remove} />
      <Pager page={page} pages={pages} onGotoPage={gotoPage} />
    </>
  );
};

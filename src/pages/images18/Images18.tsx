import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImages, getCount, deleteImage18, fetchImages18 } from "../../redux";
import store from "../../redux/store";
import { ImageList } from "../../common/ImageList";
import { Pager } from "../../common/Pager";

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
    navigate(`/admin/18plus/${page}`);
  };

  useEffect(() => {
    store.dispatch(fetchImages18(page));
  }, [page]);

  return (
    <>
      <ImageList images={images} onRemove={remove} />
      <Pager page={page} pages={pages} onGotoPage={gotoPage} />
    </>
  );
};

import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../redux";
import { set } from "../redux/status";

export const PageWrap: FC<{ page: ReactElement }> = ({ page }) => {
  const status = useSelector(getStatus);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "fail") {
      dispatch(set("unset"));
      navigate("/admin/login");
    }
  }, [status, navigate, dispatch]);

  return <>{page}</>;
};

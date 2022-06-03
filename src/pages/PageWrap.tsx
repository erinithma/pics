import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStatus } from "../reducer";
import { set } from "../reducer/status";

export const PageWrap: FC<{ children: ReactElement }> = ({ children }) => {
  const status = useSelector(getStatus);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "fail") {
      dispatch(set("unset"));
      navigate("/admin/auth");
    }
  }, [status, navigate, dispatch]);

  return <>{children}</>;
};

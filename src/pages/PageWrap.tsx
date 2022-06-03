import { FC, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isError } from "../reducer";

export const PageWrap: FC<{ children: ReactElement }> = ({ children }) => {
  const error = useSelector(isError);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/admin/auth");
    }
  }, [error, navigate]);

  return <>{children}</>;
};

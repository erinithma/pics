import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface INavProps {
  type: "plus12" | "plus18" | "unsorted" | "mem" | "anime";
}

export const Nav: FC<INavProps> = ({ type }) => {
  return (
    <Box marginBottom={2}>
      {type !== "unsorted" && (
        <NavLink to={"/admin"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Несортированное
          </Button>
        </NavLink>
      )}
      {type !== "plus12" && (
        <NavLink to={"/admin/12"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            12+
          </Button>
        </NavLink>
      )}
      {type !== "plus18" && (
        <NavLink to={"/admin/18"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            18+
          </Button>
        </NavLink>
      )}
      {type !== "anime" && (
        <NavLink to={"/admin/anime"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Аниме
          </Button>
        </NavLink>
      )}
      {type !== "mem" && (
        <NavLink to={"/admin/mem"}>
          <Button variant="contained" color="primary" sx={{ m: 1 }}>
            Мемы
          </Button>
        </NavLink>
      )}
    </Box>
  );
};

import { AppBar, Button, Toolbar } from "@mui/material";
import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

const match = (str: string, pathname: string) =>
  new RegExp(`admin${str ? `/${str}` : ""}(/(\\d+))?$`).test(pathname);

export const Nav: FC = () => {
  const { pathname } = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to={"/admin"}>
          <Button
            variant="contained"
            disabled={match("", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            Несортированное
          </Button>
        </NavLink>
        <NavLink to={"/admin/12plus"}>
          <Button
            variant="contained"
            disabled={match("12plus", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            12+
          </Button>
        </NavLink>
        <NavLink to={"/admin/18plus"}>
          <Button
            variant="contained"
            disabled={match("18plus", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            18+
          </Button>
        </NavLink>
        <NavLink to={"/admin/anime"}>
          <Button
            variant="contained"
            disabled={match("anime", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            Аниме
          </Button>
        </NavLink>

        <NavLink to={"/admin/mem"}>
          <Button
            variant="contained"
            disabled={match("mem", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            Мемы
          </Button>
        </NavLink>

        <NavLink to={"/admin/apart"}>
          <Button
            variant="contained"
            disabled={match("apart", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            Деепричастия
          </Button>
        </NavLink>

        <NavLink to={"/admin/adverb"}>
          <Button
            variant="contained"
            disabled={match("adverb", pathname)}
            color="secondary"
            sx={{ m: 1 }}
          >
            Наречия
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

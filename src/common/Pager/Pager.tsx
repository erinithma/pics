import { Button } from "@mui/material";
import { FC } from "react";
import styles from "./Pager.module.css";

interface PagerProps {
  pages: number;
  page: number;
  onGotoPage: (page: number) => void;
}

export const Pager: FC<PagerProps> = ({ pages, page, onGotoPage }) => (
  <div className={styles.pager}>
    {new Array(pages).fill(0).map((_, i) => (
      <Button
        key={i}
        variant="outlined"
        color="primary"
        sx={{ m: 1 }}
        disabled={i + 1 === page}
        onClick={() => onGotoPage(i + 1)}
      >
        {i + 1}
      </Button>
    ))}
  </div>
);

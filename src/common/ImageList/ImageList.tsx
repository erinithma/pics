import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { FC } from "react";
import styles from "./ImageList.module.css";

interface ImageListProps {
  images: any[];
  onRemove: (name: string) => void;
  children?: (name: string) => React.ReactNode;
}

export const ImageList: FC<ImageListProps> = ({
  images,
  onRemove,
  children,
}) => {
  return (
    <div className={styles.images}>
      {images.map((i) => (
        <div key={i.name}>
          <img className={styles.img} src={i.url} alt={i.name} />
          <br />
          <Button
            onClick={() => onRemove(i.name)}
            variant="contained"
            color="error"
          >
            <Delete />
          </Button>
          {children && children(i.name)}
        </div>
      ))}
    </div>
  );
};

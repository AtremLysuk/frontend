import clsx from "clsx";
import styles from "./ProductsPage.module.scss";

type Props = {
  className?: string;
};

export default function ProductsPage({ className }: Props) {
  return (
    <div className={clsx(styles.root, className)}>
      
    </div>
  );
}

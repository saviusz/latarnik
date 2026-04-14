import style from "./style.module.css";
import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { Button as BaseButton } from "@base-ui/react";

interface Props {
  style?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}

function Button({ className, onClick, children }: PropsWithChildren<Props>) {
  return (
    <BaseButton className={clsx(style.button, className)} onClick={onClick}>
      {children}
    </BaseButton>
  );
}

export default Button;

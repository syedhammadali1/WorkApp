
import { FC } from "react";
interface Props {
  id: any
}


export const handleSectionNavigation: FC<Props> = ({ id }: Props) => {
  const element = document.getElementById(id);
  const offset = 45;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element?.getBoundingClientRect().top ?? 0;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  return null;
};

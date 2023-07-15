import { Card } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const CardFormUI = ({ children }: Props) => {
  return <Card sx={{ background: "red" }}>{children}</Card>;
};

export default CardFormUI;

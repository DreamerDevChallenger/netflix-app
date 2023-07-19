import { Card } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  isHidden?: boolean;
  className: any;
}

const CardFormUI = ({ children, className }: Props) => {
  return (
    <Card
      className={className}
      sx={{
        background: `rgba(0,0,0,0.7) !important`,
        alignSelf: "center",
        padding: "1em 2em ",

        gap: "20px",
      }}
    >
      {children}
    </Card>
  );
};

export default CardFormUI;

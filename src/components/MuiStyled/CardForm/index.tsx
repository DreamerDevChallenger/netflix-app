import { Card } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  isHidden?: boolean;
  props: any;
}

const CardFormUI = (props: Props) => {
  return (
    <Card
      {...props}
      sx={{
        background: `rgba(0,0,0,0.7) !important`,
        alignSelf: "center",
        padding: "1em 2em ",

        gap: "20px",
      }}
    >
      {props.children}
    </Card>
  );
};

export default CardFormUI;

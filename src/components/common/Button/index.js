import { Button } from "@chakra-ui/react";

function CommonButton({ name, value, onClick, ...props }) {
  return (
    <Button
      name={name ?? ""}
      onClick={onClick}
      {...props}
      _focus={{ boxShadow: "none" }}
    >
      {value}
    </Button>
  );
}

export default CommonButton;

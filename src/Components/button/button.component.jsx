import { CustomButton } from "./button.styles";

const Button = ({ ...otherProps }) => {
  return <CustomButton {...otherProps}></CustomButton>;
};

export default Button;

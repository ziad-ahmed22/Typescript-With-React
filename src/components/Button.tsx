// type ButtonProps = {
//   handleClick: () => void;
// };

// const Button = (props: ButtonProps) => {
//   return <button onClick={props.handleClick}>Button</button>;
// };

// export default Button;

// ===================

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={(e) => props.handleClick(e, 3)}>Button</button>;
};

export default Button;

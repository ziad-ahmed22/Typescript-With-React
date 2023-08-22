type GreatingProps = {
  str: string;
  num: number;
  bol: boolean;
  obj: { fname: string; lname: string };

  numArr: number[];
  strArr: string[];
  bolOrNum: boolean | number;
  yesOrNo: "Yes" | "No";
  // arrOfObj: objType[];
  arrOfObj: {
    id: number;
    title: string;
  }[];
  onClick: () => void;
  onClick2: (val: string) => void;
  optional?: number;
};

// type objType = {
//   id: number;
//   title: string;
// };

// const Greating: React.FC<GreatingProps> = (props): JSX.Element => {
const Greating = (props: GreatingProps): JSX.Element => {
  const handleClick = () => {
    props.onClick();
    props.onClick2("str");
  };

  return (
    <div onClick={handleClick}>
      Hello {props.str}
      <br />
      {props.num}
      <br />
      {+props.bol}
      {props.bol ? " true" : " false"}
      <br />
      {props.obj.fname}
      <br />
      {props.numArr[0]}
      <br />
      {props.strArr[0]}
      <br />
      {props.bolOrNum}
      <br />
      {props.yesOrNo}
      <br />
      {props.arrOfObj[0].title}
    </div>
  );
};

// const Greating = ({ str, yesOrNo }: GreatingProps) => {
//   return (
//     <div>
//       Hello {str} {yesOrNo}
//     </div>
//   );
// };

// const Greating = ({ str, yesOrNo }: { str: string, yesOrNo: "Yes" | "No" }) => {
//   return <div>Hello {str} {yesOrNo}</div>;
// };

export default Greating;

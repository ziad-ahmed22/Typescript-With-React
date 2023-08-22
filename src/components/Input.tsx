type InputProps = {
  hanhleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return <input type="text" onChange={props.hanhleChange}></input>;
  // return <input type="text" onChange={(e)=>props.hanhleChange(e)}></input>;
};

export default Input;

// =========================

// // without props
// const Input = () => {
//   const hanhleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.value);
//   };
//   return <input type="text" onChange={hanhleChange}></input>;
// };

// export default Input;

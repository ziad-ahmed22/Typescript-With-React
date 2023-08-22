type HeadingProps = {
  children: string;
  num?: number;
};

// const Heading = (props: HeadingProps) => {
//   const { num = 0 } = props;

//   return (
//     <>
//       <h2>{props.children}</h2>
//       <h3>{num}</h3>
//     </>
//   );
// };

const Heading = ({ children, num = 0 }: HeadingProps) => {
  return (
    <div>
      <span>{children}</span>
      <span> {num}</span>
    </div>
  );
};

export default Heading;

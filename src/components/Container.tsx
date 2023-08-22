// // simple way

// const Container = (props) => {
//   return <div style={props.styles}>Container Style</div>;
// };

// export default Container;

// ==========================

type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Container Style</div>;
};

export default Container;

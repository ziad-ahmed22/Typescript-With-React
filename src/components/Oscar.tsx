type OscarProps = {
  children: React.ReactNode; // acept string , element , component, anything
  // children: React.ReactElement;
};

const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};

export default Oscar;

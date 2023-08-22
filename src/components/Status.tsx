type StatusProps = {
  statusMsg: "loading" | "success" | "error";
};

const Status = ({ statusMsg }: StatusProps): JSX.Element => {
  let msg;

  if (statusMsg === "loading") {
    msg = "Loading...";
  } else if (statusMsg === "success") {
    msg = "Data fetched successfuly";
  } else if (statusMsg === "error") {
    msg = "Error fetching data";
  }

  return <div>statusMsg - {msg}</div>;
};

export default Status;

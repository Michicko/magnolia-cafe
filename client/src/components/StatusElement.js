const StatusElement = ({ status }) => {
  return (
    <span
      className={
        status === "completed"
          ? "success"
          : status === "failed"
          ? "fail"
          : status
      }
    >
      {status}
    </span>
  );
};

export default StatusElement;

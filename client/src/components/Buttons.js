const Buttons = ({ type, text, theme }) => {
  if (type === "create") {
    return <button className="button">{text}</button>;
  }

  return <button>button</button>;
};

export default Buttons;

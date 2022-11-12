const DateGroupInput = () => {
  return (
    <div className="form__group date">
      <input
        type="date"
        name="date-from"
        id="date-from"
        className="form__group-input date"
      />
      <span>-</span>
      <input
        type="date"
        name="date-to"
        id="date-to"
        className="form__group-input date"
      />
    </div>
  );
};

export default DateGroupInput;

const CpTopbar = ({ heading }) => {
  return (
    <div className="cp-root__topbar">
      <h2 className="cp-root__topbar-heading">{heading}</h2>
      <div className="cp-root__topbar-profile">
        <img
          src={require("../assets/images/avater.png")}
          alt="user"
          className="cp-root__topbar-img"
        />
        <div>
          <h4>John Doe</h4>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default CpTopbar;

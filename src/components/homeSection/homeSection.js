import "./homeSection.css";

const HomeSection = ({ titleSection }) => {
  return (
    <div>
      <div className="title-section">
        <p className="title">{titleSection}</p>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSection;

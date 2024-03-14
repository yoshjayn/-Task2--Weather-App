import Tile from "./Tile";

const Content = ({ heading, info, children }) => {
  return (
    <Tile>
      <div className="flex flex-row justify-between mb-10">
        <div className="label-2">{heading}</div> {info ? info : null}
      </div>
      <div>{children}</div>
    </Tile>
  );
};

export default Content;
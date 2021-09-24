export default function ScreenController(props) {
  const fakeEvent = (keyCode) => ({
    keyCode,
    preventDefault: () => {},
  });

  return (
    <>
      <h3 id="controller-title">Controller</h3>
      <div id="controller">
        <div id="up" onClick={(e) => props.keyPress(fakeEvent(87))}>
          
          <div className="up-arrow"></div>
        </div>
        <div id="right" onClick={(e) => props.keyPress(fakeEvent(68))}>
          
          <div className="right-arrow"></div>
        </div>
        <div id="left" onClick={(e) => props.keyPress(fakeEvent(65))}>
          
          <div className="left-arrow"></div>
        </div>
        <div id="down" onClick={(e) => props.keyPress(fakeEvent(83))}>
          
          <div className="down-arrow"></div>
        </div>
      </div>
    </>
  );
}

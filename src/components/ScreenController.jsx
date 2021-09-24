export default function ScreenController(props) {
    const fakeEvent = (keyCode) => ({
        keyCode, 
        preventDefault: () => {} });
    
    return (
        <>
        <h3 id="controller-title">Controller</h3>
        <div id="controller">        
        <div id="up" onClick={(e)=> props.keyPress(fakeEvent(87))}>up</div>
        <div id="right" onClick={(e)=> props.keyPress(fakeEvent(68))}>right</div>
        <div id="left" onClick={(e)=> props.keyPress(fakeEvent(65))}>left</div>
        <div id="down" onClick={(e)=> props.keyPress(fakeEvent(83))}>down</div>        
        </div>
        </>
    )
}
export default function ScreenController() {
    const fakeEvent = {
        keyCode: 37, 
        preventDefault: () => console.log("no") }
    
    return (
        <>
        <h3 id="controller-title">Controller</h3>
        <div id="controller">        
        <div id="up" onClick={(e)=> onkeypress(fakeEvent)}>up</div>
        <div id="right">right</div>
        <div id="left">left</div>
        <div id="down">down</div>        
        </div>
        </>
    )
}
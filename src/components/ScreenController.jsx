export default function ScreenController() {
    const fakeEvent = {
        keyCode: 37, 
        preventDefault: () => console.log("no") }
    
    return (
        <div id="controller">
        <div id="up" onClick={(e)=> onkeypress(fakeEvent)}></div>
        <div id="right"></div>
        <div id="left"></div>
        <div id="down"></div>        
        </div>
    )
}
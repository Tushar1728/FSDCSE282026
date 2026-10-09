const container=document.getElementById('root');
//console.log(container)
const root=ReactDOM.createRoot(container);
const h21=<h2>Welcome to JSX</h2>
const h22=<h1>ABES Engineering College</h1>
const warpper=<div style={{border:'2px solid red'}}>{h21}{h22}</div>
const div=
<div style={{}}>
{warpper}
<h2>Heyyy..using JSX</h2>
<img></img>
</div>

root.render(div);
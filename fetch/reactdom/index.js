const container=document.getElementById('root');
console.log(container)
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'Welcome to React');
const h1=React.createElement('h1',{style:{color:'brown',backgroundColor:'white'}},"ABES Engineering College");
const img=React.createElement('img',{src:'', style:{height:'100px', width:'100px', borderRadius:'50%'}});
const div=React.createElement('div',{style:{border:'2px dotted black', height:'400px', width:'400px'}},img,h1,h2);
const h21=<h2>Welcome to JSX</h2>
root.render(h21);
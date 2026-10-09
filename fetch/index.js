const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(button)
console.log(root)

async function getData(){
    // alert("hiii")

  const serverData=  await fetch('https://fakestoreapi.com/products')
                  const jsonData=await serverData.json();
         root.innerHTML=`<h2 style=color:red>${jsonData[0].title}</h2>`
//   console.log(jsonData[0].title);
}

button.addEventListener('click',getData);
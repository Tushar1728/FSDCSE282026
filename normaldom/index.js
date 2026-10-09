const root=document.getElementById('root')
const button=document.getElementById('btn')
console.log(root)
//    const h2=document.createElement('h2');
   const h1=document.createElement('h1');
//    const img=document.createElement('img');
   const loader=document.createElement('h1');
  
async function showData(){
    try{
    loader.innerHTML='<h2>Loading data...</h2>';
    root.appendChild(loader);
     const serverData=  await fetch('https://fakestoreapi.com/products')
    const jsonData=await serverData.json();

    let table=`<table border='2px'>
               ${
              jsonData.map((ele)=>(
                  `<tr>
                  <td><img src=${ele.image} height=200 width=200></img></td>
                  <td>${ele.id}</td>
                  <td>${ele.title}</td>
                  <td>${ele.price}</td>
                  </tr>`
              ))
               }
              </table>`
    //console.log(jsonData)
    //  h1.innerHTML=`<h2 style=color:red>${jsonData[0].title}</h2>`
    h1.innerHTML=table;
    // h2.innerText='Welcome to DOM manipulation';
    // h1.innerHTML='ABES Engineering College';
    // img.src='';
    // img.setAttribute('height',200);
    // img.setAttribute('width',200);
    // root.appendChild(h2);
       root.appendChild(h1);
    // root.appendChild(img);
    }catch(e){
        console.log(e)
    }
    finally{
     root.removeChild(loader);
    }
// alert("hiii");
}

button.addEventListener('click',showData);
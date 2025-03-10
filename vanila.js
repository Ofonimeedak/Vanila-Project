
async function getProduct(){

try { 
    const requestApi = await fetch("https://fakestoreapi.com/products");
    console.log( " initial request", requestApi);
    
    const requestApij = await requestApi.json();
    
   
    const productData = requestApij.slice(0,6);
    console.log(requestApij);

    const productCard = document.getElementById("dCard");
     let myCard =" ";
     
     productData.map((item)=> {
        myCard +=` 
        <div class="pcard">
          <div class="im">
            <img src="${item.image}"/>
            <h3>${item.title}</h3>
          </div>
          <div class="amount">
            <h3>Amount:</h3>
            <p>${item.price}</p>
          </div>
          <div class="category">
            <h3>Category: </h3>
            <p>${item.category}</p>
          </div>
          <div class="description">
              <h3>Description:</h3>
            <p>${item.description.slice(0, 50)}</p>
            </div>
          </div>
        `;
     });

     productCard.innerHTML= myCard;
     
} catch (error) { console.log("Product error:", error);

}
}
getProduct();

// /To open and close the mobile navigation bar

const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function openAndClose(){
  if(myNavBar.style.display==="flex"){
    myNavBar.style.display="none"
  }

  else{
    myNavBar.style.display="flex"
  }
}

openBtn.addEventListener('click', openAndClose);
closeBtn.addEventListener('click',openAndClose);
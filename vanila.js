
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
        <div class="im">
          <img src=${item.image}/>
          <h3>Title:</h3>
        </div>
        <div class="amount">
          <h3>Amount:</h3>
          <p>${item.amount}</p>
        </div>
        <div class="category">
          <h3>Category: </h3>
          <p>${item.category}</p>
        </div>
        <div class="description">
            <h3>Description:</h3>
          <p>${item.description}</p>
        </div>

        `;
     });

     productCard.innerHTML= myCard;
     
} catch (error) { console.log("Product error:", error);

}
}
getProduct();
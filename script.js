document.body.innerHTML = `<div class="heading-container">
<h1> Dogs List</h1> </div>

<div id="mainContainer"  class="main-container"> </div>

`;

const getData = async () => {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogs = await data.json();
    // console.log(typeof (dogs))
    mainContainer.innerHTML = "";

    displayData(dogs);



  } catch (error) {
    console.log(error);
  }
};

getData();

const displayData = (obj) => {
  mainContainer.innerHTML += `
    <div id="subcont" class="container">
   <div i> <span> Dog ID=</div>
   <div id="dog_id">${obj.message}</div>
      <p class="para blue"> Created At=<span> ${obj.status}</span></p>
              <img id="myImg" src="https://images.dog.ceo/breeds/mix/Annabelle12.jpeg" alt=""  >
   
    `;
};



const videoBox = document.getElementById("videoBox");
const inputId = document.getElementById("inputId");
const video_teg = document.getElementsByClassName("video-teg");
let index = 0;
let massiv = 0;
let saqlash1 = "";
let saqlash_input = "";
let saqlash = "";

const checkvideo = (video_name) => {
//  for (const element of video_teg) {
    
//  }

//  return false;
}

const addVideo = () => {
    const input = inputId.value

    
    if(saqlash.includes(input)) {
        console.log("bor");
        alert("bu video mavjud");
        return;
    }
    saqlash += +" "+ input;
    if(input == "")   return;
    
   if(input.includes("https")){
    videoBox.innerHTML += `
        <div class="videoo" id="${index}">
        <iframe width="160" height="160" src="${input}"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button id="btn" onclick= "deletevideo('${index++}')"><img src="./ochirish.jpg" alt=""></button>
        </div>
    `;
    
   }

    else {
        console.log("kirdi");
        videoBox.innerHTML += `
        <div class="videoo" id="${index}">
            <video controls width="160px" height="160px" loop autoplay muted>
                <source src="${input}" type="">
                Sizning brauzeringiz qollab quvvatlamaydi...
            </video>
            <button id="btn" onclick= "deletevideo('${index++}')"><img src="./ochirish.jpg" alt=""></button>
        </div>
    `;

   };
   

};

// 1ta video saqlash1
// saqllash hamma narsani saqlab borvotti owani saqlash_inputga berib qoyilvotti


    const deletevideo = (id) => {
        saqlash1 = videoBox.innerHTML;
        saqlash_input = saqlash;
        const element = document.getElementById(id);
        element.remove();
    };


  const remove = () =>{
    saqlash_input = saqlash;
    saqlash1 =videoBox.innerHTML;
    videoBox.innerHTML = "";
    saqlash = "";
}

const back = () => {
    videoBox.innerHTML = saqlash1;
    saqlash = saqlash_input;
};

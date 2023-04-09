const input = document.getElementById('numofword');

const container = document.querySelector('.paracontainer');

const generateWord = (n)=>{
    let text ='';

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( let i=0 ; i < n ; ++i ){

        const random = (Math.random()*(letters.length-1)).toFixed(0);
        text += letters[random];           
    }

    return text;
}


const generatePara = ()=>{
   let numofwords = input.value;

   let data = "";

   for( let i=0 ; i<numofwords ; ++i){

           const randomNum = (Math.random()*15).toFixed(0);

           data += generateWord(randomNum).toLowerCase(); // toLowercase()  for small letters
           data += " ";

   }
   

    const para = document.createElement('p');
    para.innerText = data;
    para.setAttribute('class','paras');
    container.append(para);
} // Take Number as Input from Client and Generate paragraph








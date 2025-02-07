import {  isValidurl } from './checkURL'


// const serverURL = 'https://localhost:8000/api'

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const url = document.getElementById('name').value;
  
    if(isValidurl(url)){


        try{
            const response =  await fetch("http://localhost:8082/api",
                {
                    method:'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({url:url}),

                }
            );
          const data = await response.json();

          
          //console.log(data.sentence_list[1]);

          document.getElementById("text").innerHTML = data.sentence_list[0].text;
          document.getElementById("score-tag").innerHTML = data.sentence_list[0].score-tag;
          document.getElementById("aggreement").innerHTML = data.sentence_list[0].agreement;
          document.getElementById("confidence").innerHTML = data.sentence_list[0].confidence;


        }catch(e){
            console.log("Error",e);
        }

    }else {
        alert("please enter valid URL!!");

    }

    
}

// Export the handleSubmit function
export { handleSubmit };


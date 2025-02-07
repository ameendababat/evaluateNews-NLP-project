// js files
import { handleSubmit } from './js/formHandler'
import {isValidurl} from './js/checkURL'

// sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'



// alert("I EXIST")

const submentBtn = document.getElementById('submitButton');
submentBtn.addEventListener('click',handleSubmit);

export{handleSubmit};


export function textTyping() {

const text = "Напишите нам о вашем проекте и мы вам поможем, предотвратить его в жизнь>";
    let index = 0;
    const speed = 50; // скорость печатания в миллисекундах

    function typeWriter() {
      if (index < text.length) {
        const textElement = document.getElementById("buyButton");
        
        textElement.innerHTML += text.charAt(index);
        index++;
        // Перемещаем курсор после добавленного текста
        textElement.appendChild(document.querySelector('.cursor'));
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
	 const formType = `

    <div class='form-div'>
      <div class='form-1h-div'>
         <h3> @Form 1326</h3>
      </div>
        <p>Заполните пожалуйста форму:</p>

      <form>
        <input value='Введит любой контакт' class='nird-form' type='text'>
        <textarea value='Введите краткое описание' style='height:80px;border-radius:10px;' class='nird-form'>
 ></textarea> 
        <input type = 'submit'value='Принять'>
      </form>
    </div>
    
    <style>
    body{
      display:flex;
      justefy-content:center;
      aling-items:center;
    }

    .form-div{
      width:200px;
      height:300px;
      background-color: grey;
      border-radius:10px;
      padding-left:20px;

    }
    .form-1h-div{
     background-color:darkgrey;
    }

    .form-div input{
     margin-bottom:10px;
    }

    .form-div p{
     font-size:10px;
    } 

    .nird-form{
      background-color:grey;
      border:1px solid darkgrey;
      height:15px;
      border-radius:20px;
      box-shadow: 2px 2px 1px 3px #000 inset;
      font-size:9px;
      width:150px
    }
    .form-div input[type=submit]{
      display:block;
      width:80px;
      height:30px;
      background-color:black;
      color:white;
      align-content: center;
      margin-top:20px;
      
    }
.form-div form{
      display:flex;
      justefy-content:center;
      aling-items:center;
      flex-direction: column;
      align-content:center;
    }
    </style>
`
  }

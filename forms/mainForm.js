// const nodemailer = require("nodemailer");
// require('dotenv').config()
//
//
//
// class mailSend{
// constructor(){
//   this.mail = process.env.MAIL_USER
//   this.pass = process.env.MAIL_PASS
// }
//
// sendForm(titleForm, contactInfo, bodyForm){
// const yandex = nodemailer.createTransport({
//   host: 'smrp.yandex.ru',
//   port: 465,
//   secure: true,
//   auth: {
//     user: this.mail,
//     pass: this.pass
//   },
// });
// }

// const mailItSelf = {
//   from:this.mail,
//   to:this.mail,
//   subject: 'Новая работа',
//   text: `Опмисание:${titleForm} \n
//   Контактная: ${contactInfo} \n
//   Суть: ${bodyForm} \n`
// };

// sendForm.sendMail(mailItSelf,  (error, info) => {
//             if (error) {
//                 console.log('Ошибка:', error);
//             } else {
//                 console.log('Письмо отправлено:', info.messageId);
//             }
//         } );
// }



export const formTypeOne = `
      <div class='form-1h-div'>
         <h3> @Form 1326</h3>
      </div>
        <p>Заполните пожалуйста форму:</p>

      <form action="http://localhost:3000/formSend" method="POST">
      <div class='nird-form'style='width: 300px;'>	<input value='Введит любой контакт'  type='text'></div>
       <div class='nird-form'style='width: 300px;height:100px;margin:10px 0px 10px 0px;'> <textarea value='Введите краткое описание' style='height:100px;border-radius:10px;' >
 ></textarea></div>
        <input class='portfolio-menu-buttons' style='margin:0 0 0 0; position: relative;' type = 'submit'value='Принять'> </form>
    
    <style>
    body{
      display:flex;
      justefy-content:center;
      aling-items:center;
    }

    .form-1h-div{
     background-color:gray;
     padding-right:200px
    }

    .form-1h-div h3{
     font-size: 40px;
     color:green;
    }
    .styleCodeModel input{
     margin-bottom:10px;
     width:300px;
    }

    .styleCodeModel textarea{
    background-color:gray;
     margin-bottom:10px;
     width:400px;
    }
  .styleCodeModel p{
     font-size:20px;
     color:green;
    } 
    .styleCodeModel form{
	display:flex;
    flex-direction: column;
    height: 300px;
	justify-content:center;
	align-items:center;
    }

    .nird-form{
	    display:flex;
	    flex-shrink:0;
	    position:relative;
      background-color:grey;
      border:1px solid darkgrey;
      height:25px;
      border-radius:20px;
      box-shadow: 2px 2px 1px 3px #000 inset;
      font-size:9px;
      width:150px
    }

    .styleCodeModel input[type=text]{
	border:none;
      background-color:rgba(0,0,0,0);
      margin: 0px 10px 0px 10px;
      height:20px;
      width:300px
    }

    .styleCodeModel input[type=submit]{
      display:block;
      width:200px;
      height:60px;
      background-color:black;
      color:white;
      align-content: center;
      margin-top:20px;
     position:relative;
    }

    .styleCodeModel input[type=submit]:hover{
	background-color:grey;
	color:blue;
    }
    </style>
`

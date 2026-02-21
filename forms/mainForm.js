export const formTypeOne = `
      <div class='form-header'>
         <h3>@Form 1326</h3>
      </div>
      <p class='form-subtitle'>Заполните пожалуйста форму:</p>

      <form action="http://localhost:3000/formSend" method="POST">
        <div class='form-group'>
          <input type='text' id='contact' name='contact' placeholder='Email, телефон или Telegram' required>
          <span class='focus-line'></span>
        </div>
        
        <div class='form-group'>
          <textarea id='description' name='description' placeholder='Кратко опишите вашу задачу...' required></textarea>
          <span class='focus-line'></span>
        </div>
        
        <button type='submit' class='submit-btn'>
          Отправить
          <svg class='arrow-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5'>
            <path d='M5 12h14M12 5l7 7-7 7'/>
          </svg>
        </button>
      </form>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

    .styleCodeModel {
      font-family: 'Montserrat', sans-serif;
    }

    .form-header{
      background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
      padding: 18px 30px;
      border-radius: 16px;
      margin-bottom: 8px;
      box-shadow: 0 8px 25px rgba(0, 255, 136, 0.35);
    }

    .form-header h3{
      font-size: 36px;
      font-weight: 700;
      color: #0d1f14;
      margin: 0;
      letter-spacing: -1px;
    }

    .form-subtitle{
      font-size: 15px;
      color: #888;
      margin: 0 0 28px 0;
      text-align: center;
    }

    .styleCodeModel form{
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .form-group{
      position: relative;
      width: 340px;
    }

    .form-group label{
      position: absolute;
      left: 16px;
      top: 14px;
      font-size: 13px;
      font-weight: 500;
      color: #666;
      pointer-events: none;
      transition: all 0.25s ease;
      background: transparent;
      padding: 0 5px;
    }

    .form-group input,
    .form-group textarea{
      width: 100%;
      padding: 14px 16px;
      font-size: 15px;
      font-family: inherit;
      color: #fff;
      background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
      border: 1px solid #333;
      border-radius: 12px;
      outline: none;
      resize: none;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input{
      height: 48px;
    }

    .form-group textarea{
      height: 110px;
    }

    .form-group input:focus,
    .form-group textarea:focus{
      border-color: #00ff88;
      box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.12), 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .form-group input:focus ~ label,
    .form-group input:not(:placeholder-shown) ~ label,
    .form-group textarea:focus ~ label,
    .form-group textarea:not(:placeholder-shown) ~ label{
      top: -10px;
      left: 12px;
      font-size: 11px;
      color: #00ff88;
      background: #0d0d0d;
      font-weight: 600;
    }

    .focus-line{
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #00ff88, transparent);
      transition: all 0.4s ease;
      transform: translateX(-50%);
      border-radius: 0 0 12px 12px;
    }

    .form-group input:focus ~ .focus-line,
    .form-group textarea:focus ~ .focus-line{
      width: 100%;
    }

    .submit-btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 240px;
      height: 56px;
      background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
      color: #0d1f14;
      border: none;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      margin: 8px auto 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 6px 20px rgba(0, 255, 136, 0.35);
      position: relative;
      overflow: hidden;
    }

    .submit-btn::before{
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s ease;
    }

    .submit-btn:hover::before{
      left: 100%;
    }

    .submit-btn:hover{
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 255, 136, 0.45);
    }

    .submit-btn:active{
      transform: translateY(-1px);
    }

    .arrow-icon{
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    .submit-btn:hover .arrow-icon{
      transform: translateX(5px);
    }
    </style>
`

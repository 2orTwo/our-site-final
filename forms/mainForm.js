export const formTypeOne = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.styleCodeModel {
  font-family: 'Montserrat', sans-serif;
  max-width: 400px;
  margin: 0 auto;
}

.form-header {
  background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
  padding: 18px 30px;
  border-radius: 16px;
  margin-bottom: 8px;
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.35);
}

.form-header h3 {
  font-size: 36px;
  font-weight: 700;
  color: #0d1f14;
  margin: 0;
  letter-spacing: -1px;
}

.form-subtitle {
  font-size: 15px;
  color: #888;
  margin: 0 0 28px 0;
  text-align: center;
}

.styleCodeModel form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-group {
  position: relative;
  width: 340px;
}

.form-group input,
.form-group textarea {
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

.form-group input { height: 48px; }
.form-group textarea { height: 110px; }

.form-group input:focus,
.form-group textarea:focus {
  border-color: #00ff88;
  box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.12);
}

.submit-btn {
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
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.35);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.45);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.submit-btn:hover .arrow-icon {
  transform: translateX(5px);
}

.form-status {
  margin-top: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  display: none;
}

.form-status.show { display: block; }
.form-status.success {
  background: rgba(0, 255, 136, 0.15);
  color: #00ff88;
  border: 1px solid rgba(0, 255, 136, 0.3);
}
.form-status.error {
  background: rgba(255, 82, 82, 0.15);
  color: #ff5252;
  border: 1px solid rgba(255, 82, 82, 0.3);
}
</style>

<div class='form-header'>
  <h3>@Form 1326</h3>
</div>
<p class='form-subtitle'>Заполните пожалуйста форму:</p>

<form id='mainForm'>
  <div class='form-group'>
    <input type='text' id='contact' placeholder='Email, телефон или Telegram' required>
  </div>

  <div class='form-group'>
    <textarea id='description' placeholder='Кратко опишите вашу задачу...' required></textarea>
  </div>

  <button type='submit' class='submit-btn'>
    Отправить
    <svg class='arrow-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5'>
      <path d='M5 12h14M12 5l7 7-7 7'/>
    </svg>
  </button>
</form>

<div id='formStatus' class='form-status'></div>
`

export function initFormHandler(closeCallback) {
  const form = document.getElementById('mainForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = e.target.querySelector('.submit-btn');
    const status = document.getElementById('formStatus');

    btn.disabled = true;
    btn.textContent = 'Отправка...';
    status.className = 'form-status';

    try {
      const res = await fetch('/formSend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: document.getElementById('contact').value,
          description: document.getElementById('description').value
        })
      });

      const data = await res.json();

      status.textContent = data.success ? '✓ Отправлено!' : '✗ ' + data.error;
      status.className = 'form-status show ' + (data.success ? 'success' : 'error');

      if (data.success) {
        form.reset();
        // Закрываем модальное окно через небольшую задержку
        setTimeout(() => {
          if (closeCallback) closeCallback();
        }, 1000);
      }
    } catch (err) {
      console.error('Ошибка отправки:', err);
      status.textContent = '✗ Ошибка соединения';
      status.className = 'form-status show error';
    } finally {
      btn.disabled = false;
      btn.innerHTML = 'Отправить<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    }
  });
}

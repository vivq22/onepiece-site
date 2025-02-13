// Simulación de envío de mensajes en el chat (sin backend)
document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();
    if(username !== '' && message !== '') {
      const chatBox = document.querySelector('.chat-box');
      const newMessage = document.createElement('div');
      newMessage.className = 'chat-message text-white';
      newMessage.innerHTML = `<strong>${username}:</strong> ${message}`;
      chatBox.appendChild(newMessage);
      document.getElementById('chatForm').reset();
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
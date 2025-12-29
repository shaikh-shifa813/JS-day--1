const notifications = document.querySelectorAll('.notification');

notifications.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle read/unread state
    if(item.classList.contains('unread')){
      item.classList.remove('unread'); 
      item.classList.add('read');
    } else {
      item.classList.remove('read');
      item.classList.add('unread');
    }
  });
});

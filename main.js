//SIDEBAR

const menuItem = document.querySelectorAll('.menu-item');
//Messages
const messageNotification=document.querySelector('#messages-notification');
const messages =document.querySelector('.messages')
const message=messages.querySelectorAll('.message')
const messageSearch=document.querySelector('#message-search')
// Theme
const theme=document.querySelector('#theme');
const themeMode=document.querySelector('.customize-theme')
const fontSize=document.querySelector('.chosse-size')
var root=document.querySelector(':root');
const changeActiveItem=()=>{
    menuItem.forEach(item => {
        item.classList.remove('active');
      });
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
      // Remove "active" class from all menu items
        changeActiveItem();
  
      // Add "active" class to the clicked menu item
      item.classList.add('active');
      if(item.id != 'notifications'){
        document.querySelector('.notification-popup').
        style.display = 'none';
        document.querySelector('#notifications .notification-count').style.display='block'

      }
      else{
        document.querySelector('.notification-popup').
        style.display = 'block';
        document.querySelector('#notifications .notification-count').style.display='none'
      }
    });
  });
//   -----------------------Messges--------------------

    //Search chats
    const searchMessage=()=>{
        const val = messageSearch.value.toLowerCase();
        // console.log(val);
        message.forEach(user=>{
            let name=user.querySelector('h5').textContent.toLowerCase();
            if(name.indexOf(val) != -1)
            {
                user.style.display='flex'
            }
            else{
                user.style.display='none'
            }
        })
    }
    // Search chat thorugh search bar
    messageSearch.addEventListener('keyup',searchMessage);

messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow ='none';
    },2000)
})
    //  Theme customization
      //Open mode
    const openThemeModel=()=>{
      themeMode.style.display='grid';
    }
    // Close mode
    const closeThemeModel=(e)=>{
      if(e.target.classList.contains('customize-theme')){
        themeMode.style.display='none';
      }
      
    }
    themeMode.addEventListener('click',closeThemeModel);
    theme.addEventListener('click',openThemeModel);
    // -----------------FONTS-------------
    Size.addEventListener('click',()=>{
      let fontSizes;
      if(size.classList.contains('font-size-1')){
        fontSizes='10px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
      }
      else if(size.classList.contains('font-size-2')){
        fontSizes='15px';
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-7rem');
      }
      else if(size.classList.contains('font-size-3')){
        fontSizes='18px';
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
      }
      else if(size.classList.contains('font-size-4')){
        fontSizes='22px';
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem');
      }
      else if(size.classList.contains('font-size-5')){
        fontSizes='25px';
        root.style.setProperty('--sticky-top-left','-12rem');
        root.style.setProperty('--sticky-top-right','-35rem');
      }
      document.querySelector('html').style.fontSize=fontSizes;
    })
const searchbarContainerEle=document.querySelector('.search-bar-container')

const searchEle=document.querySelector('.search');
searchEle.addEventListener('click',()=>
{
searchbarContainerEle.classList.toggle('active')
})
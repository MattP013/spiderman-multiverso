const handleMouseEnter = () =>{
  this.classList.add('s-card--hovered')
}
const addEventListenerCards = () =>{
  const cardElements = document.getElementsByClassName('s-card');
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]
    card.addEventListener('mouseenter', handleMouseEnter)
  }
}

document.addEventListener("DOMContentLoaded", addEventListenerCards, false)

// function handleMouseEnter() {
//   this.classList.add('s-card--hovered');
//   document.body.id = `${this.id}-hovered`;
// }

// function handleMouseLeave() {
//   this.classList.remove('s-card--hovered');
//   document.body.id = '';
// }

// function addEventListenersToCards() {
//   const cardElements = document.getElementsByClassName('s-card');
  
//   for (let index = 0; index < cardElements.length; index++) {
//     const card = cardElements[index];
//     card.addEventListener('mouseenter', handleMouseEnter);
//     card.addEventListener('mouseleave', handleMouseLeave);
//   }
// }

// document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
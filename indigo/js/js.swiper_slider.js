var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay:{delay: 3000},
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
      loop: true,
    
      
    },
    pagination: {
      el: '.swiper-pagination',
    },
    
  });
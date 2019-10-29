$(() => {
  
    $('.top h1').text('HANI');
    // Rubrik.
    $('#list').children().text('Hani.');
    // Listan, "varor" som läggs till.
    $('.element').children().addClass('hidden');
    // "Varorna" som är gömda tills man klickar på "lägg till".
  
    $('.change-show').click(() => {
      $('.show').toggleClass('hidden');
    });
  
    $('.add-item').click(() => {
      // Själva "Lägg till"knappen.
      $('#list').append('<li>Hani.</li>');
    });
  
  });
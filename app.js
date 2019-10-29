$(() => {
  
    $('.top h1').text('HANI');
    $('#list').children().text('Hani.');
    $('.element').children().addClass('hidden');
  
    $('.change-show').click(() => {
      $('.show').toggleClass('hidden');
    });
  
    $('.add-item').click(() => {
      $('#list').append('<li>Hani.</li>');
    });
  
  });
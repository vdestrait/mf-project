import $ from 'jquery';
/* TIMELINE ACCORDIONS */

// Decades
export const decadesAccordion = function () {
  $('.date-heading').on('click', function () {
  // close everything else
    $('.date-heading').not($(this)).removeClass('active');
    $('.mvt-heading').removeClass('active');
    $('.decade,.fries,.mvt-body').removeClass('open');
    $(this).parent().animate(
      { top: '100px' }, 5000,
    );
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next('.decade').removeClass('open');
    } else {
      $(this).addClass('active').next('.decade').addClass('open');
    }
  });

  // date-heading scroll to top
  $('.date-heading').on('click', function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top,
    }, 1000);
  });
};


// Movements
export const mvtsAccordion = function () {
  $('.mvt-heading').on('click', function () {
  // close other mvts
    $('.mvt-heading').not($(this)).removeClass('active');
    $('.fries,.mvt-body').removeClass('open');

    if ($(this).hasClass('active')) {
      $(this).removeClass('active').children('.fries').removeClass('open');
      $(this).next('.mvt-body').removeClass('open');
    } else {
      $(this).addClass('active').children('.fries').addClass('open');
      $(this).next('.mvt-body').addClass('open');
    }
  });
};

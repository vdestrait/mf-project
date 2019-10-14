import $ from 'jquery';
import { renderArtist } from './single-artist';
import { artists } from './artists';

export const slideRight = function (openBtn, closeBtn, element) {
  openBtn.on('click', function (event) {
    event.preventDefault();
    // Content of right slide
    const indexInArtistArray = $(this).attr('data-pos') || 0;
    const artist = renderArtist(artists[indexInArtistArray]);
    $('#slide-right > .container').empty();
    $('#slide-right  > .container').append(artist);
    if ($(window).width() < 768) {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '100%',
        'z-index': '99',
      }).animate({ right: 0 }, 500);
    } else if ($(window).width() > 767 && $(window).width() < 992) {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '60%',
      }).animate({ right: 0 }, 500);
      if ($('#slide-left').css('left') === '0px') {
        $('#slide-left').animate({ left: '-100%' }, 500);
        $('#core').animate({ 'margin-left': '0%' }, 500);
      }
      $('#core').animate({
        'margin-right': '40%',
        width: '40%',
      }, 500);
      $('header').addClass('side-tablet');
    } else {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '33.3333%',
      }).animate({ right: 0 }, 500);

      let coreWidth = '66.6666%';
      if ($('#slide-left').css('left') === '0px') {
        coreWidth = '33.3333%';
      }

      $('#core').animate({
        'margin-right': '33.3333%',
        width: coreWidth,
      }, 500);
    }
    return false;
  });

  closeBtn.on('click', function (event) {
    event.preventDefault();
    $('header').removeClass('side-tablet');
    element.animate({ right: '-100%' }, 500);

    if ($(window).width() > 991) {
      let coreWidth = '66.6666%';
      if ($('#slide-left').css('left') === '0px') {
        coreWidth = '66.6666%';
      } else {
        coreWidth = '100%';
      }
      $('#core').animate({
        'margin-right': 0,
        width: coreWidth,
      }, 500);
    } else {
      $('#core').animate({
        'margin-right': 0,
        width: '100%',
      }, 500);
    }

    return false;
  });
};


export const slideLeft = function (openBtn, closeBtn, element) {
  openBtn.on('click', function (event) {
    event.preventDefault();
    element.animate({ left: '-100%' }, 500);
    if ($(window).width() < 768) {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '100%',
      }).animate({ left: 0 }, 500);
    } else if ($(window).width() > 767 && $(window).width() < 992) {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '60%',
      }).animate({ left: 0 }, 500);
      if ($('#slide-right').css('right') === '0px') {
        $('#slide-right').animate({ right: '-100%' }, 500);
        $('#core').animate({ 'margin-right': '0%' }, 500);
      }
      $('#core').animate({
        'margin-left': '60%',
        width: '40%',
      }, 500);
      $('header').addClass('side-tablet');
    } else {
      element.css({
        position: 'fixed',
        top: '0',
        overflow: 'scroll',
        height: '100%',
        width: '33.3333%',
      }).animate({ left: 0 }, 500);

      let coreWidth = '66.6666%';
      if ($('#slide-right').css('right') === '0px') {
        coreWidth = '33.3333%';
      }

      $('#core').animate({
        'margin-left': '33.3333%',
        width: coreWidth,
      }, 500);
    }
    return false;
  });

  closeBtn.on('click', function (event) {
    event.preventDefault();
    $('header').removeClass('side-tablet');
    element.animate({ left: '-100%' }, 500);

    if ($(window).width() > 991) {
      let coreWidth = '66.6666%';
      if ($('#slide-right').css('right') === '0px') {
        coreWidth = '66.6666%';
      } else {
        coreWidth = '100%';
      }
      $('#core').animate({
        'margin-left': 0,
        width: coreWidth,
      }, 500);
    } else {
      $('#core').animate({
        'margin-left': 0,
        width: '100%',
      }, 500);
    }

    return false;
  });
};

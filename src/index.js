import './styles.scss'; // entry poin for styles
import $ from 'jquery';
import { decadesAccordion, mvtsAccordion } from './app/helpers/accordion';
import { artists } from './app/services/artists';
import { slideRight, slideLeft } from './app/services/slides';
import { renderArtist } from './app/services/single-artist';
import { renderMvt } from './app/services/single-movement';


/* TIMELINE ACCORDIONS */

// Decades
decadesAccordion();

// Movements
mvtsAccordion();


// Content of left slide
const movement = renderMvt();
$('#slide-left').append(movement);

// Single artist page slides in from the right side
const artistBtn = $('.artists-list > a');
const closeArtBtn = $('.fries-btn-art');
const artistSlide = $('#slide-right');
console.log(closeArtBtn);
slideRight(artistBtn, closeArtBtn, artistSlide);

// Single movement page slides in from the left side
const mvtBtn = $('.mvt-more');
const closeMvtBtn = $('.fries-btn a');
const mvtSlide = $('#slide-left');
slideLeft(mvtBtn, closeMvtBtn, mvtSlide);

// console.log(artists);

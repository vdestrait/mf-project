import { parseWikiDate } from './parse-date';
import { textTreat } from './text-treatment';

export const renderArtist = function (selectedArtist) {
  const dateOfBirth = parseWikiDate(selectedArtist.data.birthDate);
  const dateOfDeath = parseWikiDate(selectedArtist.data.deathDate);
  const textIntro = textTreat(selectedArtist.data.intro);
  const textBio = textTreat(selectedArtist.data.bio);
  const content = `
          <article class="artist">
              <header>
                <h1>${selectedArtist.name}</h1>
                <p>
                ${dateOfBirth}</br>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 12">
                    <g id="Groupe_13" data-name="Groupe 13" transform="translate(-1015 -3)">
                      <line id="Ligne_2" data-name="Ligne 2" x2="8.333" transform="translate(1015.5 6.634)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                      <line id="Ligne_3" data-name="Ligne 3" y2="10.795" transform="translate(1019.667 3.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                    </g>
                  </svg>
                  ${dateOfDeath} 
                </p>
              </header>
              <div class="description">
                <p>${textIntro}</p>
                <h2>Biographie</h2>
                <p>${textBio}</p>
              </div>
    
                <h2>Oeuvres</h2>
                <div class="row">
                    <div class="col-sm-3 col-md-12 col-lg-12 mb-4">
                        <div class="card">
                          <img src="/public/assets/images/del2.jpg" alt="" class="card-img-top">
                          <div class="card-body">Rythmes inca (1954)</div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-12 col-lg-12 mb-4">
                        <div class="card">
                          <img src="/public/assets/images/del3.jpg" alt="" class="card-img-top">
                          <div class="card-body">Esplanade (1987)</div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-12 col-lg-12 mb-4">
                        <div class="card">
                          <img src="/public/assets/images/delhaut1.jpg" alt="" class="card-img-top">
                          <div class="card-body">UT Cercle rouge et rectangle noir sur fond bleu (1962)</div>
                        </div>
                    </div>
                </div>
          </article>
          `;
  return content;
};

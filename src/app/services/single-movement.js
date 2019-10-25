export const renderMvt = function (selectedMvt) {
  console.log('selectedMvt :' + selectedMvt);
  const content = `<div class="movement">
    <div class="fries-btn">
        <a href="index.html"></a>
    </div>
    
    <div class="container">
      <article>
          <header>
            <h1># ${selectedMvt.title}</h1>
          </header>
          <div class="description">
            ${selectedMvt.content}
          </div>

        <div class="artists-list">
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Pol Bury</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Amédée Cortier</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Jo Delahaut</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Walter Leblanc</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Luc Peire</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Mig Quinet</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Jean Rets</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Dan Van Severen</a>
            <a class="btn btn-black" href="artist.html"><i class="fa fa-plus"></i>Marthe Wéry</a>
        </div>
      </article>

  
  </div>
</div>`;
  return content;
};

export const timelineMvts = function (list) {
  let listContent;
  for (const item of list) {
    console.log(item.title);
    const itemContent = `
            <div class="mvt-wrap">
              <div class="mvt-heading">
                <h3>${item.title}</h3>
                <div class="fries"><img src="/public/assets/images/fries-top.png"/></div>
              </div>
              <!--mvt-heading-->

              <div class="mvt-body container">
                <p>
                ${item.shortdesc}
                  <a class="mvt-more" data-pos="${item.id}" href="">En savoir plus <i class="fa fa-angle-double-right"></i></a>
                </p>
                <div class="artists-list">
                </div>
              </div>
            </div>
            <!--mvt-n-->`;
            listContent += itemContent;
            
  }
  return listContent;
};

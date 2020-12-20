$(document).ready(function () {
  $(".filters__filter-name").on("click", function (e) {
    e.preventDefault();
    $(this).parent(".filters__filter").toggleClass("filters__filter--active");
  });
  $(".catalog__more-btn").on("click", function () {
    $(".catalog__more-btn").fadeOut();
    $(".preloader").fadeIn();
    setTimeout(function () {
      $(".preloader").fadeOut();
      let i = 0;
      while (i < 6) {
        $(".catalog__list")
          .append(`<li class="catalog__item catalog__item--hit">
      <div class="catalog__item-representation">
        <img src="img/image01.png" alt="">
      </div>
      <div class="catalog__item-info">
        <span class="catalog__item-price">50000 Р</span>
        <span class="catalog__item-name">Apple iPhone 11 64GB черный (NJD23SK/A)</span>
        <span class="catalog__item-delivery">Доставка курьером</span>
      </div>
      <a href="" class="catalog__item-btn">Подробнее</a>
    </li>`);
        i++;
      }
      $(".catalog__more-btn").fadeIn();
    }, 2000);
  });
});

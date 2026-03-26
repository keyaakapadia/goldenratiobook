/*
 * Basic sample
 */

function addPage(page, book) {
  var id, pages = book.turn('pages');

  var element = $('<div />', {});

  if (book.turn('addPage', element, page)) {

    element.html('<div class="gradient"></div><div class="loader"></div>');

    loadPage(page, element);
  }
}

function loadPage(page, pageElement) {
  var img = $('<img />');

  img.mousedown(function(e) {
    e.preventDefault();
  });

  img.load(function() {
    $(this).css({ width: '100%', height: '100%' });
    $(this).appendTo(pageElement);
    pageElement.find('.loader').remove();
  });

  img.attr('src', 'imgs/goldenratio_' + (page < 10 ? '0' + page : page) + '.png');
}

function addPagesAutomated(book) {
  const numberOfPages = 36;
  for (let i = 1; i <= numberOfPages; i++) {
    addPage(i, book);
  }
}

function isChrome() {
  return navigator.userAgent.indexOf('Chrome') != -1;
}
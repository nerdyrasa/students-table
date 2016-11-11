var NUMBER_OF_STUDENTS_PER_PAGE = 10;
var $ul_li = $("ul li");
var numberOfStudents = $ul_li.length;
var numberOfPages = Math.ceil( numberOfStudents / NUMBER_OF_STUDENTS_PER_PAGE );

createPaginationLinks();

var firstLink = $('.pagination ul li a');
$(firstLink[0]).trigger('click');

function goToPage(){

  pageNumber = $(this).text();
  var lowerBound = ( pageNumber - 1 ) * 10;
  var upperBound = pageNumber * NUMBER_OF_STUDENTS_PER_PAGE;

  $('.pagination ul li a.active').removeClass('active');
  $(this).addClass('active');

  $ul_li.each(function(index, value){
    if ( index >= lowerBound && index < upperBound ){
      $(this).css("display", "list-item");
    }
    else {
      $(this).css("display", "none");
    }
  });
}

function createPaginationLinks() {

  var paginationDiv = $("<div class='pagination'><ul><li></li></ul></div>");
  //$(".page").append(paginationDiv);
  (paginationDiv).insertAfter(".student-list");

  for (var i=1; i <= numberOfPages; i++) {
    var pageLink = $("<a href='#'>" + i + "</a>").on("click", goToPage);
    $(".pagination ul li").append(pageLink);
  }
}

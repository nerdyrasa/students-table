var NUMBER_OF_STUDENTS_PER_PAGE = 10;
var $ul_li = $("ul li");
var numberOfStudents = $ul_li.length;
var numberOfPages = Math.ceil( numberOfStudents / NUMBER_OF_STUDENTS_PER_PAGE );

createPaginationLinks();

// Get the first link and then trigger a the event so the first 10 students are loaded
var firstLink = $('.pagination ul li a');
$(firstLink[0]).trigger('click');

// This function shows 10 students at a time corresponding to the page that was clicked

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

// This function creates the page links depending on the number of students
// The markup does not strictly conform to the specification, but it is very similar
// and it works. May need to revisit this.

function createPaginationLinks() {

  var paginationDiv = $("<div class='pagination'><ul><li></li></ul></div>");

  (paginationDiv).insertAfter(".student-list");

  for (var i=1; i <= numberOfPages; i++) {
    var pageLink = $("<a href='#'>" + i + "</a>").on("click", goToPage);
    $(".pagination ul li").append(pageLink);
  }
}

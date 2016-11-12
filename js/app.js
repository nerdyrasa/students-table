var NUMBER_OF_STUDENTS_PER_PAGE = 10;

var $ul_li = $("ul li");
var numberOfStudents = $ul_li.length;
var numberOfPages = Math.ceil( numberOfStudents / NUMBER_OF_STUDENTS_PER_PAGE );

createPaginationLinks();

// Get the first link and then trigger a the event so the first 10 students are loaded
var links = $('.pagination ul li a');
$(links[0]).trigger('click');

// This function shows 10 students at a time corresponding to the page that was clicked
function goToPage(){

  var pageNumber = $(this).text();
  var lowerBound = ( pageNumber - 1 ) * NUMBER_OF_STUDENTS_PER_PAGE;
  var upperBound = pageNumber * NUMBER_OF_STUDENTS_PER_PAGE;

  $('.pagination ul li a.active').removeClass('active');
  $(this).addClass('active');

  $ul_li.each(function(index){
    if ( index >= lowerBound && index < upperBound ){
      $(this).css("display", "list-item");
    }
    else {
      $(this).css("display", "none");
    }
  });
}

// This function creates the page links depending on the number of students
function createPaginationLinks() {

  if (numberOfPages <= 1) {
    return;
  }

  var paginationDiv = $("<div class='pagination'><ul></ul></div>");

  (paginationDiv).insertAfter(".student-list");

  for (var i=1; i <= numberOfPages; i++) {
    var li = $('<li></li>');
    $('.pagination ul').append(li);

    var pageLink = $("<a href='#'>" + i + "</a>").on("click", goToPage);
    $(".pagination ul li:last").append(pageLink);
  }
}

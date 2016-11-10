var NUMBER_OF_STUDENTS_PER_PAGE = 10;
var $ul_li = $("ul li");
var numberOfStudents = $ul_li.length;
var numberOfPages = Math.ceil( numberOfStudents / NUMBER_OF_STUDENTS_PER_PAGE );

createPaginationLinks();
goToSpecificPage(1);

function goToSpecificPage(pageNumber) {
  var lowerBound = ( pageNumber - 1 ) * 10;
  var upperBound = pageNumber * NUMBER_OF_STUDENTS_PER_PAGE;

  console.log("lower: ", lowerBound, " upper: ", upperBound);

  $ul_li.each(function(index, value){
    if ( index >= lowerBound && index < upperBound ){
      console.log('index: ', index);
      console.log(value);
      $(this).css("display", "list-item");
    }
    else {
      $(this).css("display", "none");
    }
  });
}

function goToPage(){
  pageNumber = $(this).text();
  goToSpecificPage(pageNumber);
}


//<div class="pagination">
//  <ul>
//  <li>
//  <a class="active" href="#">1</a>
//  </li>
//  <li>
//  <a href="#">2</a>
//  </li>
//  <li>
//  <a href="#">3</a>
//  </li>
//  <li>
//  <a href="#">4</a>
//  </li>
//  <li>
//  <a href="#">5</a>
//  </li>
//  </ul>
//  </div>
//    <!-- end pagination -->
//
//  </div>

// Got some help from https://www.youtube.com/watch?v=Wxnd21_f_pc
//

function createPaginationLinks() {

  var paginationDiv = $("<div class='pagination'><ul><li></li></ul></div>");

  $(".page").append(paginationDiv);

  for (var i=1; i <= numberOfPages; i++) {
    console.log(i);
    var pageLink = $("<a href='#'>" + i + "</a>").on("click", goToPage);
    $(".pagination ul li").append(pageLink);
  }

}
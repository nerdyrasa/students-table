
// const keyword is not supported in IE so just use var instead
var NUMBER_OF_STUDENTS_PER_PAGE = 10;

var $ul_li = $("ul li");

var numberOfStudents = $ul_li.length;

console.log("number of students", numberOfStudents);

goToPage(1);

var numberOfPages = Math.ceil( numberOfStudents / NUMBER_OF_STUDENTS_PER_PAGE );

console.log("number of pages", numberOfPages);

function goToPage(pageNumber){

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
$(document).ready(function() {
    // run function on initial page load
    key();
});

function key() {
  var nums =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var ranNums = [];
  var l = nums.length;
  var i = 0;
  var j;
  var turn = Math.floor(Math.random() * 2);
  while (i < 11) {
    j = Math.floor(Math.random() * (l));
    ranNums.push(nums[j]);
    l = l - 1;
    nums.splice(j,1);
    i++;
  }
  for (b = 0; b < 5; b++) {
    var bsquare = "#s-" + ranNums[b];
    $(bsquare).addClass('blue');
  }
  for (r = 5; r < 10; r++) {
    var rsquare = "#s-" + ranNums[r];
    $(rsquare).addClass('red');
  }
  var assassin = "#s-" + ranNums[10];
  $(assassin).addClass('assassin');
  if (turn == 0) {
    $('.first-marker').addClass('blue');
  } else {
    $('.first-marker').addClass('red');
  }
}

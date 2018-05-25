function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  
  for(var i = 0; i< musicians.length; i++)
  {
      array.push( musicians[i] +  " plays " + instruments[i]);
      
   }
   
       return array;
}

function johnLennonFacts(arraysFacts)

{ 
  var i = 0 ;
  var newArray = [];
  while(i < arraysFacts.length)
  {
   newArray.push(arraysFacts[i] + "!!!" );
   i++;
  }
    return newArray;
}

function iLoveTheBeatles(n){
  var emptyArray ;
  do 
  {
    n++;
    emptyArray = console.log("I Love the Beatles");
  }
    while(n < 15);
    return emptyArray;
  }

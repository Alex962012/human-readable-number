module.exports = function toReadable (number) {
    let b=""
    if (number>=100&&number<=101 ||number==200 || number==300||  number==400||  number==500 ||  number==600|| number==700|| number==800||  number==900){
        
        switch(number){
            case 100:
                result="one hundred";
                break;
            case 101:
              result="one hundred one"
              break;  
              case 200:
                result="two hundred";
                break;
              case 300:
                result="three hundred";
                break;
              case 400:
                result="four hundred";
                break;
              case 500:
                result="five hundred";
                break;
              case 600:
                result="six hundred";
                break; 
              case 700:
                result="seven hundred";
                break;  
              case 800:
                result="eight hundred";
                break;  
              case 900:
                result="nine hundred";
                break;      
          }
          return result
        }
   else if (number>101 && number<=999){
        numOne=Number(number.toString()[0])
        result=number
        number=Number(number.toString()[1]+number.toString()[2])
        switch(numOne){
            case 0:
                result="zero";
                break;
            case 1:
              result="one hundred "
              break;  
            case 2:
              result="two hundred ";
              break;
            case 3:
              result="three hundred "
              break;  
            case 4:
              result="four hundred ";
              break;
            case 5:
                result="five hundred ";
                break;  
            case 6:
                result="six hundred ";
                break;
            case 7:
                    result="seven hundred "
                    break;  
            case 8:
                    result="eight hundred ";
                    break;
            case 9:
                    result="nine hundred "
                    break;     
                }
             b=b+result   
            }     
if (number<=13){
switch(number){
case 0:
    result="zero";
    break;
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 
        case 10:
            result="ten";
            break
         case 11:
             result="eleven";
             break
          case 12:
         result="twelve";
         break;
         case 13:
              result="thirteen";
              break ;
            
}
return b+result;
}
else if (number>13 && number<20){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="zero";
    break;
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="fif"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eigh";
        break;
case 9:
        result="nine"
        break;                             
}
return b+result+"teen"     
}
else if(number==20){
number=Number(number.toString()[1])
switch(number){
    case 0:
        result=b+"twenty";
        break;}
        return result 
}
else if (number>=20 && number<30){
number=Number(number.toString()[1])

switch(number){
case 0:
    result="twenty";
    break;
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 
}
return b+"twenty "+result ;
}
else if(number==30){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="thirty";
    break;}
    return b+result ;
}
else if (number>=31 && number<40){
number=Number(number.toString()[1])

switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 
}
return b+"thirty "+result  
}
else if(number==40){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="forty";
    break;}
    return b+result ;
}
else if (number>=41 && number<50){
number=Number(number.toString()[1])
switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}
return b+"forty "+result  
}

else if(number==50){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="fifty";
    break;}
    return b+result ;
}
else if (number>=51 && number<60){
number=Number(number.toString()[1])
switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}

return b+"fifty "+result  

}
else if(number==60){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="sixty";
    break;}
    return b+result ;
}
else if (number>=61 && number<70){
number=Number(number.toString()[1])

switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}
return b+"sixty "+result  
}
else if(number==70){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="seventy";
    break;}
    return b+result ;
}
else if (number>=71 && number<80){
number=Number(number.toString()[1])

switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}
return b+"seventy "+result  
}
else if(number==80){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="eighty";
    break;}
    return b+result ;
}
else if (number>=81 && number<90){
number=Number(number.toString()[1])

switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}
return b+"eighty "+result  
}
else if(number==90){
number=Number(number.toString()[1])
switch(number){
case 0:
    result="ninety";
    break;}
    return b+result ;
}
else if (number>=91 && number<100){
number=Number(number.toString()[1])

switch(number){
case 1:
  result="one"
  break;  
case 2:
  result="two";
  break;
case 3:
  result="three"
  break;  
case 4:
  result="four";
  break;
case 5:
    result="five"
    break;  
case 6:
    result="six";
    break;
case 7:
        result="seven"
        break;  
case 8:
        result="eight";
        break;
case 9:
        result="nine"
        break; 


}

return b+"ninety "+result  
}

return b
}




var arrKeys=document.getElementsByClassName("keys");
var operand1="";
var operator=null;
for(var i=0;i<arrKeys.length;i++){
    arrKeys[i].addEventListener("click",function(){
        var x=this.getAttribute('value');
        console.log(x);
        if(x=='+' || x=='-'|| x=='*' || x=='/'){
            operator=x;
            operand1=parseFloat(document.getElementById("display").textContent);
            document.getElementById("display").innerHTML="";
        }

        else if(x=="="){
            
            if(operator!=null){
                operand2=parseFloat(document.getElementById("display").textContent)
                if(operand2==0 && operator=='/'){
                    document.getElementById("display").innerHTML="ERROR";
                }
                else{
                    document.getElementById("display").innerHTML=eval(operand1+operator+operand2);
                }
                
            }
            
            operand1=document.getElementById("display").innerHTML;
            operand2=0;
            operator=null;
        }
        else if(x=="AC"){
            operand1=null;
            operator=null;
            operand2=null;
            document.getElementById("display").innerHTML="";
        }
        else if(x=="%"){
            if(operator!=null){
                operand2=parseFloat(document.getElementById("display").textContent)
                var percent=(operand1*operand2)/100;
                document.getElementById("display").innerHTML=percent;    
            }
            

        }
        else{
            document.getElementById("display").innerHTML+=x;
        }
        
    });
}
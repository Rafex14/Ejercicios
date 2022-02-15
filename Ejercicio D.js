function mat(numero){

    let num = numero + "";
    let total = ""

    for(let i in num){
        total += (parseInt(num[i])**2 + "");
      }
    
      return parseInt(total);
    }


    console.log(mat(9119))
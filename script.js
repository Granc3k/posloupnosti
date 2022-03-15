"s_n = (a_n_2/2)*(a_value_1+a_value_2)"





function arit_posl(){
    let a_n_1 = document.getElementById("a_n_count_1").valueAsNumber;
    let a_n_2 = document.getElementById("a_n_count_2").valueAsNumber;
    let a_value_1 = document.getElementById("a_value_count_1").valueAsNumber;
    let a_value_2 = document.getElementById("a_value_count_2").valueAsNumber;
    let d_count = document.getElementById("d_count").valueAsNumber;
    let count = document.getElementById("v_count").valueAsNumber;
    let vypis = " ";
    let a_count;

    if (d_count == 0){
        d_count = (a_value_2 - a_value_1)/(a_n_2-a_n_1)
    }
    if (a_n_1 == 0){
        a_n_1 = a_n_2-(a_value_2 - a_value_1)/d_count;
    }
    if (a_n_1 == 1){

    } else{
        a_n_1=1;
        a_value_1=a_value_2 + (a_n_1-a_n_2)*d_count;
    }
    if (a_n_2 == 0){
        a_n_2 = a_n_1 + (a_value_2 - a_value_1)/d_count;
    }
    let i =0;
    while (i <= count){
        a_count = a_n_1 + d*(i - a_n_1);
        vypis = vypis + a_count + ", ";
        i+=1;
    }






 



    document.getElementById("a1").innerHTML= a_value_1;
    document.getElementById("a_n_1_v").innerHTML= a_n_1;
    document.getElementById("a2").innerHTML= a_value_2;
    document.getElementById("a_n_2_v").innerHTML= a_n_2;
    document.getElementById("diference").innerHTML= d_count;
    document.getElementById("vypis").innerHTML= vypis ;
}
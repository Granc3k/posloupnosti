function arit_posl(){
    let a_n_1 = document.getElementById("a_n_count_1").valueAsNumber;
    let a_n_n = document.getElementById("a_n_count_2").valueAsNumber;
    let a_value_1 = document.getElementById("a_value_count_1").valueAsNumber;
    let a_value_n = document.getElementById("a_value_count_2").valueAsNumber;
    let d_count = document.getElementById("d_count").valueAsNumber;
    let count = document.getElementById("v_count").valueAsNumber;
    let vypis = " "
    let a_count = 0
    let s_n = 0;

    if (d_count == 0){
        d_count = (a_value_n - a_value_1)/(a_n_n-a_n_1);
    }
    if (a_n_1 == 0){
        a_n_1 = 1;
    }
    else if (a_n_1 > 1){
        a_n_1=1;
        a_value_1=a_value_n + (a_n_1-a_n_n)*d_count;
    }
    else {
        
    }
    if (a_n_n == 0){
        a_n_n = a_n_1 + (a_value_n - a_value_1)/d_count;
    }
    if (a_value_1 == 0){
        a_value_1 = a_value_n-(a_n_n-a_n_1)*d_count;        
    }
    if (a_value_n == 0){
        a_value_n = a_value_1 + d_count*(a_n_n-a_n_1);
    }
    let i = 1;
    while (i <= count){
        a_count = a_value_1 + d_count*(i-a_n_1);
        vypis = vypis + a_count + ", ";
        i+=1;
    }





 


    s_n = (a_n_n/2)*(a_value_1+a_value_n)
    document.getElementById("a1").innerHTML= a_value_1;
    document.getElementById("a_n_1_v").innerHTML= a_n_1;
    document.getElementById("a2").innerHTML= a_value_n;
    document.getElementById("a_n_2_v").innerHTML= a_n_n;
    document.getElementById("diference").innerHTML= d_count;
    document.getElementById("vypis_a_ap").innerHTML= vypis;
    document.getElementById("vypis_sn").innerHTML= s_n;
}
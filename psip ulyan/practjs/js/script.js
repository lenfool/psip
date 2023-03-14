function primer(a,b,c){

    
    
    var F= (Math.pow(b, 2) - Math.PI) / (Math.abs(a-4)) + 7 * Math.sqrt(c + Math.PI) ;
    
    return F;
    
}
document.write(primer(6,1,2));
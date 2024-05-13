export class BMI{
    constructor(height, weight, isMetric){
        this.height = height;
        this.weight = weight;
        this.isMetric = isMetric; // boolean if false use imperial
    }
    calcualteBMIForMetric(){
        return Math.round((this.weight/(Math.pow(this.height/100,2)))*100)/100;
    }
    calcualteBMIUS(){
        return Math.round((703*(this.weight/Math.pow(this.height,2)))*100)/100;
    }
    setHeight(newHeight){
        if(newHeight=="NaN")
            return;
        this.height = parseFloat(newHeight);
    }
    setWeight(newWeight){
        if(newWeight=="NaN")
            return;
        this.weight = parseFloat(newWeight);
    }
    setIsMetric(newIsMetric){
        this.isMetric = newIsMetric; 
    }
    
}
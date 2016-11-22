class pizza{
  //type constructor below
  constructor(size,meatTopping,veggieTopping){
    this.size=s;
    this.meatTopping=mT;
    this.veggieTopping=vT;
  }


  //type instance functions below

  sizeCost(){
  if(this.size=="S"||this.size=="s"){
    return 7.99;
  }
  else if(this.size=='M'){
    return 9.99;
  }
  else if(this.size=="L"){
    return 12.99
  }
  else if(this.size=="XL"){
    return 15.99;
  }
}

  toppingCost(top){
    if(this.top=meatTopping){
      return meatTopping[meatTopping.length*0.99]
    }
    else if(this.top=veggiaTopping){
      return veggieTopping[gieTopping.length*0.50]
    }
    return toppingCost=this.meatTopping+this.veggieTopping;
  }

  price(){
    return this.sizeCost()+this.toppingCost("meatTopping"+"veggieTopping");
  }

  //type class functions below
  static promotionalDeal(pizza,percent){
    let p =  (1-percent);
    return pizza.price()*p
  }
  addTopping(toptype,newtop){
    if(toptype=='meat'){
      this.meatTopping.push(newtop);
      return meatTopping;
        }
        else if(toptype=-'veggie'){
          veggie.push(newtop);
          return veggieTopping;
        }
      }
      removeTopping(toptype,newtype){
        if(toptype=='meat'){
          this.meatTopping.pop(newtop);
          return meatTopping;
      }
      else if(toptype=='veggie'){
        this.veggietopping.pop(newtop);
        return veggieTopping;
      }
    }
}

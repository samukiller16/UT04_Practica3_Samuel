function testRestaurant(){

    const rest = RestaurantsManager.getInstance();
    const rest2 = RestaurantsManager.getInstance();
    //Devuelve true, ambos son el mismo objeto
    console.log(rest == rest2);
    console.log(typeof 2 !== "number");

}
testRestaurant();
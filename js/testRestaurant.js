function testRestaurant(){

    const rest = RestaurantsManager.getInstance();
    const rest2 = RestaurantsManager.getInstance();
    //Devuelve true, ambos son el mismo objeto
    console.log(rest == rest2);

}
testRestaurant();
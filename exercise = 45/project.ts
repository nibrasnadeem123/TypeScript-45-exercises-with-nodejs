function car_info(manufacturerer , model , ...options){
   let car = {
       manufacturer_name : manufacturerer,
        model_name:model,
       }

     options.forEach(option => {
        let [key,value]=option.split(":")
        car[key.trim()]= value.trim()
     });
     return car
}
let my_car = car_info("toyota","corolla","colour:white","year:2024")

console.log(my_car)
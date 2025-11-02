const restaurant = [];

const images= ["first","second","third","fourth","fifth","sixth","seventh","eight","nine","ten"];

const restname= ["Savory Bites","The Golden Spoon","Urban Eats","Taste Haven","Spice Symphony","Gourmet Junction","The Hungry Fork","Flavorsome Feast","Epicurean Delights","The Cozy Plate","Fire & Smoke Grill","Ocean Breeze Diner","Farm Fresh Table", "Fusion Fiesta","The Rustic Fork","Heavenly Bites","Sizzle & Savor","The Foodie's Den","Mouthful Magic",
  "Delish Diner"];

  const foodtype = ["Italian", "Chinese", "Mexican", "Indian", "Japanese", "Mediterranean", "French", "Thai", "American", "Korean"];
  
  const delhiLocation = ["Connaught Place", "Chandni Chowk", "Hauz Khas", "Saket", "Karol Bagh", "Rajouri Garden", "Lajpat Nagar", "Dwarka", "Vasant Kunj", "Greater Kailash"];



 for(let i=0;i<100;i++){

  const obj={};

  obj["images"] = images[Math.floor(Math.random()*10)];

  obj["name"] = restname[Math.floor(Math.random()*20)];

  obj["rating"] = Math.floor(Math.random()*5+1);

  obj["food_type"] = foodtype[Math.floor(Math.random()*10)];

  obj["price_for_two"] = Math.floor(Math.random()*2401+100);

  obj["location"] = delhiLocation[Math.floor(Math.random()*10)];

  obj["Distance_from_customer_house"] = (Math.floor(Math.random()*10).toFixed(1));

  obj["offers"] = Math.floor(Math.random()*30);

 //restourent only 30% offer alcohol
  obj["alcohol"] = Math.random()>0.7;

  obj["restaurent_open_time"] =  Math.floor(Math.random() * 12)

  obj["restaurent_close_time"] = obj["restaurant_open_time"] + Math.floor(Math.random() * 12) + 1;
  restaurant.push(obj);
}

console.log(restaurant);

const jsonData = JSON.stringify(restaurant, null, 2); 

console.log(jsonData);
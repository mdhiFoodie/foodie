
const losBurritosMenu = { 
    'Breakfast Burritos': [
      {name: 'Burrito a La Mexicana', price: 6.95},
      {name: 'Bacon & Eggs Burrito', price: 6.95},
      {name: 'Chorizo & Eggs Burrito', price: 6.95},
      {name: 'Ham & Eggs Burrito', price: 6.95},
      {name: 'Steak & Eggs Burrito', price: 8.95},
      {name: 'Barbacoa & Eggs Burrito', price: 8.95},
      {name: 'Combination Burrito', price: 8.95} ],
    'Tacos': [
      {name: 'Carne Asada Taco', price: 2.75},
      {name: 'Chicken Taco', price: 2.75},
      {name: 'Al Pastor Taco', price: 2.75},
      {name: 'Carnitas Taco', price: 2.75},
      {name: 'Barbacoa Taco', price: 2.75},
      {name: 'Grilled Fish Taco', price: 3.25},
      {name: 'Fried Fish Taco', price: 3.25},
      {name: 'Shrimp Taco', price: 3.75},
      {name: 'Crispy Potato Taco', price: 2.95},
      {name: 'Crispy Taco', price: 2.95}, ],
    'Burritos': [ 
      {name: 'Bean & Cheese Burrito', price: 4.95},
      {name: 'Grilled Vegetable Burrito', price: 6.95},
      {name: 'Carne Asada Burrito', price: 6.95},
      {name: 'Chicken Burrito', price: 6.95},
      {name: 'Barbacoa Burrito', price: 6.95},
      {name: 'Al Pastor Burrito', price: 6.95},
      {name: 'Carnitas Burrito', price: 6.95},
      {name: 'Green Chile Burrito', price: 6.95},
      {name: 'Red Chile Burrito', price: 6.95},
      {name: 'Combination Burrito', price: 8.95},
      {name: 'Grilled Fish Burrito', price: 8.95},
      {name: 'Shrimp & Scallop Burrito', price: 9.95},
      {name: 'California Burrito', price: 9.75}, ] 
    };
const michaelsCheeseAndBreadEmporium = { 
    'Breakfast Cheese': [
      {name: 'Cheese a La Mexicana', price: 14.00},
      {name: 'Bacon & Eggs Cheese', price: 14.00},
      {name: 'Chorizo & Eggs Cheese', price: 7.65},
      {name: 'Ham & Eggs Cheese', price: 7.65},
      {name: 'Steak & Eggs Cheese', price: 4.20},
      {name: 'Barbacoa & Eggs Cheese', price: 4.20},
      {name: 'Combination Cheese', price: 4.20} ],
    'Bread': [
      {name: 'Carne Asada Bread', price: 3.33},
      {name: 'Chicken Bread', price: 3.33},
      {name: 'Al Pastor Bread', price: 3.33},
      {name: 'Carnitas Bread', price: 3.33},
      {name: 'Barbacoa Bread', price: 3.33},
      {name: 'Grilled Fish Bread', price: 3.25},
      {name: 'Fried Fish Bread', price: 3.25},
      {name: 'Shrimp Bread', price: 3.75},
      {name: 'Crispy Potato Bread', price: 2.95},
      {name: 'Crispy Bread', price: 2.95}, ],
    'Cheese Bread': [ 
      {name: 'Bean & Cheese Cheese Bread', price: 4.95},
      {name: 'Grilled Vegetable Cheese Bread', price: 7.65},
      {name: 'Carne Asada Cheese Bread', price: 7.65},
      {name: 'Chicken Cheese Bread', price: 7.65},
      {name: 'Barbacoa Cheese Bread', price: 7.65},
      {name: 'Al Pastor Cheese Bread', price: 7.65},
      {name: 'Carnitas Cheese Bread', price: 7.65},
      {name: 'Green Chile Cheese Bread', price: 7.65},
      {name: 'Red Chile Cheese Bread', price: 7.65},
      {name: 'Combination Cheese Bread', price: 4.20},
      {name: 'Grilled Fish Cheese Bread', price: 4.20},
      {name: 'Shrimp & Scallop Cheese Bread', price: 9.95},
      {name: 'California Cheese Bread', price: 9.75}, ] 
    };
const danielsKoreanBBQ = { 
    'Breakfast Bibimbop': [
      {name: 'Bibimbop a La Mexicana', price: 14.00},
      {name: 'Bacon & Eggs Bibimbop', price: 14.00},
      {name: 'Chorizo & Eggs Bibimbop', price: 6.95},
      {name: 'Ham & Eggs Bibimbop', price: 6.95},
      {name: 'Steak & Eggs Bibimbop', price: 8.95},
      {name: 'Barbacoa & Eggs Bibimbop', price: 8.95},
      {name: 'Combination Bibimbop', price: 8.95} ],
    'BBQ': [
      {name: 'Carne Asada BBQ', price: 3.33},
      {name: 'Chicken BBQ', price: 17.95},
      {name: 'Al Pastor BBQ', price: 17.95},
      {name: 'Carnitas BBQ', price: 17.95},
      {name: 'Barbacoa BBQ', price: 17.95},
      {name: 'Grilled Fish BBQ', price: 3.25},
      {name: 'Fried Fish BBQ', price: 3.25},
      {name: 'Shrimp BBQ', price: 3.75},
      {name: 'Crispy Potato BBQ', price: 2.95},
      {name: 'Crispy BBQ', price: 2.95}, ],
    'Bowls': [ 
      {name: 'Bean & Cheese Bowl', price: 4.95},
      {name: 'Grilled Vegetable Bowl', price: 6.95},
      {name: 'Carne Asada Bowl', price: 6.95},
      {name: 'Chicken Bowl', price: 6.95},
      {name: 'Barbacoa Bowl', price: 6.95},
      {name: 'Al Pastor Bowl', price: 6.95},
      {name: 'Carnitas Bowl', price: 6.95},
      {name: 'Green Chile Bowl', price: 6.95},
      {name: 'Red Chile Bowl', price: 6.95},
      {name: 'Combination Bowl', price: 8.95},
      {name: 'Grilled Fish Bowl', price: 8.95},
      {name: 'Shrimp & Scallop Bowl', price: 9.95},
      {name: 'California Bowl', price: 9.75}, ] 
    };
const hunters = { 
    'Breakfast Fish': [
      {name: 'Fish a La Mexicana', price: 6.95},
      {name: 'Bacon & Eggs Fish', price: 6.95},
      {name: 'Chorizo & Eggs Fish', price: 6.95},
      {name: 'Ham & Eggs Fish', price: 6.95},
      {name: 'Steak & Eggs Fish', price: 8.95},
      {name: 'Barbacoa & Eggs Fish', price: 8.95},
      {name: 'Combination Fish', price: 8.95} ],
    'Chips': [
      {name: 'Carne Asada Chip', price: 17.95},
      {name: 'Chicken Chip', price: 2.75},
      {name: 'Al Pastor Chip', price: 2.75},
      {name: 'Carnitas Chip', price: 2.75},
      {name: 'Barbacoa Chip', price: 2.75},
      {name: 'Grilled Fish Chip', price: 3.25},
      {name: 'Fried Fish Chip', price: 3.25},
      {name: 'Shrimp Chip', price: 3.75},
      {name: 'Crispy Potato Chip', price: 2.95},
      {name: 'Crispy Chip', price: 2.95}, ],
    'Scones': [ 
      {name: 'Bean & Cheese Scone', price: 4.95},
      {name: 'Grilled Vegetable Scone', price: 6.95},
      {name: 'Carne Asada Scone', price: 6.95},
      {name: 'Chicken Scone', price: 6.95},
      {name: 'Barbacoa Scone', price: 6.95},
      {name: 'Al Pastor Scone', price: 6.95},
      {name: 'Carnitas Scone', price: 6.95},
      {name: 'Green Chile Scone', price: 6.95},
      {name: 'Red Chile Scone', price: 6.95},
      {name: 'Combination Scone', price: 8.95},
      {name: 'Grilled Fish Scone', price: 8.95},
      {name: 'Shrimp & Scallop Scone', price: 9.95},
      {name: 'California Scone', price: 9.75}, ] 
    };


module.exports.losBurritosMenu = losBurritosMenu;
module.exports.hunters = hunters;
module.exports.danielsKoreanBBQ = danielsKoreanBBQ;
module.exports.michaelsCheeseAndBreadEmporium = michaelsCheeseAndBreadEmporium;
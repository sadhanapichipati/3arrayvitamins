
 const items = require("../3arrayvitamins/data");

// 1. Get all items that are available 
      const allItems = items.filter(element =>{
        return element.available
      })
      console.log(allItems);

//     2. Get all items containing only Vitamin C.
          const contain = items.filter(item => item.contains === "Vitamin C"
          )
          console.log(contain);
//     3. Get all items containing Vitamin A.
           const vitmai = items.filter(item =>{
            return item.contains.includes("Vitamin A")
           })
           console.log(vitmai);
//     4. Group items based on the Vitamins that they contain in the following format:
//         {
//             "Vitamin C": ["Orange", "Mango"],
//             "Vitamin K": ["Mango"],
//         }
        



const groupItems = {};

items.forEach(item =>{
  const vitamins = item.contains.split(', ');
  vitamins.forEach(vitamin => {
    if (!groupItems[vitamin]) {
      groupItems[vitamin] = [];
      
    }
    groupItems[vitamin].push(item.name);
  });
});
console.log(groupItems);
        
//         and so on for all items and all Vitamins.
//     5. Sort items based on number of Vitamins they contain.
         const sorted = items.sort((a,b)=>{
          const VitaminA = a.contains.split(",").length;
          const VitaminB = b.contains.split(",").length;
          return VitaminB - VitaminA;
         });
         console.log(sorted);
//     NOTE: Do not change the name of this file

// */ 
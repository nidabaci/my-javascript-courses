/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`);
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
  };
  
  module.exports = brainstormDinner;


////////////////////////////

//   const shopForBeans = () => {
//     return new Promise((resolve, reject) => {
//       const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//     setTimeout(()=>{
//       let randomIndex = Math.floor(Math.random() * beanTypes.length);
//       let beanType = beanTypes[randomIndex];
//       console.log(`2. I bought ${beanType} beans because they were on sale.`);
//      resolve(beanType);
//     }, 1000);
//   });
//   }
    
  module.exports = shopForBeans;

  ////////////////
/*
This is the shopForBeans function from the last exercise
*/

const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
     resolve(beanType);
    }, 1000)
  })
  }
  
  let soakTheBeans = (beanType) => {
     return new Promise((resolve, reject) => {
       console.log('Time to soak the beans.');
      setTimeout(()=>{
        console.log(`... The ${beanType} beans are softened.`);
        resolve(true);
        }, 1000);
    });
  }
  
  let cookTheBeans = (isSoftened) => {
    return new Promise((resolve, reject) => {
      console.log('Time to cook the beans.');
      setTimeout(()=>{
        if (isSoftened) {
          console.log('... The beans are cooked!');
          resolve('\n\nDinner is served!');
        }
      }, 1000);
    });
  }
  
    
  module.exports = {shopForBeans, soakTheBeans, cookTheBeans};

  // This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   // This function returns a promise that resolves half of the time and rejects half of the time
   let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    });
   };
   
   module.exports = cookBeanSouffle;

   //////////////////
   let cookBeans = () => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('beans');
     }, 1000);
   });
  };
  
  let steamBroccoli = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('broccoli');
     }, 1000);
   });
  };
  
  let cookRice = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('rice');
     }, 1000);
   });
  };
  
  let bakeChicken = () => {
   return new Promise ((resolve, reject) => {
     setTimeout(()=>{
       resolve('chicken')
     }, 1000);
   });
  };
  
  module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken};



//   PROMISES LIBRARY
// let cookBeans = () => {
//     return new Promise ((resolve, reject) => {
//      setTimeout(()=>{
//        resolve('beans');
//      }, 1000);
//    });
//   };
  
//   let steamBroccoli = () => {
//    return new Promise ((resolve, reject) => {
//      setTimeout(()=>{
//        resolve('broccoli');
//      }, 1000);
//    });
//   };
  
//   let cookRice = () => {
//    return new Promise ((resolve, reject) => {
//      setTimeout(()=>{
//        resolve('rice');
//      }, 1000);
//    });
//   };
  
//   let bakeChicken = () => {
//    return new Promise ((resolve, reject) => {
//      setTimeout(()=>{
//        resolve('chicken');
//      }, 1000);
//    });
//   };
  
//   module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken};
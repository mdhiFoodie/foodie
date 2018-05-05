// import dbConnection from '../../../../../api/rest-server/db/sql/index.js';

// const SearchRestaurantsModel = (payload, callback) => {
//      console.log('this is the Search Restaurants Model payload', payload)
//     connection.query(`SELECT  FROM businesses WHERE businessName = "${reqbody.businessName}"`, (err, result, field) => {
//         console.log('this is the Search Restaurants Model results',result);
//         if(err){
//             throw err;
//         }
//         else {
//             if(result.length) {
//                 callback(err, {result, confirmed : true})
//             }
//             else {
//                 callback(err, {confirmed : false})
//             }
//         }
//     })
// }

// export default SearchRestaurantsModel;
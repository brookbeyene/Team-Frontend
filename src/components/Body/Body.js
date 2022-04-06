import React, { Component, useState, useEffect } from 'react'

// class Body extends Component{
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items:[]
//         };
//     }

//     componentDidMount() {
//         fetch("http://localhost:8083/")
//           .then((response) => response.json())

//         .then(
//             (result) =>{
//                 this.setState({
//                   isLoaded: true,
//                   items: result,
//                 });
//                 //   console.log(results);
//             },
//             (error) =>{
//                 this.setState({
//                     isLoaded: true,
//                 error})
//             }
//         )
//     }

//     render() {

//         const {error, isLoaded, items} = this.state;
//         if(error) {
//             return <div>Error: {error.message}</div>
//         } else if(!isLoaded){
//             return <div>Loading...</div>;
//         } else{
//             return (
//               <div className="body-container">
//                 <div className="data-container">
//                   <div>
//                       <ol>

//                     {items.map((item) => (
                      
//                         <li key={item.id}>
//                           Vin number: {item.vin} ||
//                           Maker: {item.make} ||
//                           Year: {item.year} || 
//                           Price: ${item.price}
//                         </li>
                      
//                     ))}
//                       </ol>
//                   </div>
//                 </div>
            
//               </div>
//             );
//         }
//     }
// }

function Body(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8083/")
          .then((response) => response.json())

          .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
             
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
    }, [])
    //error, loaded, items
    if(error){
        return <div>Error: {error.message}</div>
    }else if(!isLoaded){
        return <div>Loading...</div>;
    }else {
        return (
          <div className="body-container">
            <div className="data-container">
              <div>
                <ol>
                  {items.map((item) => (
                    <li key={item.id}>
                      Vin number: {item.vin} || Maker: {item.make} || Year:{" "}
                      {item.year} || Price: ${item.price}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        );
    }
}


export default Body;
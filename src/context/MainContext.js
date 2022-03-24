import axios from "axios";
import React, { useContext, useEffect, useState, createContext } from "react";
// import { getProduct } from "../components/Course/screens/ProductsService";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [items, setItems] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {

    async function sincronize() {

      let config = {
        headers: {
          "content-type": "aplication/json"
        }
      }
      let data = await axios.get(
        "https://ulearning-backend.vercel.app/verifytoken",
        config
      );

      if (data.data.message === "success") {

        const fullname = data.data.session.user.fullname;
        const email = data.data.session.user.email;
        const userProfile = { fullname, email };

        setIsLogedIn(true);
        // Split the firts name from fullname and set as user name
        setUser(data.data.session.user.fullname.split(' ').slice(0, -1).join(' '));
        setProfile(userProfile);

        console.log("context fetch authentication response: SUCCESS")

      } else if (token != "") {

        const response = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt?json&access_token=${token}`);

        const fullname = response.data.name;
        const email = response.data.email;
        let userProfile = { fullname, email }
        
        setIsLogedIn(true);
        setProfile(userProfile);
        setUser(response.data.given_name);
        console.log("context fetch authentication response: AUTHENTICATED with Google account")

      } else {

        setIsLogedIn(false);
        console.log("context fetch authentication response: NOT AUTHENTICATED")

      }
    }
    sincronize()

  }, [isLogedIn, user, token]);

  //   function addItemToCart(id){
  //     const product = getProduct(id);
  //     setItems((prevItems)=>{
  //         const item = prevItems.find((item)=>(item.id == id));
  //         if(!item){
  //             return[...prevItems,{
  //                 id,
  //                 qty: 1,
  //                 product,
  //                 totalPrice: product.price
  //             }]
  //         }
  //         else{
  //             return prevItems.map((item)=>{
  //                 if(item.id == id){
  //                     item.qty++;
  //                     item.totalPrice += product.price;
  //                 }
  //                 return item;
  //             });
  //         }
  //     });
  // }

  // function getItemsCount(){
  // return items.reduce((sum,item)=>(sum + item.qty), 0)
  // }

  // function getTotalPrice(){
  // return items.reduce((sum, item)=>(sum + item.totalPrice), 0);
  // }

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        isLogedIn,
        setIsLogedIn,
        profile,
        setProfile,
        items,
        setItems,
        token,
        setToken
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
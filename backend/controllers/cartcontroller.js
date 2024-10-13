import userModel from "../models/userModel";
const addTocart = async (req,res) => {
    try{
        const { userId ,itemId , size} = req.body

        const userData = await usermodel.findById(userId)
        let cartData = await userData.cartData;

        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1

            }
            else{
                cartData[itemId][size] = 1
            }
        } else{
            cartData[itemId] ={}
            cartData[itemId][size] = 1
        }

        await usermodel.findByUpdate(userId,{cartData})

        res.json({success : true,message: "Added to cart"})
    }catch (error) {
                console.log(error)
                res.json({ success: false,message: error.message})
    }

}

//update user cart 
const updatecart= async (req,res) => {
        try{
           const ( userId,itemId,size,quantity ) = req.body
           
           const userData = await usermodel.findById(userId)
             let cartData = await userData.cartData;

             cartData[itemId][size] = quantity
             await usermodel.findByUpdate(userId,{cartData})

             res.json({success : true,message: "cart updated"})

        }catch (error) {
            console.log(error)
            res.json({ success: false,message: error.message})
        }
}

//get user cart data
const getUserCart = async (req,res) => {
            
    try{


        const userData = await usermodel.findById(userId)
             let cartData = await userData.cartData;
             res.json({ success: true ,cartData});

    }catch(error) {
        console.log(error)
        res.json({ success: false,message: error.message})
    }
}
   
export{ addTocart ,updatecart , getUserCart}
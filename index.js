import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express()
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
const port = process.env.PORT || 8000
import loginsignup from './Routes/Login and Sign.js'
import userModel from './DataBase/dataBase.js';
import jwt from 'jsonwebtoken';
import Product from './Routes/Products.js'
import { tweetModel } from './DataBase/dataBase.js';
import { error } from 'console';
import nodemailer from 'nodemailer'
const router = express.Router()
import { stringToHash, varifyHash } from "bcrypt-inzi"
const SECRET = process.env.SECRET || "topsecret";

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))
app.use(cors({
    origin: [   'http://localhost:3000'   , "*"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app
app.set('view engine','ejs')
app.post('/api/v1/forgot-password' ,  (req,res)=>{
    const{email} = req.body     
    console.log(email);


    
    userModel.find({ email :  email  } , function (err, docs) {
        if (docs.length === 0 ) {
            console.log('Error Occur '    + docs);
return res.status(404).send('User Not Found');            
        }
        
       else if (err){
            console.log(     "Error "+   err);
        }
        else{
console.log("Second function call : ", docs);
console.log(typeof docs);
let id 
let email
let password
            for (const key in docs) {

       id  =                docs[key]._id  
       email  =                docs[key].email  
       password  =                docs[key].password  
            }
              const oldUser = docs
            const secret2 =   SECRET  + password;
            const token =    jwt.sign({email: email , id : id}, SECRET, {expiresIn : "5m"} )
          const link = `https://cheerful-shoulder-pads-hare.cyclic.app/reset-password/${id}/${token}`

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'bhaia9036@gmail.com',
              pass: 'sxkplhnfhgdhpevh'
            }
          });
          
          var mailOptions = {
            from: 'bhaia9036@gmail.com',
            to:  email,
            subject: 'Reset Password',
            text: link
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

          console.log(link);
          res.send(link)
        }
    });


})
app.get('/reset-password/:id/:token' ,async(req,res)=>{
const {id,token} = req.params
console.log("ID" +   id);
console.log("Token " + token);

userModel.find({ _id :  id  } , function (err, docs) {
    if (docs.length === 0 ) {
        console.log('Error Occur '    + docs);
return res.status(404).send('User Not Found');
            
    }
    
   else if (err){
        console.log(     "Error "+   err);
    }
    else{
        console.log("Second function call : ", docs);
        console.log(typeof docs);
let id 
let email 
let password
        for (const key in docs) {

   id  =                docs[key]._id  
   email  =                docs[key].email  
   password  =                docs[key].password  
        }


try {
    const verify = jwt.verify(token, SECRET)
    res.render("index" , {email : email, status: "Not Verified" })
  
} catch (error) {
    res.send("Not Verified")
    
}



    }
}); 




})
app.post("/reset-password/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
    userModel.find({ _id :  id  } ,  async function (err, docs) {
        if (docs.length === 0 ) {
            console.log('Error Occur '    + docs);
    return res.status(404).send('User Not Found');
        }
        
       else if (err){
            console.log(     "Error "+   err);
        }
        else{
            

            try {
                
                const verify = jwt.verify(token , SECRET) 
                stringToHash(password).then(hashString => {

                    userModel.updateOne( {_id : id, } , {
                        $set: {
                          password: hashString,
                        },
                      },
                        (err, result) => {
                            if (!err) {
                                console.log("data saved: ", result);
                                res.render("index", { email: verify.email, status: "verified" });
                                            //    res.json({status: "Paswoord Upadate Succesfully "})
                            } else {
                                console.log("db error: ", err);
                                res.status(500).send({ message: "internal server error" });
                            }
                        });
                })
                // res.json({status: "Paswoord Upadate Succesfully "})
            } catch (error) {
                console.log("Error in the last line " +    error);
                res.json({status: "  Some Thing went wrong"})
            }
        
        
        }
    }); 






   
});
app.get('/api/v1/paginatpost', async (req, res) => {
    try {
        let query = tweetModel.find();
    
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * pageSize;
        const total = await tweetModel.countDocuments();
    
        const pages = Math.ceil(total / pageSize);
    
        query = query.skip(skip).limit(pageSize);
    
        if (page > pages) {
          return res.status(404).json({
            status: "fail",
            message: "No page found",
          });
        }
    
        const result = await query;
console.log(result);    
        res.status(200).json({
          status: "success",
          count: result.length,
          page,
          pages : pages,
          data: result,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          status: "error",
          message: "Server Error",
        });
      }
 })
app.post('/api/v1/updates/:id', async (req, res) => {
    
    const body = req.body;
    const id = req.params.id;
    console.log(id);
    console.log(body.name);
    console.log(body.price);
    console.log(body.category);
    console.log(body.description);
    console.log(body.imageUrl);

try {
    

    let data = await tweetModel.findByIdAndUpdate(id,
        {
            name: body.name,
            price: body.price,
            description: body.description,
            imageUrl:body.imageUrl,
            category : body.category
        },
        { new: true }
    ).exec();


} catch (error) {
    console.log(error)   
}
})
app.delete("/api/v1/customer/:id", (req, res) => {
    const id = req.params.id;
  
    tweetModel.deleteOne({ _id: id }, (err, deletedData) => {
      console.log("deleted: ", deletedData);
      if (!err) {
        if (deletedData.deletedCount !== 0) {
          res.send({
            message: "Product has been deleted successfully",
          });
        } else {
          res.status(404);
          res.send({
            message: "No Product found with this id: " + id,
          });
        }
      } else {
        res.status(500).send({
          message: "server error",
        });
      }
    });
  });
app.get('/api/v1/products', (req, res) => {
console.log(req.ip)
const getData = async () =>{
        const result = await tweetModel.find()
        console.log(result)
    }
    getData()
    tweetModel.find({}, (err, data) => {
        if (!err) {
            res.send({
                message: "Got all products successfully",
                data: data
            })
        } else {
            res.status(500).send({
                message: "server error"
            })
        }
    });
})
app.use('/api/v1', Product) 
app.use('/api/v1', loginsignup) 
app.use('/api/v1', (req, res, next) => {

    console.log("req.cookies: ", req.cookies);

    if (!req?.cookies?.Token) {
        res.status(401).send({
            message: "include http-only credentials with every request"
        })
        return;
    }

    jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
        if (!err) {

            console.log("decodedData: ", decodedData);

            const nowDate = new Date().getTime() / 1000;

            if (decodedData.exp < nowDate) {

                res.status(401);
                res.cookie('Token', '', {
                    maxAge: 1,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                });
                res.send({ message: "token expired" })

            } else {

                console.log("token approved");

                req.body.token = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})
app.get('/api/v1/profile', (req, res) => { 
    const  _id = req.body.token._id
const getData = async ()=>{
    try {
        const user = await userModel.findOne({ _id: _id }, "email firstName lastName -_id").exec()
        if (!user) {
            res.status(404).send({})
            return;
        } else {
  
            res.set({
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                "Surrogate-Control": "no-store"
            });
            res.status(200).send(user)
        }
  
    } catch (error) {
  
        console.log("error: ", error);
        res.status(500).send({
            message: "something went wrong on server",
        });
    }

}
getData()
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './Frontend/build')))
app.use('*', express.static(path.join(__dirname, './Frontend/build')))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
import { response } from "express";
import axios from 'axios';

export const renderHome = async(req, res) => {
    res.render('regbook', {
        layout: "regbook_layouts",
        title: "SIA : ระบบค้นหาเล่มทะเบียน",
    });
}


export const search_vehicle_stock = async(req, res) => {
    try{
        const post = req.body;
        //console.log(post)
        if(post.hasOwnProperty('search')){

            let result = await axios.post(
                'http://localhost:4095/search_vehicle_stock',
                post
            ).then(res=>{return res.data})
            
            res.status(200).json({"success":true, "message":"", "data":result})
        }else{
            
            res.status(400).json({"success":false, "message":"Something Error."})
        }
    }catch(error){
        // console.log.apply(error)
        res.status(500).json({"success":true, "message":"Something Error."})
    }
    /*
    res.render('regbook', {
        layout: "regbook_layouts",
        title: "ค้นหาเล่มทะเบียนรถ",
    });
    */
}


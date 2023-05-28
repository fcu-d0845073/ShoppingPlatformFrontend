import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import domestic from './Images/domestic.JPG'
import education from './Images/education.JPG'
import foreign from './Images/foreign.JPG'
import japan from './Images/japan.JPG'
import love from './Images/love.JPG'
import terrible from './Images/terrible.JPG'
import yt from './Images/yt.JPG'

export default function CheckBill(){

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);
    const [payModel, setPayModel] = useState("");
    const [commodityPlace, setCommodityPlace] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useState(() =>{
        setCommodity(location.state.obj);
    })

    const choosePayModel = (event) => {
        setPayModel(event.target.value);
    };

    const chooseCommodityPlace = (event) => {
        setCommodityPlace(event.target.value);
    }
    
    const purchaseCommodity = () => {
        const purchase = [commodity.id, payModel, commodityPlace, "d0845073"]
        var url = "http://localhost:8080/Commodity/PurchaseCommodity?ids=" + commodity[0].id + "&payModel=" + payModel + "&commodityPlace=" + commodityPlace + "&account=d0845073"
        fetch(url, {
            method:"POST",
            headers:{"Content-Type":"application.json"},
            body:JSON.stringify(purchase)
        }).then(res => res.json())
        .then(result => {
            if (result === true) {
                navigate("/#");
            } else {
                setErrorMessage("You don't choose the select!");
            }
        })
    }

    return(
        <div>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">付款方式</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={payModel}
                label="payMode"
                onChange={choosePayModel}
                >
                <MenuItem value={1}>貨到付款</MenuItem>
                <MenuItem value={2}>郵撥</MenuItem>
                <MenuItem value={3}>行動支付</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">取貨地點</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={commodityPlace}
                label="commodityPlace"
                onChange={chooseCommodityPlace}
                >
                <MenuItem value={1}>A地</MenuItem>
                <MenuItem value={2}>B地</MenuItem>
                <MenuItem value={3}>C地</MenuItem>
                <MenuItem value={4}>D地</MenuItem>
                <MenuItem value={5}>E地</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <Paper elevation={3}>
                {commodity.map(commodity => (
                    <div>
                        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={commodity.id}>
                        {commodity.attribute === "Domestic" && <div><img style={{ alignItems: 'flex-end' }} src={domestic} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Education" && <div><img src={education} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Foreign" && <div><img src={foreign} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Japan" && <div><img src={japan} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Love" && <div><img src={love} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Terrible" && <div><img src={terrible} width={200} height={200} alt=""></img></div>}
                        {commodity.attribute === "Yt" && <div><img src={yt} width={200} height={200} alt=""></img></div>}
                        Id:{commodity.id}<br/>
                        Attribute:{commodity.attribute}<br/>
                        Classfication:{commodity.classfication}<br/>
                        Name:{commodity.name}<br/>
                        Price:{commodity.price}<br/>
                        Quantity:{commodity.quantity}<br/>
                        </Paper> 
                    </div>
                ))}
            </Paper>
            <button onClick={purchaseCommodity}>確認</button>
            <button onClick={() => navigate("/#")}>取消</button>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
    )
}
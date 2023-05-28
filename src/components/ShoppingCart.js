import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ShoppingCart(){

    const navigate = useNavigate();
    const location = useLocation();
    const [commodity, setCommodity] = useState([]);

    useEffect(() =>{
        if (location.state.value === 1) {
            if (!localStorage.getItem('Commodity') === null)
                setCommodity(JSON.parse(localStorage.getItem('Commodity')));
        } else if (location.state.value === 2) {
            setCommodity(location.state.obj);
            var commodityString = JSON.stringify(location.state.obj);
            localStorage.setItem('Commodity', commodityString);
        }
    })

    function removeCommodity() {
        localStorage.removeItem('Commodity');
        setCommodity("");
        navigate("/#");
    }

    return(
        <div>
            {commodity && 
                <Container fixed style={{marginTop:'10px'}} onClick = {() =>{
                    removeCommodity();
                }}>
                    <Card style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                    <CardActionArea>
                        <CardContent>
                        <Typography variant="body2">
                        <Paper elevation={3}>
                        {commodity.map(commodity => (
                            <div>
                                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={commodity.id}>
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
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Container>}
            <button onClick={() => navigate("/CheckBill", {
                state : {
                    obj : commodity
                },
            })}>結帳</button><br/>
            <button onClick={() => navigate("/#")}>回首頁</button>
        </div>
    )
}
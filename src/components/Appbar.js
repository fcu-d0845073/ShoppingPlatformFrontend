import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import TextField from './TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ButtonAppBar() {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ShoppingPlatform
            </Typography>
            <TextField></TextField>
            <Link to = "/">
              <Button color="inherit"><span style={{color: 'white'}}>訂單查詢</span></Button>
            </Link>
            <Link to = "/">
              <Button color="inherit"><span style={{color: 'white'}}>購物車</span></Button>
            </Link>
            <Link to = "/login">
              <Button color="inherit"><span style={{color: 'white'}}>登入</span></Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <ul>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="None"
                name="radio-buttons-group"
            >
              <FormControlLabel value="None" control={<Radio />} label="None" onChange={(e) => {setName(e.target.value)}}/>
              <FormLabel id="demo-radio-buttons-group-label"><h3>Book</h3></FormLabel>
              <FormControlLabel value="Education" control={<Radio />} label="Education" onChange={(e) => {setName(e.target.value)}}/>
              <FormControlLabel value="Love" control={<Radio />} label="Love" onChange={(e) => {setName(e.target.value)}}/>
              <FormControlLabel value="Terrible" control={<Radio />} label="Terrible" onChange={(e) => {setName(e.target.value)}}/>
              <FormControlLabel value="Yt" control={<Radio />} label="Yt" onChange={(e) => {setName(e.target.value)}}/>
              <FormLabel id="demo-radio-buttons-group-label"><h3>CD</h3></FormLabel>
              <FormControlLabel value="Domestic" control={<Radio />} label="Domestic" onChange={(e) => {setName(e.target.value)}}/>
              <FormControlLabel value="Foriegn" control={<Radio />} label="Foriegn" onChange={(e) => {setName(e.target.value)}}/>
              <FormControlLabel value="Japen" control={<Radio />} label="Japan" onChange={(e) => {setName(e.target.value)}}/>
            </RadioGroup>
            </FormControl>
      </ul>
      <Button variant="contained" onClick={() =>{
          navigate("/Commodity", {
            state: {
              value : name,
              id : 1,
            },
          });
        }}>查詢</Button>
    </div>
    
  );
}

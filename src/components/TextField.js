import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CustomizedInputBase() {

    const [name, setName] = useState("");
    const navigate = useNavigate();
    
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search commodity"
        inputProps={{ 'aria-label': 'search commodity' }}
        onChange={(e) => {setName(e.target.value)}}
      />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() =>{
          navigate("/Commodity", {
            state: {
              value : name,
              id : 2,
            },
          });
        }}>
        <SearchIcon />
        </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}




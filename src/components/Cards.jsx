import React from 'react'
import {data} from "@/utils/data"
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';  
import dynamic from 'next/dynamic';

const CardComponent = dynamic(() => import('./CardComponent'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />  
    </Box>
  ),
});

const Cards = () => {
  
  return (
    <Box sx={{ marginBottom: '7rem', marginTop: '2.5rem' }}>
        {data.questions?.map((q)=> (
            <CardComponent key={q.id} question={q}/>
        ))}
    </Box>
  )
}

export default Cards
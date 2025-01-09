import React from 'react'
import {data} from "@/utils/data"
import CardComponent from './CardComponent'
import { Box } from '@mui/material'

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
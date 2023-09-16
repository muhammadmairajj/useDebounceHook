import { Box, Typography, Rating, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MUILibrary() {
    const [ ratingValue, setRatingValue ] = useState<number | null>(null);
    const [comments, setComments] = useState<string>("");

    const isDisabled = ratingValue === null || comments === "";

    const handleChange = (e:  ChangeEventHandler<HTMLInputElement>) => { //no more errors
        setComments(e.target.value);
      };
    return (
       <Box sx={{ display:"flex", justifyContent: "center", width:"100vw" }}>
        <Box sx={{ width:"300px", display:"flex", flexDirection:"column" }}>
            <Typography>How would you rate this experience</Typography>
            <Rating value={ratingValue} onChange={(_, value) => setRatingValue(value)} />
            <Typography>Tell us how it went.</Typography>
            <TextField maxRows={4} multiline value={comments} onChange={handleChange} ></TextField>
            <Button disabled={isDisabled} variant="contained" >Submit</Button>
        </Box>
       </Box>
    )
}
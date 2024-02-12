import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import React from 'react'
export default function Header() {
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
             <Typography variant='h6' color="inherit" sx={{
                flexGrow:1,
             }}>
                Ecomm
             </Typography>
             <Box sx={{display:{md:"flex"}}}>
             <IconButton size='large' aria-label='shows cart items count' color='inherit'>
                <Badge badgeContent={1} color='error'>
                    <ShoppingCartSharpIcon/>
                </Badge>

                </IconButton>

             </Box>
             <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

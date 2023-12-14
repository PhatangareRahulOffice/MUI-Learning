import {ThemeOptions} from '@mui/material/styles';
import React from 'react';
declare module '@mui/material/styles' {
    class ThemeOptions{
       status:{
        danger:React.CssProperties['color']
       }
    }
  
    class Palette {
        neutral? : import('@mui/material').PaletteColor
    }
    class PaletteOptions {
        neutral?:import('@mui/material').PaletteColorOptions
    }
    // class 
}
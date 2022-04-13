import { Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'

const ButtonProcess = ({children, loading, onClick, type = 'button'})=>{
    const classes = useStyles()
  return (
    <div className={classes.wrapper}>
        <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onClick}
            type={type}>
            {children}
        </Button>
        {loading && <CircularProgress size={24} className={classes.process} />}
    </div>
  )
}

export default ButtonProcess
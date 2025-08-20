"use client"

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '@/redux/store'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="40vh"
            bgcolor="#f5f5f5"
            borderRadius={3}
            boxShadow={3}
            p={4}
        >
            <Typography variant="h4" gutterBottom>
                Counter: <span style={{ color: '#1976d2' }}>{count}</span>
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </Button>
            </Stack>
        </Box>
    )
}
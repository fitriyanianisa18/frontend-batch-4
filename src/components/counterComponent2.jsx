"use client"

import {useCounterStore} from '@/zustand/store'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Counter2() {
    const count = useCounterStore((state) => state.count)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    const reset = useCounterStore((state) => state.reset)

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
                    onClick={increment}
                >
                    Increment
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={decrement}
                >
                    Decrement
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={reset}
                >
                    Reset
                </Button>
            </Stack>
        </Box>
    )
}
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DeleteIcon from '@mui/icons-material/Delete';
import NoCrashIcon from '@mui/icons-material/NoCrash';

const CarFormPage = () => (
  <Stack sx={{
    py: { xs: 2, md: 6, xl: 10 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{ p: 3, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }) }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <DirectionsCarIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Create new brand</Typography>
        <TextField
          label="Brand"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
          <TextField
            label="Country"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            label="City"
            fullWidth
            variant="filled"
            size="small"
          />
        </Box>
        <TextField
          label="Style"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ width: 1 }}>
          <Typography component="legend">Images</Typography>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <IconButton>
            <NoCrashIcon sx={{ fontSize: 38, color: 'success.main' }} />
          </IconButton>
        </Box>
        <Button variant="contained" color="primary" size="large" fullWidth>Create</Button>
      </Stack>
    </Paper>

  </Stack>
);

export default CarFormPage;

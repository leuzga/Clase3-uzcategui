
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ItemListContainer: React.FC<{mensaje: string}> = ({mensaje}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "98%", justifyContent: "center" }}>
      <Typography variant="h2" gutterBottom component="div" mt={4}>
        {mensaje}
      </Typography>
    </Box>
  );
}
export default ItemListContainer;
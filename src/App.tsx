import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import { EnumExample } from "./examples/enumExample";
import { NumberExample } from "./examples/numberExample";
import { UnionExample } from "./examples/unionExample";

function App() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            React Generic Select
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A type-safe generic Select component built with React, TypeScript,
            and MUI.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="h6" gutterBottom>
            Enum Example
          </Typography>
          <EnumExample />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Number Example
          </Typography>
          <NumberExample />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Union Type Example
          </Typography>
          <UnionExample />
        </Box>
      </Stack>
    </Container>
  );
}

export default App;

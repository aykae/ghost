import {
    MetaMaskButton,
    useAccount,
    useSDK,
    useSignMessage,
} from "@metamask/sdk-react-ui";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function AppReady() {
    const {
        data: signData,
        isError: isSignError,
        isLoading: isSignLoading,
        isSuccess: isSignSuccess,
        signMessage,
    } = useSignMessage({
        message: "gm wagmi frens",
    });

    const { isConnected } = useAccount();

    return (
        <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button color="inherit">All Policies</Button>
            <Button color="inherit">My Policies</Button>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              My App
            </Typography>
          </Box>
          <Box sx={{ width: '33%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
                {isConnected && (
                    <>
                        <div style={{ marginTop: 20 }}>
                            <button
                                disabled={isSignLoading}
                                onClick={() => signMessage()}
                            >
                                Sign message
                            </button>
                            {isSignSuccess && <div>Signature: {signData}</div>}
                            {isSignError && <div>Error signing message</div>}
                        </div>
                    </>
                )}
          </Box>
        </Toolbar>
      </AppBar>
    );
}

function App() {
    const { ready } = useSDK();

    if (!ready) {
        return <div>Loading...</div>;
    }

    return <AppReady />;
}

export default App;

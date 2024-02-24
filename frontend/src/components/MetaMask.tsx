import {
    MetaMaskButton,
    useAccount,
    useSDK,
    useSignMessage,
} from "@metamask/sdk-react-ui";

function MetaMaskReady() {
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
        <div>
          <MetaMaskButton theme={"dark"} color="white"></MetaMaskButton>
                {isConnected && (
                    <>
                        <div style={{ marginTop: 20 }}>
                            {isSignSuccess && <div>Signature: {signData}</div>}
                            {isSignError && <div>Error signing message</div>}
                        </div>
                    </>
                )}
            </div>
    );
}

function MetaMask() {
    const { ready } = useSDK();

    if (!ready) {
        return <div>Loading...</div>;
    }

    return <MetaMaskReady />;
}

export default MetaMask;
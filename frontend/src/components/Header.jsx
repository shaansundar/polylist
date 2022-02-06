import { sequence } from '0xsequence'
import React from 'react';


const Header = () => {
    const [wallletStatus, setwallletStatus] = React.useState(null);
    const wallet = new sequence.Wallet('mumbai')
    const connectDetails = async () => {
        await wallet.connect()
        const walletID = await wallet.getAddress();
        setwallletStatus(walletID)
    }



    console.log('=> connected?', connectDetails.connected)

    return (
        <div className='h-20 w-full bg-black text-white flex items-center justify-between px-6'>
            <h1 className='text-3xl'>PolyList</h1>
            {!wallletStatus
                ? <button className='bg-white text-black h-8 w-32' onClick={connectDetails}>Connect Wallet</button>
                : <h2 className='text-md underline cursor-pointer' onClick={()=>{wallet.openWallet()}}>Connected To: {wallletStatus}</h2>
            }
        </div>
    );
}

export default Header;
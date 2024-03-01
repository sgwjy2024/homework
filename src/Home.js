import { useState } from 'react';
export default function Home() {
    const [address, setAddress] = useState({
        from: 'atom1xy5y...m6wwz9a',
        to: 'osmo1xy5y...w9a'
    });
    const [count, setCount] = useState(0);
    const arr = ['Max', '1/2', '1/3'];
    function handleAddressFromChange (e) {
        setAddress({
            ...address,
            from: e.target.value
        });
    }
    function handleAddressToChange (e) {
        setAddress({
            ...address,
            to: e.target.value
        });
    }
    function handleCountChange (e) { 
        setCount(e.target.value);
    }
    return (
        <div className='home-page'>
            <div className='dialog'>
                <div className='close'>
                    <img src="/close.png" alt="close"></img>
                </div>
                <div className='title'>Deposit ATOM</div>
                <div className='content'>
                    <div className='tran-form'>
                        <div className='form-item br-6'>
                            <label for="address-from">From Cosmos Hub</label>
                            <div className='input-wrap'>
                                <img className='prefix' src="/atom.svg" alt="edit"></img>
                                <input 
                                    className='br-6'
                                    id="address-from"
                                    type="text" 
                                    value={address.from}
                                    onChange={handleAddressFromChange}
                                />
                            </div>
                        </div>
                        <img className='arrow' src="/arrow-right.png" alt="arrow"></img>
                        <div className='form-item br-6'>
                            <label for="address-to">To Osmosis</label>
                            <div className='input-wrap'>
                                <img className='prefix' src="/osmo.svg" alt="edit"></img>
                                <input 
                                    className='br-6'
                                    id="address-to"
                                    type="text" 
                                    value={address.to}
                                    onChange={handleAddressToChange}
                                />
                                <img className='suffix' src="/edit.png" alt="edit"></img>
                            </div>
                        </div>
                    </div>
                    <div className='count-form'>
                        <div className='top'>
                            <div className='top-name'>Select amount</div>
                            <div>Available<b> 2 ATOM</b></div>
                        </div>
                        <div className='middle br-6'>
                            <div className='img-wrap'>
                                <img src="/atom.svg" alt="icon"></img>
                            </div>
                            <input
                                type="number" 
                                value={count}
                                onChange={handleCountChange}
                            ></input>
                            <div className='rate'>
                                <b>ATOM</b>
                                <span> ≈ $1,013</span>
                            </div>
                        </div>
                        <ul className='bottom'>
                            { 
                                arr.map((item) => {
                                    return (<li className='br-6' key={item}>{item}</li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className='time-box br-6'>
                        <img src="/clock.png" alt="clock"></img>
                        <span>Estimated time: <b>20 seconds</b></span>
                    </div>
                    <div className='button-group'>
                        <button className='confirm br-6'>Transfer</button>
                        <button className='cancel'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
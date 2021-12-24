import { useState, memo, useMemo, useRef } from "react";
// higher order component memo giúp nhớ lại component mà không cần thiết phải re-render
// memo giúp kiểm tra nếu component có props nào thay đổi hay ko nếu ko thì ko re-render còn nếu có thì re-render
function UseMemo ({onIncrease}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([]);
    const nameRef = useRef()
    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }
    const total = useMemo(()=>{
        const result = products.reduce((result, prod)=>{
            console.log();
            return result + prod.price
        }, 0)
        return result
    }, [products])
   
    return (
        <div style={{padding: '10px 32px'}}>
                <input 
                    ref={nameRef}
                    value={name}
                    placeholder="Enter name ..."
                    onChange={e=>setName(e.target.value)}
                />
                <br />
                <input 
                    value={price}
                    placeholder="Enter price ... "
                    onChange={e=> setPrice(e.target.value)}
                />
                <br />
                <button onClick={handleSubmit}>
                    add
                </button>
                <br />
                total: {total}
                <ul>
                    {products.map((product, index)=>(
                        <li key={index}>{product.name} - {product.price}</li>
                    ))}
                </ul>

        </div>

    )
}
export default UseMemo
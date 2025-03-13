import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
const ButtonCom = () => {
    const [buttonFlag,setButtonFlag] = useState(false)
        // 发送模拟的请求
    const Res =() => {
        return  axios.get('xxxx')
    }
    useEffect(() => {
        setTimeout(() => {
            setButtonFlag(false)
        }, 6000)
    },[buttonFlag])
    const handButton = async () => {        
    // 模拟发送验证码
      const a =  await Res()
       if(a === 'code') {
        setButtonFlag(true)

       }
    }
    return (
        <div>
            <Button disable={buttonFlag} onClick={handButton}>模拟发送验证码</Button>  
        </div>
    )
}
export default ButtonCom

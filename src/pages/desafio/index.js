import React, { useState } from 'react'

function Desafio (props) {
    const [k,setK] = useState(4)
    
    const arrayOriginal = [19,10,12,10,24,25,22]
    /* const arrayOriginal = [5,7,4,4] */

    const criaArray = () =>{
        if(k ==="1"  || k === "0") {
            return (
                <div>
                    <p>{`Não se pode testar 0 ou 1`}</p>
                </div>
            )
        }
        var inicialArray = [...arrayOriginal]
        var fila =[]
        var testes = 0
        var response = 0
        var arrayFinal = []
        for (let index = inicialArray.length; index > 0; index--){
            const localArray = [...inicialArray]
            localArray.splice(index-1,1)
            testes++
            if (testeLista(localArray)) {
                response = localArray.length
                arrayFinal= localArray
                break
            } else {
                fila.push(localArray)
            }
            if( index === 1) {
                inicialArray = fila.shift()
                index = localArray.length+1
            }
        }
        return (
            <div>
                <p>{`Array Inicial:[${arrayOriginal}] - Divisor: ${k}`}</p>
                <p>{`Tamanho do maior array é ${response}`}</p>
                <p>{`Foram testados ${testes} combinações`}</p>
                <p>{`Subarray que cumpriu a regra foi [${arrayFinal}]`}</p>
            </div>
                )

    }
    
    const testeLista = (array1) => {
        var response = true
        array1.forEach((element,index) => {
            if (response) {
            for (let i = 0; i < array1.length; i++) {
                if (i !== index) {
                    const soma = element + array1[i];
                    if (soma%k === 0 ){
                       response = false
                       i = array1.length
                       break
                    }
                }
            }
        }
        }
        )
        return response
    }
    const novoTeste =()=> {
        setK(document.getElementById("input1").value)
    }

    return(

        <div>
            <input id="input1" type='number' defaultValue="4"></input>
            <button onClick = {() => novoTeste()}>Testar</button>
           {criaArray()}
        </div>
    )
}
export default Desafio
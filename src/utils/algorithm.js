const resolve=(str)=>{
    let exp = []
    let j = 0
    for (let i = 0; i < str.length; i++) {
        if('^*/-+'.includes(str[i])){
            exp.push(Number(str.slice(j,i)))
            exp.push(str[i])
            j=i+1
        }
    }
    exp.push(Number(str.slice(j,str.length)))

    const operators = ['^','*/','-+']
    for (let i = 0; i < operators.length; i++) {
        const currentOperator = operators[i]
        let aux = exp
        for (let i = 0; i < exp.length; i++) {
            if(currentOperator.includes(aux[i])){      
                if(aux[i]==='^'){
                    aux[i+1]  = Math.pow(aux[i-1],aux[i+1])
                }
                if(aux[i]==='*'){
                    aux[i+1]  = aux[i-1]*aux[i+1]
                    
                }
                if(aux[i]==='/'){
                    if(aux[i+1]===0){
                        throw new Error(`Division por cero`)
                    }
                    aux[i+1]  = aux[i-1]/aux[i+1]         
                }
                if(aux[i]==='+'){
                    aux[i+1]  = aux[i-1]+aux[i+1]        
                }
                if(aux[i]==='-'){
                    aux[i+1]  = aux[i-1] - aux[i+1]         
                } 
                aux[i] = undefined
                aux[i-1] = undefined
            }     
        }      
        exp = aux.filter(n=>n !== undefined)
        console.log(exp)
    }
    return exp[0]
    

}

//console.log(resolve('0*2^2+1+2534.636*3+4*5/2*0+12/12+10+1*2^4') ,eval('0*(2^2)+1+2534.636*3+4*5/2*0+12/12+10+1*(2^4)'))// 16


export default resolve


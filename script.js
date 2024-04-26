//Funciones de propsito general

const textInput = (input) => prompt(input).trim()

const numberInput = (msj, num = 0) => {
    while(true){
        num = Number(prompt(msj))
        if(typeof num === "number" && !Number.isNaN(num)){
            return num
        }else{
            impErr("Por favor ingrese un valor numerico")
        }
    }
}

const impErr = (input) => alert(`Error!\n${input}`)

const impInf = (input) => alert(input)

const gasto = (input,valor=0) => {

    if (money-valor >= 0){
        money -= valor;
        gastos += valor
        impInf(`Haz gastado $${valor}\n${input}\n\n(Saldo Actual: $${money})`)
    }else{ 
        impErr(`Saldo insuficiente\n Saldo Actual: $${money}\n Intento de Gasto: $${valor}`)
    }
}

//Funciones de proposito general

//Ejecucion del programa

let money = 2500000
let gastos = 0
let days = 0
let canContinue = true
let stayAlive = true

impInf(`Felicidades, Hildebrando haz recibido tu salario por $${money} pesos`)

const firstDecision = () => {
    impInf("Dia Viernes - Aeropuerto el dorado...")

    let nxt = true

    while (nxt)
    {
        let op =  numberInput(`Hidelbrando, ¿Quieres comprar algo?\n 1. Almojabana + Gaseosa - $15.000\n 2. Subway + Gaseosa - $23.000\n 3. Nada, mejor ahorro`)
        let valor = 0
        switch(op)
        {
            case 1: 
                valor = 15000
                gasto(`Ademas la comida te hizo mal`, valor)
                nxt = false
            break;

            case 2: 
                valor = 23000
                gasto(`Buena eleccion, quedaste sin hambre`, valor)
                nxt = false
            break;

            case 3:
                impInf(`Ten cuidado, tendras hambre en medellin`)
                nxt = false
            break;

            default:
                impInf(`Selecciona correctamente que quieres hacer`)
            break;
        }
    }
}

const secondDecision = () => {

    impInf("Sala de espera - Tus maletas no cumplen con las dimension maxima permitida\n\n Dimension Permitida: 55 x 40 x 20(cm)\n Dimension actual: 60 x 40 x 20(cm)")

    let highReductionFactor = 55/60
    let longReductionFactor = 40/40
    let widthReductionFactor = 20/20

    console.log(highReductionFactor)    
    console.log(longReductionFactor)
    console.log(widthReductionFactor)

    let reductionFactor = Math.min(highReductionFactor,longReductionFactor,widthReductionFactor)

    console.log(Math.min(highReductionFactor,longReductionFactor,widthReductionFactor))

    let newHigh = (60*reductionFactor).toFixed(2)
    let newLong = (40*reductionFactor).toFixed(2) 
    let newWidth = (20*reductionFactor).toFixed(2) 

    impInf(`Al sacar algunas cosas de tu maleta para ajustarla a la dimension, quedara con las siguientes medidas\n\n  Dimension Permitida: 55 x 40 x 20(cm)\n Dimension original: 60 x 40 x 20(cm)\n Dimension Nueva: ${newHigh} x ${newLong} x ${newWidth}(cm)`)
}

const thirdDecision = () => {

    impInf("Dia Sabado - Medellin -  2 AM... ")

    impInf("Abriendo decodificador de contraseñas...")

    net = "ElPassEs: 01110010_01101001_01110111_01101001"

    impInf(` Red: ${net}\n Pulse 'Aceptar' para comenzar la decodificacion`)

    impInf(`Decodificando...`)

    let originalNetPassword = ""

    net.split("").forEach(character => character  == "_" || character == "1" || character == 0 ? originalNetPassword += character : null)

    console.log(originalNetPassword)

    const binaryNet = originalNetPassword.split("_")

    let decimaldNet = binaryNet.map(Element => parseInt(Element,2))

    console.log(decimaldNet)

    let decodedNet = String.fromCharCode(...decimaldNet)

    impInf(`Decodificacion completada:\n La contrasela de red es: ${decodedNet}`)
}

const fourthDecision = () =>{

    impInf(`Dia Sabado - Macondo...`)

    let sentence = "Taxi me puede llevar al hotel mariposas amarillas"

    impInf(`"${sentence}"\n Traduciendo...`)

    let splitSentence = sentence.split("")

    console.log(splitSentence)

    let translatedSentence ='';
    const vocals = ['a','e','o','u'];
    splitSentence.forEach(character => vocals.includes(character) ? translatedSentence += "i" : translatedSentence += character)

    impInf(`Español:\n ${sentence}\n-------------------------------\nMacondes:\n ${translatedSentence}`)

}

const fifthDeciscion  = ()=> {

impInf(`Dia sabado - Llegada al hotel...`)

    const carDriverHand = Math.floor(Math.random() * 3) + 1 

    const hidelbrandoSelect = () => {
            const input = numberInput(`Estas jugando por $300.000, que vas a tirar?Elige entre:\n🪨🪨 = 1\n🧻🧻 = 2\n✂️✂️ = 3 `)
            if (input < 1 || input > 3) {
                impErr("Por favor ingresa un valor válido")
                return hidelbrandoSelect()
            }
            return input
    }

    function selected(play)  {

		let result = ""

		if(play == 1)

			{
			result = "Piedra 🪨🪨"
			}

		else if(play == 2)
			{
			result = "Papel 🧻🧻"
			}

		else{
			result = "Tijeras ✂️✂️"
			}
		return result
	}

    const hidelbrandoHand = hidelbrandoSelect()
    impInf(`El taxista 🚕 selecciono: ${selected(carDriverHand)}`)

    if (hidelbrandoHand == carDriverHand)
    {
        impInf("Empate ⏸️⏸️, te salvaste")
    }
    else if ((carDriverHand == 1 && hidelbrandoHand == 2) || (carDriverHand == 2 && hidelbrandoHand == 3) || (carDriverHand == 3 && hidelbrandoHand == 1 ))
    {
            impInf("Ganaste 🏆🏆, $300.000 mas")
    }
    else
    {
            impInf("Perdiste 😢😢, $300.000 menos")
            gasto("Para pagar el taxi",300000)
    }
}

const sixthDecision = () => {

    while(canContinue && days<4 && stayAlive){
        days++
        
        const op = () => {
            let input = numberInput(`Que vestimenta deseas usar hoy (dia ${days})\n 1. Amarillo\n 2. Verde\n 3. Roja\n 4. Azul`)
            if(1 <= input <= 4 )
            {
                return input
            }else{
                impErr("Ingresa una opcion valida")
                return op()
            }
            
        }

        let select = (input) =>{
            let selected = numberInput(input)
            if(1 <= selected <= 3 )
            {
                return selected
            }else{
                impErr("Ingresa una opcion valida")
                return select(input)
            }
        };

        const dead = (input) => {
            stayAlive = false
            impInf(`Hidelbrando murio 😢,${input}`)
        }

        const sick = (input) => {
            canContinue = false
            impInf(`Hidelbrando tuvo que irse 😢,${input}`)
        }

        switch(op()){
            case 1:
                if(confirm("Buena eleccion, con este color puedes ir a la piscina\n¿Quieres entrar?\n")){
                    dead("la piscina tenia mal olor, lo ignoro y se intoxico")
                }
                else{
                    impInf("Perfecto, disfruta tu dia")
                }
            break;

            case 2:
                if(confirm("Que bien te ves! hoy vas a una caminata, recuerda llevar hidratacion\n ¿Quieres hacer la caminata completa?")){
                    impInf("Buena idea, toma fotos de todo!")
                }
                else{
                    dead("se equivoco de camino y se perdio en el bosque durante la noche")
                }
            break;

            case 3:
                switch(select("Creo que ese es tu color! con esta pinta puedes ir a la playa, ¿Que quieres hacer?\n 1. Jugar Voleibol\n 2. Nadar en el mar\n 3. Tomar observando el mar")){
                    case 1: 
                        impInf("Genial, la pasaras muy bien")
                    break;

                    case 2:
                        impInf("Buena eleccion, ve ha moto, luego nadas y te relajas")
                    break;

                    case 3:
                        sick("El trago estaba adulterado, tuvo que volver de urgencia")
                    break;

                    default:
                        dead("No entiendo esa opcion")
                }
            break;

            case 4:
                switch(select("Te representa! hoy puedes merodear por el hotel, ¿Que quieres hacer?\n 1. Jugar Bingo\n 2. Bailar\n 3. Casino")){
                    case 1: 
                        impInf("Ganaste!! el bingo era por $300.000")
                        money += 300000
                    break;

                    case 2:
                        impInf("Mueve el esqueleto, te lo pasaras genial")
                    break;

                    case 3:
                        sick("Apostaste hasta el ultimo centavo y quedaste en 0, por suerte ya tenias el pasaje de vuelta")
                        money = 0
                    break;
                }
            break;
        }
    }
}

const isHeAlive = () => {

    const alive = () => {
        if(stayAlive)
        {
            return "vivito y coleando"
        }
        return "se devolvio en cajon 😢"
    }

    impInf(`Reporte Final Hidelbrando\n\n Capital final: ${money}\n Gastos Totales: ${gastos}\n Estado: ${alive()}\n Dias de viaje: ${days}`)

}


firstDecision()
secondDecision()
thirdDecision()
fourthDecision()
fifthDeciscion()
sixthDecision()
isHeAlive()

//Ejecucion del programa
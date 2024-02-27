import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mageClass.js"
import { Arqueiro } from "./modules/archerClass.js"
import { ArqueiroMago } from "./modules/arqueir-mago.js"
import { Guerreiro } from "./modules/warriorClass.js"

const magoDark = new Mago('Dark', 4, 'fogo', 4, 3)
const magaJessica = new Mago('Jessica', 9, 'gelo', 7, 10)
const ArqueirLego = new Arqueiro('Lego', 6, 8)
const ArqueiroMagoMiya = new ArqueiroMago('Miya', 10, 7, 'Água', 10, 10 )
const GuerreiroGabriel = new Guerreiro('Gabiel', 6)
const personagens = [magoDark, magaJessica, ArqueirLego, ArqueiroMagoMiya, GuerreiroGabriel]

new PersonagemView(personagens).render()





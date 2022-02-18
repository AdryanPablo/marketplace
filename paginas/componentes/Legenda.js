export default function Legenda(nome) {
    const Legenda = document.createElement('legend')

    Legenda.textContent = nome
    
    return Legenda
}
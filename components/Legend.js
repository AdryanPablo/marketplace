export default function Legend(name) {
    const Legend = document.createElement('legend')

    Legend.textContent = name
    
    return Legend
}
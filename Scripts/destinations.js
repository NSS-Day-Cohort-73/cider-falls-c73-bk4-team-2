import { getDestinations, getServices, getServicesDestinations, getGuests } from "./database.js"
const destinations = getDestinations()
const services = getServices()
const pairings = getServicesDestinations()
const guests = getGuests ()
 

export const findDestinationServiceIds = (id) => {
    let destinationsPaired = []
    for (const destination of pairings) {
        if (id === destination.destinationsId) {
                 destinationsPaired.push(destination)
        }
    }
        return destinationsPaired
}
export const findServiceDestinationId = (id) => {
    let servicesPaired = []
    for (const service of pairings) {
        if (id === service.servicesId) {
            servicesPaired.push(service)
        }
    }
    return servicesPaired
}

const getServiceNameById = (id) => {
    for (const service of services) {
        if (service.id === id) {
            return service.name
        }
    }
}


document.addEventListener(

    "click",
    (theDestinationClick) => {
        const destinationTarget = theDestinationClick.target
        if (destinationTarget.dataset.type === "destination") { 
            const guestList = guests.filter(g => g.destinationId === parseInt(destinationTarget.dataset.id))
            if (guestList) {
                const guestNames= guestList.map (guest => guest.name).join(", ")
            window.alert(`${guestNames}`)
            }
        }
    }

)

export const destinationList= () => {
    let html = `<section>`
    
    for (const destination of destinations) {
        html += `
        <H2 data-type="destination" data-destinationname="${destination.name}"
        data-id="${destination.id}">${destination.name}</H2>`
        const pairedServices = findDestinationServiceIds(destination.id)

        for (const pairing of pairedServices) {
            const serviceNames = getServiceNameById(pairing.servicesId)
            html += `${serviceNames} <br>`
        }
        
        }
        
    
    html += `</section>`
    return html
}
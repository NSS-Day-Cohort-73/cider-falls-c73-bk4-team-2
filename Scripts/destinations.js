import { getDestinations, getServices, getServicesDestinations } from "./database.js"
const destinations = getDestinations()
const services = getServices()
const pairings = getServicesDestinations()

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

export const destinationList= () => {
    let html = `<section id="destinationCard">`
    
    for (const destination of destinations) {
        html+= `<div id="serviceContainer"`
        html += `<h2 class="title">${destination.name}</h2>`
        html += `<ul id="serviceList">`
        const pairedServices = findDestinationServiceIds(destination.id)

        for (const pairing of pairedServices) {
            const serviceNames = getServiceNameById(pairing.servicesId)
            html += `<li class="serviceName">${serviceNames} </li>`
        }
        html+= `</ul>`
        html+=`</div>`
        }
        
    
    html += `</section>`
    return html
}
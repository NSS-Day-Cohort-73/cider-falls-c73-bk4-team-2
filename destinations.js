import { getServicesDestinations } from "./database.js"
import { getDestinations, getServices } from "./database.js"
const destinations = getDestinations()
const services = getServices()
const guests = getGuests()
const pairings = getServicesDestinations()
// export const destinationList = () => {
//     let destinationHTML = `<ul id="destinationList">`
//     for (const destination of destinations) {
//         destinationHTML += `
//         <li class="destination"
//             data-type="destination"
//             data-id="${destination.id}"
//             data-name="${destination.name}"
//             data-location"${destination.location}">
//                 ${destination.name}
//         </li>
//         `
//     }
    // for (const service of services) {
    //     serviceHTML +=
    // }
//
export const findDestinationServiceIds = (destinationObject, servicesDestinations) => {
    let destinationsPaired = null
    for (const destination of pairings) {
        if (destinationObject.id === destination.destinationsId) {
                 destinationsPaired += destination
        }
    }
        return destinationsPaired
}
export const findServiceDestinationId = (serviceObject, servicesDestinations) => {
    let servicesPaired = null
    for (const service of pairings) {
        if (serviceObject.id === service.servicesId) {
            servicesPaired += service
        }
    }
    return servicesPaired
}
export const pairUpGuestAreas = () {
    let html = `<section>`
    for (const destination of destinations) {
        const pairedDestinations = findDestinationServiceIds(destination, pairings)
        for (const service of services) {
            const pairedServices = findServiceDestinationId(service, pairings)
            html += `<article>
            <H2>${destination.name}</H2>
            ${service.name}<br>
            </article>`
        }
    }
    html += `</section>`
    return html
}
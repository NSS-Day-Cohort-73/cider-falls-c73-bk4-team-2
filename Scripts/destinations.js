import { getDestinations } from "./database.js"

const destinations = getDestinations()

export const destinationList = () => {
    let destinationHTML = `<ul id="destinationList">`

    for (const destination of destinations) {
        destinationHTML += `
        <li class="destination"
            data-type="destination" 
            data-id="${destination.id}" 
            data-name="${destination.name}" 
            data-location"${destination.location}">
                ${destination.name}
        </li>
        `
    }

    destinationHTML += `</ul>`
    return destinationHTML
}
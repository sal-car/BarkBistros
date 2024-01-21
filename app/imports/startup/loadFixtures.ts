// Prepopulate DB using methods defined in imports/api/restaurant.methods.ts 
// && data defined in imports/server/db/fixtures 
import { insertRestaurant } from "../api/restaurant.methods";
import { data } from "/server/db/fixtures";

export function loadFixtures () {
    try {
        data.forEach((item) => {
            insertRestaurant(item)
        })
        // console.log((RestaurantCollection.find({})))
    } catch (error) {
        console.log(error)
        // FIXME: error handling
    }
}


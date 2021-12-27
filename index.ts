
import PhoneBoookClass from "./classes/PhoneBoookClass"


let firstUser = {
    name : "Yusuf Adesola", 
    phone : "08102764439",
    address: "No 4 edimola street, Lagos State"
}

let secondUser = {
    name : "Chimaobi Victor", 
    phone : "09049283848",
    address: "No 4 edimola street, Lagos State"
}


// Task 1 

PhoneBoookClass.addContact(firstUser)

PhoneBoookClass.addContact(secondUser)

console.log(PhoneBoookClass.fetchContacts(), "Fetched")

console.log(PhoneBoookClass.getContactWithPhone("09049283848"))
console.log(PhoneBoookClass.getContactWithIndex(1))

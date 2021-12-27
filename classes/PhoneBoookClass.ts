
import {
    AddContactInterface,
    Contact, 
    IPhoneBook
} from "../interfaces/contactInterface"
/**
 * By a phone book we mean
 * The list of contact with 
 * -Name
 * -Address
 * -Phone Number
*/

// The Data Structure to be used 

/** The Data Structure to used is an ARRAY
 * Reason
 * - Adding a contact to end of an array is constant time i.e O(1), 
 *  since it is not compulsory that we add to the start of the array which reindexes the whole array
 * - The Big O complexity in time to search for a particular contact is O(N) where N is the total number of contacts in the list
 *  If we know the index of the contact, then fetching the contact is O(1) 
 * - Fetching the whole list is also constant time 0(1) since there is just one operation perforned
 */

// Why arry won with respect with other data structures
/**
 * If it is mandatory that we should add to the beginning of the list, that means that an array is inefficient since the whole element will be reindexed. 
 * we can then consiter either a singly linked list or a doubly linked list whose addition to the start of the list is constant time.
 * Searching in array, singlyly linked list, and doubly linked list has big O time complexity of 0(N)
 * But accessing with a specific index will be O(1) with array and still 0(N) with both singly and doubly linked list. 
 */

class PhoneBook implements IPhoneBook{
    // PhoneList is an array of all the contact
    phoneList :Contact[] = []

    
    addContact(contactData:AddContactInterface){
        // We avoid data immutability with push rather we use concat to add the the end of the array
        let isExisting = this.getContactWithPhone(contactData.phone)
        if(isExisting) return false
        let theCopiedList = [...this.phoneList]
        this.phoneList = theCopiedList.concat(contactData)
        

        return this.phoneList
    }

    getContactWithPhone(phone:string){
        // We can only use a linear search here because we don't have access to the index 
        // Also we are not gurantted that this is a sorted array, if it were sorted arrray with phone number, 
        //If not binary search would have been the best alr¥ternative
        let theCopiedList = [...this.phoneList]
        
        
        let foundContact = theCopiedList
            .find(theCon => theCon.phone === phone)
        if(foundContact) return foundContact

        return null
    }


    // If the index of the contact is known in the array, fetch the user
    // This is method operation is constant time i.e O(1)
    getContactWithIndex(index:number){
        if(index<0 || index > this.phoneList.length) return null
        return this.phoneList[index]
    }

    fetchContacts =()=>{
        return this.phoneList
    }
}

export default  new PhoneBook()
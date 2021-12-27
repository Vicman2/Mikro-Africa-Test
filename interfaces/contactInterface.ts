
interface Contact{
    name: string
    phone: string
    address?: string
}

interface AddContactInterface{
    name: string
    phone: string
    address?: string // Address of the contact is optional
}

interface IPhoneBook{
    phoneList: Contact[]
}


export{
    Contact,
    AddContactInterface,
    IPhoneBook
}
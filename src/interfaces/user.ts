export interface IGetUser {
    email: string
}

export interface IPostUser {
    name: string
    image?: string
    email: string 
    password: string
    roleId: number
}
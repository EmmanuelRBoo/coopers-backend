export interface IGetUser {
    name: string
}

export interface IPostUser {
    name: string
    password: string
    roleId: number
}

export interface IPutUser {
    id: string
    name: string
    password: string
}
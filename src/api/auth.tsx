import instance from "./instance"

export const signup = (user: any) =>{
    return instance.post("/user", user)
}
export const list = (url: string) => {
    return instance.get(url);
}
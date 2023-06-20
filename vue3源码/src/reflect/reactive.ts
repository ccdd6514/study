import { track, trigger } from './effect'
 
const isObject = (target) => target != null && typeof target == 'object'
 
export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key:string, receiver) {
            const res = Reflect.get(target, key, receiver) as object
 
            track(target, key)
 
            if (isObject(res)) {
                return reactive(res)
            }
 
            return res
        },
        set(target, key:string, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            console.log(target, key)
            trigger(target, key)
 
            return res
        }
    })
}
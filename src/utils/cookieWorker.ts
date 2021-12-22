import Cookies from 'js-cookie'

const cookie = {
  get: (name: string): string | undefined => {
    const value = Cookies.get(name)
    return value !== 'undefined' ? value : undefined
  },
  set: (name: string, value: any) => {
    Cookies.set(name, value)
  },
  remove: (name: string) => {
    Cookies.remove(name)
  },
}

export default cookie

export type searchquery = {
  id?: number,
  name?: string
}

export type product  = {
  id: number,
  name: string,
  price: number,
  image_urls: string[],
  quantity: number,
  is_active: boolean,
  created_at: string,
  updated_at: string
}

export type productout = {
  id: number,
  name: string,
  price: number,
  image_urls: string[],
  quantity: number,
}

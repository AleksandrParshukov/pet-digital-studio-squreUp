export interface Block {
  id: string,
  title: string,
  desc: string,
  note: string,
  lists: List[],
}

interface List {
  id: string,
  caption: string,
  items: Item[],
}

interface Item {
  id: string,
  icon: string,
  text: string,
}